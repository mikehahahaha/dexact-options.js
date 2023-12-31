/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace OptionToken {
  export type LiquidationFeesStruct = {
    returnCollateral: PromiseOrValue<BigNumberish>;
    lpPremiums: PromiseOrValue<BigNumberish>;
    lpFee: PromiseOrValue<BigNumberish>;
    liquidatorFee: PromiseOrValue<BigNumberish>;
    smFee: PromiseOrValue<BigNumberish>;
    insolventAmount: PromiseOrValue<BigNumberish>;
  };

  export type LiquidationFeesStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    returnCollateral: BigNumber;
    lpPremiums: BigNumber;
    lpFee: BigNumber;
    liquidatorFee: BigNumber;
    smFee: BigNumber;
    insolventAmount: BigNumber;
  };
}

export interface NewportShortCollateralInterface extends utils.Interface {
  functions: {
    "LPBaseExcess()": FunctionFragment;
    "LPQuoteExcess()": FunctionFragment;
    "acceptOwnership()": FunctionFragment;
    "boardSettlement(uint256,uint256)": FunctionFragment;
    "init(address,address,address,address,address,address)": FunctionFragment;
    "nominateNewOwner(address)": FunctionFragment;
    "nominatedOwner()": FunctionFragment;
    "owner()": FunctionFragment;
    "routeLiquidationFunds(address,address,uint8,(uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
    "sendBaseCollateral(address,uint256)": FunctionFragment;
    "sendQuoteCollateral(address,uint256)": FunctionFragment;
    "settleOptions(uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "LPBaseExcess"
      | "LPQuoteExcess"
      | "acceptOwnership"
      | "boardSettlement"
      | "init"
      | "nominateNewOwner"
      | "nominatedOwner"
      | "owner"
      | "routeLiquidationFunds"
      | "sendBaseCollateral"
      | "sendQuoteCollateral"
      | "settleOptions"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "LPBaseExcess",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LPQuoteExcess",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "boardSettlement",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "nominateNewOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "nominatedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "routeLiquidationFunds",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      OptionToken.LiquidationFeesStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendBaseCollateral",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "sendQuoteCollateral",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "settleOptions",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "LPBaseExcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LPQuoteExcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "boardSettlement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nominateNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nominatedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "routeLiquidationFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendBaseCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendQuoteCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleOptions",
    data: BytesLike
  ): Result;

