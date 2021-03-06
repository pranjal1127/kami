/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface InrtReceiverInterface extends ethers.utils.Interface {
  functions: {
    "getMonthlyNRT(uint32)": FunctionFragment;
    "receiveNrt(uint32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getMonthlyNRT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveNrt",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getMonthlyNRT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receiveNrt", data: BytesLike): Result;

  events: {};
}

export class InrtReceiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: InrtReceiverInterface;

  functions: {
    getMonthlyNRT(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    receiveNrt(
      _currentNrtMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  getMonthlyNRT(
    _month: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  receiveNrt(
    _currentNrtMonth: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getMonthlyNRT(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveNrt(
      _currentNrtMonth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getMonthlyNRT(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveNrt(
      _currentNrtMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMonthlyNRT(
      _month: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveNrt(
      _currentNrtMonth: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
