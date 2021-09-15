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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface LendingPoolInterface extends ethers.utils.Interface {
  functions: {
    "LENDINGPOOL_REVISION()": FunctionFragment;
    "UINT_MAX_VALUE()": FunctionFragment;
    "addressesProvider()": FunctionFragment;
    "borrow(address,uint256,uint256)": FunctionFragment;
    "core()": FunctionFragment;
    "dataProvider()": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "getReserveConfigurationData(address)": FunctionFragment;
    "getReserveData(address)": FunctionFragment;
    "getReserves()": FunctionFragment;
    "getUserAccountData(address)": FunctionFragment;
    "getUserReserveData(address,address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "liquidationCall(address,address,address,uint256,bool)": FunctionFragment;
    "parametersProvider()": FunctionFragment;
    "repay(address,uint256,address)": FunctionFragment;
    "setUserUseReserveAsCollateral(address,bool)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "LENDINGPOOL_REVISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UINT_MAX_VALUE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addressesProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrow",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "core", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "dataProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveConfigurationData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAccountData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserReserveData",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "liquidationCall",
    values: [string, string, string, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "parametersProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repay",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUserUseReserveAsCollateral",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "LENDINGPOOL_REVISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UINT_MAX_VALUE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressesProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "core", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dataProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getReserveConfigurationData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAccountData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserReserveData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidationCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parametersProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setUserUseReserveAsCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Borrow(address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "Deposit(address,address,uint256,uint256)": EventFragment;
    "LiquidationCall(address,address,address,uint256,uint256,uint256,address,bool,uint256)": EventFragment;
    "OriginationFeeLiquidated(address,address,address,uint256,uint256,uint256)": EventFragment;
    "Repay(address,address,address,uint256,uint256,uint256)": EventFragment;
    "ReserveUsedAsCollateralDisabled(address,address)": EventFragment;
    "ReserveUsedAsCollateralEnabled(address,address)": EventFragment;
    "Withdraw(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidationCall"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OriginationFeeLiquidated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReserveUsedAsCollateralDisabled"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ReserveUsedAsCollateralEnabled"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type BorrowEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
    _reserve: string;
    _user: string;
    _amount: BigNumber;
    _leverageRatio: BigNumber;
    _originationFee: BigNumber;
    _timestamp: BigNumber;
  }
>;

export type DepositEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    _reserve: string;
    _user: string;
    _amount: BigNumber;
    _timestamp: BigNumber;
  }
>;

export type LiquidationCallEvent = TypedEvent<
  [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    boolean,
    BigNumber
  ] & {
    _collateral: string;
    _reserve: string;
    _user: string;
    _purchaseAmount: BigNumber;
    _liquidatedCollateralAmount: BigNumber;
    _accruedBorrowInterest: BigNumber;
    _liquidator: string;
    _receiveWvToken: boolean;
    _timestamp: BigNumber;
  }
>;

export type OriginationFeeLiquidatedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber] & {
    _collateral: string;
    _reserve: string;
    _user: string;
    _feeLiquidated: BigNumber;
    _liquidatedCollateralForFee: BigNumber;
    _timestamp: BigNumber;
  }
>;

export type RepayEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber] & {
    _reserve: string;
    _user: string;
    _repayer: string;
    _amountMinusFees: BigNumber;
    _fees: BigNumber;
    _timestamp: BigNumber;
  }
>;

export type ReserveUsedAsCollateralDisabledEvent = TypedEvent<
  [string, string] & { _reserve: string; _user: string }
>;

export type ReserveUsedAsCollateralEnabledEvent = TypedEvent<
  [string, string] & { _reserve: string; _user: string }
>;

export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    _reserve: string;
    _user: string;
    _amount: BigNumber;
    _timestamp: BigNumber;
  }
>;

export class LendingPool extends BaseContract {
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

  interface: LendingPoolInterface;

