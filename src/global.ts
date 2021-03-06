import path from 'path';
import fs from 'fs';
import { ethers } from 'ethers';
import util from 'util';
import { PeerList } from './peers';
import { URLMask } from './utils/url';
import { validateParam, t } from './type-validation';
import { NonceManager } from './informer/to-esn/nonce-manager';
import { Erc20Factory, PlasmaManagerFactory } from './typechain/ETH';
import { ReversePlasmaFactory, ValidatorSetFactory } from './typechain/ESN';

// prints console.logs
global.consoleLog = (...input) => {
  if (process.env.NODE_ENV === 'debug') {
    console.log('\n╭' + '-'.repeat(process.stdout.columns - 2 || 30) + '╮');
    console.log('  DEBUG\n');
    console.log(
      util.inspect([...input], { showHidden: false, depth: null, colors: true })
    );
    console.log('\n╰' + '-'.repeat(process.stdout.columns - 2 || 30) + '╯\n');
  }
};

global.peerList = new PeerList();

// TODO use minimist package in this case
// loading config from file
const configUrl: string = process.argv[2] ?? 'kami-config';
const config = require(path.resolve(process.cwd(), configUrl));

global.config = {
  ETH_URL: new URLMask(config.ETH_URL ?? 'http://localhost:7545'),
  ESN_URL: new URLMask(config.ESN_URL ?? 'http://localhost:8545'),
  JSON_RPC_PORT: config.JSON_RPC_PORT ?? 25985,
  KEYSTORE_PATH: config.KEYSTORE_PATH
    ? path.resolve(process.cwd(), configUrl, '..', config.KEYSTORE_PATH)
    : null,
  KEYSTORE_PASSWORD_PATH: config.KEYSTORE_PASSWORD_PATH
    ? path.resolve(
        process.cwd(),
        configUrl,
        '..',
        config.KEYSTORE_PASSWORD_PATH
      )
    : null,
  SEED_PEER_PATH: config.SEED_PEER_PATH
    ? path.resolve(process.cwd(), configUrl, '..', config.SEED_PEER_PATH)
    : null,
  DESIRED_BUNCH_DEPTH: !isNaN(+config.DESIRED_BUNCH_DEPTH)
    ? +config.DESIRED_BUNCH_DEPTH
    : 10,
  FALLBACK_BUNCH_DEPTH: !isNaN(+config.FALLBACK_BUNCH_DEPTH)
    ? +config.FALLBACK_BUNCH_DEPTH
    : 12,
  ETH_CONFIRMATIONS: !isNaN(+config.ETH_CONFIRMATIONS)
    ? +config.ETH_CONFIRMATIONS
    : 15,
};

// loading providers
global.providerETH = new ethers.providers.StaticJsonRpcProvider(
  global.config.ETH_URL.toString()
);
global.providerEsn = new ethers.providers.StaticJsonRpcProvider(
  global.config.ESN_URL.toString()
);

// initiating nonce manager
global.nonceManagerESN = new NonceManager();

// loading wallet
if (
  typeof global.config.KEYSTORE_PATH === 'string' &&
  typeof global.config.KEYSTORE_PASSWORD_PATH === 'string'
) {
  const keystore = require(global.config.KEYSTORE_PATH);

  const keystorePasswords: string[] = fs
    .readFileSync(global.config.KEYSTORE_PASSWORD_PATH, 'utf8')
    .split('\n');

  (async () => {
    try {
      let error: Error | null = null;
      console.log('Loading wallet...');
      for (const keystorePassword of keystorePasswords) {
        try {
          global.wallet = await ethers.Wallet.fromEncryptedJson(
            typeof keystore === 'string' ? keystore : JSON.stringify(keystore),
            keystorePassword
          );
          error = null;
          break;
        } catch (err) {
          error = err;
        }
      }
      if (error) throw error;
      console.log('Wallet loaded', global.wallet.address);
    } catch (err) {
      console.log('Error while loading wallet', err);
    }

    try {
      // loading contracts
      console.log('Loading contract instances...');

      const {
        ES_CONTRACT_ADDRESS_ETH,
        PLASMA_CONTRACT_ADDRESS_ETH,
        RPLASMA_CONTRACT_ADDRESS_ESN,
        VALIDATORSET_CONTRACT_ADDRESS_ESN,
      } = config;

      validateParam({ ES_CONTRACT_ADDRESS_ETH }, t.hex20);
      global.esInstanceETH = Erc20Factory.connect(
        config.ES_CONTRACT_ADDRESS_ETH,
        global.wallet.connect(global.providerETH)
      );

      validateParam({ PLASMA_CONTRACT_ADDRESS_ETH }, t.hex20);
      global.plasmaInstanceETH = PlasmaManagerFactory.connect(
        config.PLASMA_CONTRACT_ADDRESS_ETH,
        global.wallet.connect(global.providerETH)
      );

      validateParam({ RPLASMA_CONTRACT_ADDRESS_ESN }, t.hex20);
      global.reversePlasmaInstanceESN = ReversePlasmaFactory.connect(
        config.RPLASMA_CONTRACT_ADDRESS_ESN,
        global.wallet.connect(global.providerEsn)
      );

      validateParam({ VALIDATORSET_CONTRACT_ADDRESS_ESN }, t.hex20);
      global.validatorSetInstanceESN = ValidatorSetFactory.connect(
        config.VALIDATORSET_CONTRACT_ADDRESS_ESN,
        global.wallet.connect(global.providerEsn)
      );

      console.log('Providers and Contracts are initiated');
    } catch (err) {
      console.log('Error while loading contracts', err);
    }
  })();
}
