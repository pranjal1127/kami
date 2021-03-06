/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { ITimeAllyPromotionalBucket } from "./ITimeAllyPromotionalBucket";

export class ITimeAllyPromotionalBucketFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITimeAllyPromotionalBucket {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ITimeAllyPromotionalBucket;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "stakingContract",
        type: "address"
      }
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_stakingReward",
        type: "uint256"
      }
    ],
    name: "rewardToStaker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