  events: {
    "BaseSent(address,uint256)": EventFragment;
    "BoardSettlementCollateralSent(uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "OwnerChanged(address,address)": EventFragment;
    "OwnerNominated(address)": EventFragment;
    "PositionSettled(uint256,address,address,uint256,uint256,uint8,uint256,uint256,uint256,uint256)": EventFragment;
    "QuoteSent(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BaseSent"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "BoardSettlementCollateralSent"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PositionSettled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuoteSent"): EventFragment;
}

export interface BaseSentEventObject {
  receiver: string;
  nativeAmount: BigNumber;
}
export type BaseSentEvent = TypedEvent<
  [string, BigNumber],
  BaseSentEventObject
>;

export type BaseSentEventFilter = TypedEventFilter<BaseSentEvent>;

export interface BoardSettlementCollateralSentEventObject {
  amountBaseSent: BigNumber;
  amountQuoteSent: BigNumber;
  lpBaseInsolvency: BigNumber;
  lpQuoteInsolvency: BigNumber;
  LPBaseExcess: BigNumber;
  LPQuoteExcess: BigNumber;
}
export type BoardSettlementCollateralSentEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  BoardSettlementCollateralSentEventObject
>;

export type BoardSettlementCollateralSentEventFilter =
  TypedEventFilter<BoardSettlementCollateralSentEvent>;

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<
  [string, string],
  OwnerChangedEventObject
>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface OwnerNominatedEventObject {
  newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<
  [string],
  OwnerNominatedEventObject
>;

export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;

export interface PositionSettledEventObject {
  positionId: BigNumber;
  settler: string;
  optionOwner: string;
  strikePrice: BigNumber;
  priceAtExpiry: BigNumber;
  optionType: number;
  amount: BigNumber;
  settlementAmount: BigNumber;
  insolventAmount: BigNumber;
  longScaleFactor: BigNumber;
}
export type PositionSettledEvent = TypedEvent<
  [
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ],
  PositionSettledEventObject
>;

export type PositionSettledEventFilter = TypedEventFilter<PositionSettledEvent>;

export interface QuoteSentEventObject {
  receiver: string;
  nativeAmount: BigNumber;
}
export type QuoteSentEvent = TypedEvent<
  [string, BigNumber],
  QuoteSentEventObject
>;

export type QuoteSentEventFilter = TypedEventFilter<QuoteSentEvent>;

export interface NewportShortCollateral extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NewportShortCollateralInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    LPBaseExcess(overrides?: CallOverrides): Promise<[BigNumber]>;

    LPQuoteExcess(overrides?: CallOverrides): Promise<[BigNumber]>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    boardSettlement(
      amountBase: PromiseOrValue<BigNumberish>,
      amountQuote: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    init(
      _optionMarket: PromiseOrValue<string>,
      _liquidityPool: PromiseOrValue<string>,
      _optionToken: PromiseOrValue<string>,
      _exchangeAdapter: PromiseOrValue<string>,
      _quoteAsset: PromiseOrValue<string>,
      _baseAsset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    routeLiquidationFunds(
      trader: PromiseOrValue<string>,
      liquidator: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      liquidationFees: OptionToken.LiquidationFeesStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendBaseCollateral(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendQuoteCollateral(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settleOptions(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  LPBaseExcess(overrides?: CallOverrides): Promise<BigNumber>;

  LPQuoteExcess(overrides?: CallOverrides): Promise<BigNumber>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  boardSettlement(
    amountBase: PromiseOrValue<BigNumberish>,
    amountQuote: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  init(
    _optionMarket: PromiseOrValue<string>,
    _liquidityPool: PromiseOrValue<string>,
    _optionToken: PromiseOrValue<string>,
    _exchangeAdapter: PromiseOrValue<string>,
    _quoteAsset: PromiseOrValue<string>,
    _baseAsset: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  routeLiquidationFunds(
    trader: PromiseOrValue<string>,
    liquidator: PromiseOrValue<string>,
    optionType: PromiseOrValue<BigNumberish>,
    liquidationFees: OptionToken.LiquidationFeesStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendBaseCollateral(
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendQuoteCollateral(
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settleOptions(
    positionIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    LPBaseExcess(overrides?: CallOverrides): Promise<BigNumber>;

    LPQuoteExcess(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    boardSettlement(
      amountBase: PromiseOrValue<BigNumberish>,
      amountQuote: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        lpBaseInsolvency: BigNumber;
        lpQuoteInsolvency: BigNumber;
      }
    >;

    init(
      _optionMarket: PromiseOrValue<string>,
      _liquidityPool: PromiseOrValue<string>,
      _optionToken: PromiseOrValue<string>,
      _exchangeAdapter: PromiseOrValue<string>,
      _quoteAsset: PromiseOrValue<string>,
      _baseAsset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    routeLiquidationFunds(
      trader: PromiseOrValue<string>,
      liquidator: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      liquidationFees: OptionToken.LiquidationFeesStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    sendBaseCollateral(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendQuoteCollateral(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    settleOptions(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BaseSent(address,uint256)"(
      receiver?: PromiseOrValue<string> | null,
      nativeAmount?: null
    ): BaseSentEventFilter;
    BaseSent(
      receiver?: PromiseOrValue<string> | null,
      nativeAmount?: null
    ): BaseSentEventFilter;

    "BoardSettlementCollateralSent(uint256,uint256,uint256,uint256,uint256,uint256)"(
      amountBaseSent?: null,
      amountQuoteSent?: null,
      lpBaseInsolvency?: null,
      lpQuoteInsolvency?: null,
      LPBaseExcess?: null,
      LPQuoteExcess?: null
    ): BoardSettlementCollateralSentEventFilter;
    BoardSettlementCollateralSent(
      amountBaseSent?: null,
      amountQuoteSent?: null,
      lpBaseInsolvency?: null,
      lpQuoteInsolvency?: null,
      LPBaseExcess?: null,
      LPQuoteExcess?: null
    ): BoardSettlementCollateralSentEventFilter;

    "OwnerChanged(address,address)"(
      oldOwner?: null,
      newOwner?: null
    ): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    "PositionSettled(uint256,address,address,uint256,uint256,uint8,uint256,uint256,uint256,uint256)"(
      positionId?: PromiseOrValue<BigNumberish> | null,
      settler?: PromiseOrValue<string> | null,
      optionOwner?: PromiseOrValue<string> | null,
      strikePrice?: null,
      priceAtExpiry?: null,
      optionType?: null,
      amount?: null,
      settlementAmount?: null,
      insolventAmount?: null,
      longScaleFactor?: null
    ): PositionSettledEventFilter;
    PositionSettled(
      positionId?: PromiseOrValue<BigNumberish> | null,
      settler?: PromiseOrValue<string> | null,
      optionOwner?: PromiseOrValue<string> | null,
      strikePrice?: null,
      priceAtExpiry?: null,
      optionType?: null,
      amount?: null,
      settlementAmount?: null,
      insolventAmount?: null,
      longScaleFactor?: null
    ): PositionSettledEventFilter;

    "QuoteSent(address,uint256)"(
      receiver?: PromiseOrValue<string> | null,
      nativeAmount?: null
    ): QuoteSentEventFilter;
    QuoteSent(
      receiver?: PromiseOrValue<string> | null,
      nativeAmount?: null
    ): QuoteSentEventFilter;
  };

  estimateGas: {
    LPBaseExcess(overrides?: CallOverrides): Promise<BigNumber>;

    LPQuoteExcess(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    boardSettlement(
      amountBase: PromiseOrValue<BigNumberish>,
      amountQuote: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    init(
      _optionMarket: PromiseOrValue<string>,
      _liquidityPool: PromiseOrValue<string>,
      _optionToken: PromiseOrValue<string>,
      _exchangeAdapter: PromiseOrValue<string>,
      _quoteAsset: PromiseOrValue<string>,
      _baseAsset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    routeLiquidationFunds(
      trader: PromiseOrValue<string>,
      liquidator: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      liquidationFees: OptionToken.LiquidationFeesStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendBaseCollateral(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendQuoteCollateral(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settleOptions(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    LPBaseExcess(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LPQuoteExcess(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    boardSettlement(
      amountBase: PromiseOrValue<BigNumberish>,
      amountQuote: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    init(
      _optionMarket: PromiseOrValue<string>,
      _liquidityPool: PromiseOrValue<string>,
      _optionToken: PromiseOrValue<string>,
      _exchangeAdapter: PromiseOrValue<string>,
      _quoteAsset: PromiseOrValue<string>,
      _baseAsset: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    routeLiquidationFunds(
      trader: PromiseOrValue<string>,
      liquidator: PromiseOrValue<string>,
      optionType: PromiseOrValue<BigNumberish>,
      liquidationFees: OptionToken.LiquidationFeesStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendBaseCollateral(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendQuoteCollateral(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settleOptions(
      positionIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
