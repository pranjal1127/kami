import assert from 'assert';
import { ethers } from 'ethers';
import { URLMask } from '../../src/utils/url';
import { Bytes, Bytes32 } from '../../src/utils/bytes';
import { t, validateParam } from '../../src/type-validation';
import { serializeJson } from '../../src/utils/serialize-json';
import { hexlifyObject } from '../../src/json-rpc/parser';
import {
  signKamiData,
  recoverAddressFromSignedJson,
} from '../../src/utils/sign';
import { JsonRequest } from '../../src/json-rpc';
import { Peer } from '../../src/peers';
const { kami1 } = require('../test-configs');
const KAMI_URL = `http://localhost:${kami1.config.JSON_RPC_PORT}/`;

const wallet = ethers.Wallet.createRandom();
let connectionId: Bytes32;

export const PeerHandShake = () => {
  describe('Peer Handshake Correctly', () => {
    it('call kami_peerInit method', async () => {
      const response = await ethers.utils.fetchJson(
        KAMI_URL,
        JSON.stringify(
          hexlifyObject({
            jsonrpc: '2.0',
            method: 'kami_peerInit',
            params: [new Bytes(ethers.utils.randomBytes(16)).hex(), 3000],
            id: null,
          })
        )
      );

      if (!('result' in response)) {
        throw response.error;
      }

      validateParam({ result: response.result }, t.array);

      connectionId = response.result[0];
      const verified = response.result[1];
      validateParam({ connectionId }, t.hex32);
      validateParam({ verified }, t.boolean);
    });

    it('call kami_peerValidate method', async () => {
      const validationRequest: JsonRequest = {
        jsonrpc: '2.0',
        method: 'kami_peerValidate',
        params: [],
        id: connectionId,
        nonce: 0,
      };

      const serializedRequest = serializeJson(validationRequest);
      validationRequest.signature = signKamiData(serializedRequest, wallet);

      const response2 = await ethers.utils.fetchJson(
        KAMI_URL,
        JSON.stringify(hexlifyObject(validationRequest))
      );

      // console.log({ response2 });

      if (!('result' in response2)) {
        throw response2.error;
      }

      const address = recoverAddressFromSignedJson(response2);

      assert.ok(response2.result, 'should receive true in result');
      assert.strictEqual(
        '0x' + kami1.keystore.address,
        address.hex(),
        'address should be same'
      );
    });

    it('should have a peer with 3000 port', async () => {
      const response = await ethers.utils.fetchJson(
        KAMI_URL,
        JSON.stringify({
          jsonrpc: '2.0',
          method: 'kami_listPeers',
          params: [],
          id: null,
        })
      );

      // console.log(response);
      if (!('result' in response)) {
        throw response.error;
      }

      const { result } = response;

      validateParam({ result }, t.array);
      validateParam({ connectionId }, t.hex32);

      const filtered = result.filter(
        (peer: Peer) => peer.connectionId === connectionId
      );

      assert.strictEqual(filtered.length, 1, 'there should be one peer added');
      assert.strictEqual(
        wallet.address.toLowerCase(),
        filtered[0].walletAddress,
        'address should be recognized correctly'
      );
      assert.strictEqual(filtered[0].connectionUrl, 'http://127.0.0.1:3000/');
      assert.strictEqual(filtered[0].checkNonce, 1, 'check nonce should be 1');
    });
  });
};

export const PeerHandshakeWrong = () => {
  describe('Peer Handshake Wrong', () => {
    it("did't pass port in the peerInit gives error", async () => {
      const response = await ethers.utils.fetchJson(
        KAMI_URL,
        JSON.stringify(
          hexlifyObject({
            jsonrpc: '2.0',
            method: 'kami_peerInit',
            params: [new Bytes(ethers.utils.randomBytes(16)).hex()],
            id: null,
          })
        )
      );

      if (!response.error) {
        throw new Error('Should throw error when PORT is not passed');
      }

      assert.strictEqual(
        response.error.data,
        'Method kami_peerInit expected 2 arguments but 1 were sent',
        'Invalid error data'
      );
    });

    it('pass 32 bytes instead of 16 bytes in peerInit', async () => {
      const response = await ethers.utils.fetchJson(
        KAMI_URL,
        JSON.stringify(
          hexlifyObject({
            jsonrpc: '2.0',
            method: 'kami_peerInit',
            params: [new Bytes(ethers.utils.randomBytes(32)).hex(), 3000],
            id: null,
          })
        )
      );

      if (!response.error) {
        console.log(response);
        throw new Error('Should throw error when invalid byte length is given');
      }

      assert.ok(
        response.error.data.includes(
          'bytes16 hex string should have 16 bytes / 34 length'
        ),
        'Invalid error data'
      );
    });
  });
};
