import assert from 'assert';
import { ethers } from 'ethers';
import { t, validate } from '../../src/type-validation';
import { fetchBlocks } from '../../src/utils/provider';
import { validateBunchProposal } from '../../src/utils/bunch-proposal';

const { kami1 } = require('../test-configs');
const KAMI_URL = `http://localhost:${kami1.config.JSON_RPC_PORT}/`;

export const ComputeBunchProposal = () =>
  describe('Bunch Proposal RPC', () => {
    it('call compute bunch proposal RPC', async () => {
      const response = await ethers.utils.fetchJson(
        KAMI_URL,
        JSON.stringify({
          jsonrpc: '2.0',
          method: 'informer_computeBunchProposal',
          params: [0, 2],
          id: null,
        })
      );

      const bunchProposal = response.result;
      validateBunchProposal(bunchProposal, false);
    });

    it('call compute bunch proposal RPC with 0 bunch depth', async () => {
      const response = await ethers.utils.fetchJson(
        KAMI_URL,
        JSON.stringify({
          jsonrpc: '2.0',
          method: 'informer_computeBunchProposal',
          params: [1, 0],
          id: null,
        })
      );

      const bunchProposal = response.result;
      validateBunchProposal(bunchProposal, false);

      const blocks = await fetchBlocks(1, 0, global.providerESN);

      assert.strictEqual(
        blocks[0].transactionsRoot.hex(),
        bunchProposal.transactionsMegaRoot,
        'transactionsMegaRoot should be transactionsRoot for bunch depth 0'
      );

      assert.strictEqual(
        blocks[0].receiptsRoot.hex(),
        bunchProposal.receiptsMegaRoot,
        'receiptsMegaRoot should be receiptsRoot for bunch depth 0'
      );
    });
  });