  functions: {
    LENDINGPOOL_REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    UINT_MAX_VALUE(overrides?: CallOverrides): Promise<[BigNumber]>;

    addressesProvider(overrides?: CallOverrides): Promise<[string]>;

    borrow(
      _reserve: string,
      _amount: BigNumberish,
      _leverageRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    core(overrides?: CallOverrides): Promise<[string]>;

    dataProvider(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      _reserve: string,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getReserveConfigurationData(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, boolean, boolean, boolean] & {
        ltv: BigNumber;
        liquidationThreshold: BigNumber;
        liquidationBonus: BigNumber;
        interestRateStrategyAddress: string;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        isActive: boolean;
      }
    >;

    getReserveData(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        number
      ] & {
        totalLiquidity: BigNumber;
        availableLiquidity: BigNumber;
        totalBorrows: BigNumber;
        liquidityRate: BigNumber;
        utilizationRate: BigNumber;
        liquidityIndex: BigNumber;
        wvTokenAddress: string;
        lastUpdateTimestamp: number;
      }
    >;

    getReserves(overrides?: CallOverrides): Promise<[string[]]>;

    getUserAccountData(
      _user: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        totalLiquidityETH: BigNumber;
        totalCollateralETH: BigNumber;
        totalBorrowsETH: BigNumber;
        totalFeesETH: BigNumber;
        availableBorrowsETH: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
      }
    >;

    getUserReserveData(
      _reserve: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        currentWvTokenBalance: BigNumber;
        borrowBalance: BigNumber;
        liquidityRate: BigNumber;
        originationFee: BigNumber;
        lastUpdateTimestamp: BigNumber;
        usageAsCollateralEnabled: boolean;
      }
    >;

    initialize(
      _addressesProvider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidationCall(
      _collateral: string,
      _reserve: string,
      _user: string,
      _purchaseAmount: BigNumberish,
      _receiveWvToken: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    parametersProvider(overrides?: CallOverrides): Promise<[string]>;

    repay(
      _reserve: string,
      _amount: BigNumberish,
      _onBehalfOf: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUserUseReserveAsCollateral(
      _reserve: string,
      _useAsCollateral: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _reserve: string,
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  LENDINGPOOL_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  UINT_MAX_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

  addressesProvider(overrides?: CallOverrides): Promise<string>;

  borrow(
    _reserve: string,
    _amount: BigNumberish,
    _leverageRatio: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  core(overrides?: CallOverrides): Promise<string>;

  dataProvider(overrides?: CallOverrides): Promise<string>;

  deposit(
    _reserve: string,
    _amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getReserveConfigurationData(
    _reserve: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, string, boolean, boolean, boolean] & {
      ltv: BigNumber;
      liquidationThreshold: BigNumber;
      liquidationBonus: BigNumber;
      interestRateStrategyAddress: string;
      usageAsCollateralEnabled: boolean;
      borrowingEnabled: boolean;
      isActive: boolean;
    }
  >;

  getReserveData(
    _reserve: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      number
    ] & {
      totalLiquidity: BigNumber;
      availableLiquidity: BigNumber;
      totalBorrows: BigNumber;
      liquidityRate: BigNumber;
      utilizationRate: BigNumber;
      liquidityIndex: BigNumber;
      wvTokenAddress: string;
      lastUpdateTimestamp: number;
    }
  >;

  getReserves(overrides?: CallOverrides): Promise<string[]>;

  getUserAccountData(
    _user: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      totalLiquidityETH: BigNumber;
      totalCollateralETH: BigNumber;
      totalBorrowsETH: BigNumber;
      totalFeesETH: BigNumber;
      availableBorrowsETH: BigNumber;
      currentLiquidationThreshold: BigNumber;
      ltv: BigNumber;
      healthFactor: BigNumber;
    }
  >;

  getUserReserveData(
    _reserve: string,
    _user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
      currentWvTokenBalance: BigNumber;
      borrowBalance: BigNumber;
      liquidityRate: BigNumber;
      originationFee: BigNumber;
      lastUpdateTimestamp: BigNumber;
      usageAsCollateralEnabled: boolean;
    }
  >;

  initialize(
    _addressesProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidationCall(
    _collateral: string,
    _reserve: string,
    _user: string,
    _purchaseAmount: BigNumberish,
    _receiveWvToken: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  parametersProvider(overrides?: CallOverrides): Promise<string>;

  repay(
    _reserve: string,
    _amount: BigNumberish,
    _onBehalfOf: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUserUseReserveAsCollateral(
    _reserve: string,
    _useAsCollateral: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _reserve: string,
    _user: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    LENDINGPOOL_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    UINT_MAX_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    addressesProvider(overrides?: CallOverrides): Promise<string>;

    borrow(
      _reserve: string,
      _amount: BigNumberish,
      _leverageRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    core(overrides?: CallOverrides): Promise<string>;

    dataProvider(overrides?: CallOverrides): Promise<string>;

    deposit(
      _reserve: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getReserveConfigurationData(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, string, boolean, boolean, boolean] & {
        ltv: BigNumber;
        liquidationThreshold: BigNumber;
        liquidationBonus: BigNumber;
        interestRateStrategyAddress: string;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        isActive: boolean;
      }
    >;

    getReserveData(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        number
      ] & {
        totalLiquidity: BigNumber;
        availableLiquidity: BigNumber;
        totalBorrows: BigNumber;
        liquidityRate: BigNumber;
        utilizationRate: BigNumber;
        liquidityIndex: BigNumber;
        wvTokenAddress: string;
        lastUpdateTimestamp: number;
      }
    >;

    getReserves(overrides?: CallOverrides): Promise<string[]>;

    getUserAccountData(
      _user: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        totalLiquidityETH: BigNumber;
        totalCollateralETH: BigNumber;
        totalBorrowsETH: BigNumber;
        totalFeesETH: BigNumber;
        availableBorrowsETH: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
      }
    >;

    getUserReserveData(
      _reserve: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        currentWvTokenBalance: BigNumber;
        borrowBalance: BigNumber;
        liquidityRate: BigNumber;
        originationFee: BigNumber;
        lastUpdateTimestamp: BigNumber;
        usageAsCollateralEnabled: boolean;
      }
    >;

    initialize(
      _addressesProvider: string,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidationCall(
      _collateral: string,
      _reserve: string,
      _user: string,
      _purchaseAmount: BigNumberish,
      _receiveWvToken: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    parametersProvider(overrides?: CallOverrides): Promise<string>;

    repay(
      _reserve: string,
      _amount: BigNumberish,
      _onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUserUseReserveAsCollateral(
      _reserve: string,
      _useAsCollateral: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _reserve: string,
      _user: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Borrow(address,address,uint256,uint256,uint256,uint256)"(
      _reserve?: string | null,
      _user?: string | null,
      _amount?: null,
      _leverageRatio?: null,
      _originationFee?: null,
      _timestamp?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        _reserve: string;
        _user: string;
        _amount: BigNumber;
        _leverageRatio: BigNumber;
        _originationFee: BigNumber;
        _timestamp: BigNumber;
      }
    >;

    Borrow(
      _reserve?: string | null,
      _user?: string | null,
      _amount?: null,
      _leverageRatio?: null,
      _originationFee?: null,
      _timestamp?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        _reserve: string;
        _user: string;
        _amount: BigNumber;
        _leverageRatio: BigNumber;
        _originationFee: BigNumber;
        _timestamp: BigNumber;
      }
    >;

    "Deposit(address,address,uint256,uint256)"(
      _reserve?: string | null,
      _user?: string | null,
      _amount?: null,
      _timestamp?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        _reserve: string;
        _user: string;
        _amount: BigNumber;
        _timestamp: BigNumber;
      }
    >;

    Deposit(
      _reserve?: string | null,
      _user?: string | null,
      _amount?: null,
      _timestamp?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        _reserve: string;
        _user: string;
        _amount: BigNumber;
        _timestamp: BigNumber;
      }
    >;

    "LiquidationCall(address,address,address,uint256,uint256,uint256,address,bool,uint256)"(
      _collateral?: string | null,
      _reserve?: string | null,
      _user?: string | null,
      _purchaseAmount?: null,
      _liquidatedCollateralAmount?: null,
      _accruedBorrowInterest?: null,
      _liquidator?: null,
      _receiveWvToken?: null,
      _timestamp?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean,
        BigNumber
      ],
      {
        _collateral: string;
        _reserve: string;
        _user: string;
        _purchaseAmount: BigNumber;
        _liquidatedCollateralAmount: BigNumber;
        _accruedBorrowInterest: BigNumber;
        _liquidator: string;
        _receiveWvToken: boolean;
        _timestamp: BigNumber;
      }
    >;

    LiquidationCall(
      _collateral?: string | null,
      _reserve?: string | null,
      _user?: string | null,
      _purchaseAmount?: null,
      _liquidatedCollateralAmount?: null,
      _accruedBorrowInterest?: null,
      _liquidator?: null,
      _receiveWvToken?: null,
      _timestamp?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean,
        BigNumber
      ],
      {
        _collateral: string;
        _reserve: string;
        _user: string;
        _purchaseAmount: BigNumber;
        _liquidatedCollateralAmount: BigNumber;
        _accruedBorrowInterest: BigNumber;
        _liquidator: string;
        _receiveWvToken: boolean;
        _timestamp: BigNumber;
      }
    >;

    "OriginationFeeLiquidated(address,address,address,uint256,uint256,uint256)"(
      _collateral?: string | null,
      _reserve?: string | null,
      _user?: string | null,
      _feeLiquidated?: null,
      _liquidatedCollateralForFee?: null,
      _timestamp?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        _collateral: string;
        _reserve: string;
        _user: string;
        _feeLiquidated: BigNumber;
        _liquidatedCollateralForFee: BigNumber;
        _timestamp: BigNumber;
      }
    >;

    OriginationFeeLiquidated(
      _collateral?: string | null,
      _reserve?: string | null,
      _user?: string | null,
      _feeLiquidated?: null,
      _liquidatedCollateralForFee?: null,
      _timestamp?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        _collateral: string;
        _reserve: string;
        _user: string;
        _feeLiquidated: BigNumber;
        _liquidatedCollateralForFee: BigNumber;
        _timestamp: BigNumber;
      }
    >;

    "Repay(address,address,address,uint256,uint256,uint256)"(
      _reserve?: string | null,
      _user?: string | null,
      _repayer?: string | null,
      _amountMinusFees?: null,
      _fees?: null,
      _timestamp?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        _reserve: string;
        _user: string;
        _repayer: string;
        _amountMinusFees: BigNumber;
        _fees: BigNumber;
        _timestamp: BigNumber;
      }
    >;

    Repay(
      _reserve?: string | null,
      _user?: string | null,
      _repayer?: string | null,
      _amountMinusFees?: null,
      _fees?: null,
      _timestamp?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        _reserve: string;
        _user: string;
        _repayer: string;
        _amountMinusFees: BigNumber;
        _fees: BigNumber;
        _timestamp: BigNumber;
      }
    >;

    "ReserveUsedAsCollateralDisabled(address,address)"(
      _reserve?: string | null,
      _user?: string | null
    ): TypedEventFilter<[string, string], { _reserve: string; _user: string }>;

    ReserveUsedAsCollateralDisabled(
      _reserve?: string | null,
      _user?: string | null
    ): TypedEventFilter<[string, string], { _reserve: string; _user: string }>;

    "ReserveUsedAsCollateralEnabled(address,address)"(
      _reserve?: string | null,
      _user?: string | null
    ): TypedEventFilter<[string, string], { _reserve: string; _user: string }>;

    ReserveUsedAsCollateralEnabled(
      _reserve?: string | null,
      _user?: string | null
    ): TypedEventFilter<[string, string], { _reserve: string; _user: string }>;

    "Withdraw(address,address,uint256,uint256)"(
      _reserve?: string | null,
      _user?: string | null,
      _amount?: null,
      _timestamp?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        _reserve: string;
        _user: string;
        _amount: BigNumber;
        _timestamp: BigNumber;
      }
    >;

    Withdraw(
      _reserve?: string | null,
      _user?: string | null,
      _amount?: null,
      _timestamp?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        _reserve: string;
        _user: string;
        _amount: BigNumber;
        _timestamp: BigNumber;
      }
    >;
  };

  estimateGas: {
    LENDINGPOOL_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    UINT_MAX_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    addressesProvider(overrides?: CallOverrides): Promise<BigNumber>;

    borrow(
      _reserve: string,
      _amount: BigNumberish,
      _leverageRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    core(overrides?: CallOverrides): Promise<BigNumber>;

    dataProvider(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _reserve: string,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getReserveConfigurationData(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveData(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserves(overrides?: CallOverrides): Promise<BigNumber>;

    getUserAccountData(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserReserveData(
      _reserve: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _addressesProvider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidationCall(
      _collateral: string,
      _reserve: string,
      _user: string,
      _purchaseAmount: BigNumberish,
      _receiveWvToken: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    parametersProvider(overrides?: CallOverrides): Promise<BigNumber>;

    repay(
      _reserve: string,
      _amount: BigNumberish,
      _onBehalfOf: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUserUseReserveAsCollateral(
      _reserve: string,
      _useAsCollateral: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _reserve: string,
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    LENDINGPOOL_REVISION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    UINT_MAX_VALUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addressesProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrow(
      _reserve: string,
      _amount: BigNumberish,
      _leverageRatio: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    core(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dataProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _reserve: string,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getReserveConfigurationData(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveData(
      _reserve: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserAccountData(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserReserveData(
      _reserve: string,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _addressesProvider: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidationCall(
      _collateral: string,
      _reserve: string,
      _user: string,
      _purchaseAmount: BigNumberish,
      _receiveWvToken: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    parametersProvider(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    repay(
      _reserve: string,
      _amount: BigNumberish,
      _onBehalfOf: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUserUseReserveAsCollateral(
      _reserve: string,
      _useAsCollateral: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _reserve: string,
      _user: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
