/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface TokenDistributorInterface extends ethers.utils.Interface {
  functions: {
    "DISTRIBUTION_BASE()": FunctionFragment;
    "IMPLEMENTATION_REVISION()": FunctionFragment;
    "KYBER_ETH_MOCK_ADDRESS()": FunctionFragment;
    "MAX_UINT()": FunctionFragment;
    "MAX_UINT_MINUS_ONE()": FunctionFragment;
    "MIN_CONVERSION_RATE()": FunctionFragment;
    "distribute(address[])": FunctionFragment;
    "distributeWithAmounts(address[],uint256[])": FunctionFragment;
    "distributeWithPercentages(address[],uint256[])": FunctionFragment;
    "getDistribution()": FunctionFragment;
    "initialize(address[],uint256[])": FunctionFragment;
    "recipientBurn()": FunctionFragment;
    "tokenToBurn()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DISTRIBUTION_BASE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IMPLEMENTATION_REVISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "KYBER_ETH_MOCK_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAX_UINT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MAX_UINT_MINUS_ONE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_CONVERSION_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeWithAmounts",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeWithPercentages",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "recipientBurn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToBurn",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DISTRIBUTION_BASE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IMPLEMENTATION_REVISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "KYBER_ETH_MOCK_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_UINT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MAX_UINT_MINUS_ONE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_CONVERSION_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distributeWithAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeWithPercentages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recipientBurn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenToBurn",
    data: BytesLike
  ): Result;

  events: {
    "Distributed(address,uint256,uint256)": EventFragment;
    "DistributionUpdated(address[],uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Distributed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DistributionUpdated"): EventFragment;
}

export type DistributedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    receiver: string;
    percentage: BigNumber;
    amount: BigNumber;
  }
>;

export type DistributionUpdatedEvent = TypedEvent<
  [string[], BigNumber[]] & { receivers: string[]; percentages: BigNumber[] }
>;

export class TokenDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TokenDistributorInterface;

  functions: {
    DISTRIBUTION_BASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    IMPLEMENTATION_REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    KYBER_ETH_MOCK_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    MAX_UINT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_UINT_MINUS_ONE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_CONVERSION_RATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    distribute(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributeWithAmounts(
      _tokens: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributeWithPercentages(
      _tokens: string[],
      _percentages: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getDistribution(
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & {
        receivers: string[];
        percentages: BigNumber[];
      }
    >;

    initialize(
      _receivers: string[],
      _percentages: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    recipientBurn(overrides?: CallOverrides): Promise<[string]>;

    tokenToBurn(overrides?: CallOverrides): Promise<[string]>;
  };

  DISTRIBUTION_BASE(overrides?: CallOverrides): Promise<BigNumber>;

  IMPLEMENTATION_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  KYBER_ETH_MOCK_ADDRESS(overrides?: CallOverrides): Promise<string>;

  MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_UINT_MINUS_ONE(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_CONVERSION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

  distribute(
    _tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributeWithAmounts(
    _tokens: string[],
    _amounts: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributeWithPercentages(
    _tokens: string[],
    _percentages: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getDistribution(
    overrides?: CallOverrides
  ): Promise<
    [string[], BigNumber[]] & { receivers: string[]; percentages: BigNumber[] }
  >;

  initialize(
    _receivers: string[],
    _percentages: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  recipientBurn(overrides?: CallOverrides): Promise<string>;

  tokenToBurn(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DISTRIBUTION_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    IMPLEMENTATION_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    KYBER_ETH_MOCK_ADDRESS(overrides?: CallOverrides): Promise<string>;

    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_UINT_MINUS_ONE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_CONVERSION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    distribute(_tokens: string[], overrides?: CallOverrides): Promise<void>;

    distributeWithAmounts(
      _tokens: string[],
      _amounts: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    distributeWithPercentages(
      _tokens: string[],
      _percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    getDistribution(
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & {
        receivers: string[];
        percentages: BigNumber[];
      }
    >;

    initialize(
      _receivers: string[],
      _percentages: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    recipientBurn(overrides?: CallOverrides): Promise<string>;

    tokenToBurn(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Distributed(address,uint256,uint256)"(
      receiver?: null,
      percentage?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { receiver: string; percentage: BigNumber; amount: BigNumber }
    >;

    Distributed(
      receiver?: null,
      percentage?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { receiver: string; percentage: BigNumber; amount: BigNumber }
    >;

    "DistributionUpdated(address[],uint256[])"(
      receivers?: null,
      percentages?: null
    ): TypedEventFilter<
      [string[], BigNumber[]],
      { receivers: string[]; percentages: BigNumber[] }
    >;

    DistributionUpdated(
      receivers?: null,
      percentages?: null
    ): TypedEventFilter<
      [string[], BigNumber[]],
      { receivers: string[]; percentages: BigNumber[] }
    >;
  };

  estimateGas: {
    DISTRIBUTION_BASE(overrides?: CallOverrides): Promise<BigNumber>;

    IMPLEMENTATION_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    KYBER_ETH_MOCK_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_UINT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_UINT_MINUS_ONE(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_CONVERSION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    distribute(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributeWithAmounts(
      _tokens: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributeWithPercentages(
      _tokens: string[],
      _percentages: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getDistribution(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _receivers: string[],
      _percentages: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    recipientBurn(overrides?: CallOverrides): Promise<BigNumber>;

    tokenToBurn(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DISTRIBUTION_BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    IMPLEMENTATION_REVISION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    KYBER_ETH_MOCK_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAX_UINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_UINT_MINUS_ONE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MIN_CONVERSION_RATE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    distribute(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributeWithAmounts(
      _tokens: string[],
      _amounts: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributeWithPercentages(
      _tokens: string[],
      _percentages: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getDistribution(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _receivers: string[],
      _percentages: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    recipientBurn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenToBurn(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
