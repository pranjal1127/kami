import assert from 'assert';
import { ethers } from 'ethers';
import { Address } from '../../src/utils/bytes';
import { t, validate } from '../../src/type-validation';
import {
  ReversePlasmaFactory,
  ValidatorSetFactory,
} from '../../src/typechain/ESN';
import { kami1, kami2, kami3, getProvider } from '../test-configs';
global.providerESN = getProvider(kami1.config.ESN_URL);

const validatorAddressArray = [
  '0x' + kami1.keystore.address,
  '0x' + kami2.keystore.address,
  '0x' + kami3.keystore.address,
];

const contractDeployerWallet = new ethers.Wallet(
  '0x24c4fe6063e62710ead956611b71825b778b041b18ed53118ce5da5f02e494ba'
);

export const EsnSetup = () =>
  describe('ESN Setup', () => {
    it('check if ESN ganache server is initiated', async () => {
      await new Promise(async (resolve, reject) => {
        while (true) {
          try {
            await global.providerESN.getNetwork();
            break;
          } catch (error) {
            console.log('waiting for ganache to start...');
            global.providerESN = getProvider(kami1.config.ESN_URL);
          }
          await new Promise((res) => setTimeout(res, 1000));
        }
        resolve();
      });
    });

    it('initiate ganache and generates a bunch of demo accounts', async () => {
      const accounts = await global.providerESN.listAccounts();
      global.accountsESN = accounts.map((address) => new Address(address));

      assert.ok(
        global.accountsESN.length >= 2,
        'atleast 2 accounts should be present in the array'
      );
    });

    it('deploy Reverse Plasma Smart Contract and set initial values', async () => {
      const reversePlasmaFactory = new ReversePlasmaFactory(
        contractDeployerWallet.connect(global.providerESN)
      );

      global.reversePlasmaInstanceESN = await reversePlasmaFactory.deploy();

      global.consoleLog({
        'global.reversePlasmaInstanceESN.address':
          global.reversePlasmaInstanceESN.address,
      });

      validate(global.reversePlasmaInstanceESN.address, t.hex20);

      await global.reversePlasmaInstanceESN.setInitialValues(
        global.esInstanceETH.address,
        0,
        validatorAddressArray
      );
    });

    it('deploy Validator Set Smart Contract and set initial values', async () => {
      const validatorSetFactory = new ValidatorSetFactory(
        contractDeployerWallet.connect(global.providerESN)
      );

      global.validatorSetInstanceESN = await validatorSetFactory.deploy(
        validatorAddressArray,
        ethers.utils.hexlify(ethers.utils.randomBytes(20))
      );

      global.consoleLog({
        'global.validatorSetInstanceESN.address':
          global.validatorSetInstanceESN.address,
      });

      validate(global.validatorSetInstanceESN.address, t.hex20);

      await global.validatorSetInstanceESN.setInitialValues(
        ethers.utils.hexlify(ethers.utils.randomBytes(20)),
        5,
        51,
        4,
        40
      );
    });

    it('create some blocks for generating merkle root', async () => {
      const signer = global.providerESN.getSigner(global.accountsESN[0].hex());

      for (let i = 0; i < 10; i++) {
        await global.providerETH.send('miner_stop', []);
        for (let j = 0; j < 3; j++) {
          await signer.sendTransaction({
            to: validatorAddressArray[i % 3],
            value: ethers.utils.parseEther('1'),
          });
        }
        await global.providerETH.send('miner_start', []);
      }
    });
  });
