import { generateBlockProposal } from '../utils';

export async function viewBlockProposal(blockNumber: number) {
  const blockProposal = await generateBlockProposal(blockNumber);

  return blockProposal;
}
