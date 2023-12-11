import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace GMXFuturesPoolHedger {
    type FuturesPoolHedgerParametersStruct = {
        acceptableSpotSlippage: PromiseOrValue<BigNumberish>;
        deltaThreshold: PromiseOrValue<BigNumberish>;
        marketDepthBuffer: PromiseOrValue<BigNumberish>;
        targetLeverage: PromiseOrValue<BigNumberish>;
        maxLeverage: PromiseOrValue<BigNumberish>;
        leverageBuffer: PromiseOrValue<BigNumberish>;
        minCancelDelay: PromiseOrValue<BigNumberish>;
        vaultLiquidityCheckEnabled: PromiseOrValue<boolean>;
    };
    type FuturesPoolHedgerParametersStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        acceptableSpotSlippage: BigNumber;
        deltaThreshold: BigNumber;
        marketDepthBuffer: BigNumber;
        targetLeverage: BigNumber;
        maxLeverage: BigNumber;
        leverageBuffer: BigNumber;
        minCancelDelay: BigNumber;
        vaultLiquidityCheckEnabled: boolean;
    };
    type PositionDetailsStruct = {
        size: PromiseOrValue<BigNumberish>;
        collateral: PromiseOrValue<BigNumberish>;
        averagePrice: PromiseOrValue<BigNumberish>;
        entryFundingRate: PromiseOrValue<BigNumberish>;
        unrealisedPnl: PromiseOrValue<BigNumberish>;
        lastIncreasedTime: PromiseOrValue<BigNumberish>;
        isLong: PromiseOrValue<boolean>;
    };
    type PositionDetailsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        size: BigNumber;
        collateral: BigNumber;
        averagePrice: BigNumber;
        entryFundingRate: BigNumber;
        unrealisedPnl: BigNumber;
        lastIncreasedTime: BigNumber;
        isLong: boolean;
    };
    type CurrentPositionsStruct = {
        longPosition: GMXFuturesPoolHedger.PositionDetailsStruct;
        shortPosition: GMXFuturesPoolHedger.PositionDetailsStruct;
        amountOpen: PromiseOrValue<BigNumberish>;
        isLong: PromiseOrValue<boolean>;
    };
    type CurrentPositionsStructOutput = [
        GMXFuturesPoolHedger.PositionDetailsStructOutput,
        GMXFuturesPoolHedger.PositionDetailsStructOutput,
        BigNumber,
        boolean
    ] & {
        longPosition: GMXFuturesPoolHedger.PositionDetailsStructOutput;
        shortPosition: GMXFuturesPoolHedger.PositionDetailsStructOutput;
        amountOpen: BigNumber;
        isLong: boolean;
    };
    type HedgerAddressesStruct = {
        router: PromiseOrValue<string>;
        positionRouter: PromiseOrValue<string>;
        vault: PromiseOrValue<string>;
        quoteAsset: PromiseOrValue<string>;
        baseAsset: PromiseOrValue<string>;
        weth: PromiseOrValue<string>;
    };
    type HedgerAddressesStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        router: string;
        positionRouter: string;
        vault: string;
        quoteAsset: string;
        baseAsset: string;
        weth: string;
    };
    type GMXViewStruct = {
        basePoolAmount: PromiseOrValue<BigNumberish>;
        baseReservedAmount: PromiseOrValue<BigNumberish>;
        quotePoolAmount: PromiseOrValue<BigNumberish>;
        quoteReservedAmount: PromiseOrValue<BigNumberish>;
        minExecutionFee: PromiseOrValue<BigNumberish>;
    };
    type GMXViewStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        basePoolAmount: BigNumber;
        baseReservedAmount: BigNumber;
        quotePoolAmount: BigNumber;
        quoteReservedAmount: BigNumber;
        minExecutionFee: BigNumber;
    };
    type GMXFuturesPoolHedgerViewStruct = {
        currentPositions: GMXFuturesPoolHedger.CurrentPositionsStruct;
        futuresPoolHedgerParams: GMXFuturesPoolHedger.FuturesPoolHedgerParametersStruct;
        hedgerAddresses: GMXFuturesPoolHedger.HedgerAddressesStruct;
        gmxView: GMXFuturesPoolHedger.GMXViewStruct;
        referralCode: PromiseOrValue<BytesLike>;
        pendingOrderKey: PromiseOrValue<BytesLike>;
        lastOrderTimestamp: PromiseOrValue<BigNumberish>;
        spotPrice: PromiseOrValue<BigNumberish>;
        expectedHedge: PromiseOrValue<BigNumberish>;
        currentHedge: PromiseOrValue<BigNumberish>;
        currentLeverage: PromiseOrValue<BigNumberish>;
        pendingCollateralDelta: PromiseOrValue<BigNumberish>;
        baseBal: PromiseOrValue<BigNumberish>;
        quoteBal: PromiseOrValue<BigNumberish>;
        wethBal: PromiseOrValue<BigNumberish>;
    };
    type GMXFuturesPoolHedgerViewStructOutput = [
        GMXFuturesPoolHedger.CurrentPositionsStructOutput,
        GMXFuturesPoolHedger.FuturesPoolHedgerParametersStructOutput,
        GMXFuturesPoolHedger.HedgerAddressesStructOutput,
        GMXFuturesPoolHedger.GMXViewStructOutput,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        currentPositions: GMXFuturesPoolHedger.CurrentPositionsStructOutput;
        futuresPoolHedgerParams: GMXFuturesPoolHedger.FuturesPoolHedgerParametersStructOutput;
        hedgerAddresses: GMXFuturesPoolHedger.HedgerAddressesStructOutput;
        gmxView: GMXFuturesPoolHedger.GMXViewStructOutput;
        referralCode: string;
        pendingOrderKey: string;
        lastOrderTimestamp: BigNumber;
        spotPrice: BigNumber;
        expectedHedge: BigNumber;
        currentHedge: BigNumber;
        currentLeverage: BigNumber;
        pendingCollateralDelta: BigNumber;
        baseBal: BigNumber;
        quoteBal: BigNumber;
        wethBal: BigNumber;
    };
}
export declare namespace PoolHedger {
    type PoolHedgerParametersStruct = {
        interactionDelay: PromiseOrValue<BigNumberish>;
        hedgeCap: PromiseOrValue<BigNumberish>;
    };
    type PoolHedgerParametersStructOutput = [BigNumber, BigNumber] & {
        interactionDelay: BigNumber;
        hedgeCap: BigNumber;
    };
}
export interface NewportPoolHedgerInterface extends utils.Interface {
    functions: {
        "BASIS_POINTS_DIVISOR()": FunctionFragment;
        "GMX_PRICE_PRECISION()": FunctionFragment;
        "acceptOwnership()": FunctionFragment;
        "baseAsset()": FunctionFragment;
        "canHedge(uint256,bool)": FunctionFragment;
        "cancelPendingOrder()": FunctionFragment;
        "exchangeAdapter()": FunctionFragment;
        "futuresPoolHedgerParams()": FunctionFragment;
        "getAllPositionsValue()": FunctionFragment;
        "getCappedExpectedHedge()": FunctionFragment;
        "getCurrentHedgedNetDelta()": FunctionFragment;
        "getCurrentLeverage()": FunctionFragment;
        "getHedgerState()": FunctionFragment;
        "getHedgingLiquidity(uint256)": FunctionFragment;
        "getPoolHedgerParams()": FunctionFragment;
        "getPositions()": FunctionFragment;
        "getSwapFeeBP(bool,bool,uint256)": FunctionFragment;
        "gmxPositionCallback(bytes32,bool,bool)": FunctionFragment;
        "greekCache()": FunctionFragment;
        "hasPendingDecrease()": FunctionFragment;
        "hasPendingIncrease()": FunctionFragment;
        "hedgeDelta()": FunctionFragment;
        "init(address,address,address,address,address,address,address,address,address)": FunctionFragment;
        "lastInteraction()": FunctionFragment;
        "lastOrderTimestamp()": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "optionMarket()": FunctionFragment;
        "owner()": FunctionFragment;
        "pendingOrderKey()": FunctionFragment;
        "positionRouter()": FunctionFragment;
        "quoteAsset()": FunctionFragment;
        "recoverEth(address)": FunctionFragment;
        "recoverFunds(address,address)": FunctionFragment;
        "referralCode()": FunctionFragment;
        "resetInteractionDelay()": FunctionFragment;
        "router()": FunctionFragment;
        "sendAllFundsToLP()": FunctionFragment;
        "setFuturesPoolHedgerParams((uint256,uint256,uint256,uint256,uint256,uint256,uint256,bool))": FunctionFragment;
        "setPoolHedgerParams((uint256,uint256))": FunctionFragment;
        "setPositionRouter(address)": FunctionFragment;
        "setReferralCode(bytes32)": FunctionFragment;
        "updateCollateral()": FunctionFragment;
        "vault()": FunctionFragment;
        "weth()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BASIS_POINTS_DIVISOR" | "GMX_PRICE_PRECISION" | "acceptOwnership" | "baseAsset" | "canHedge" | "cancelPendingOrder" | "exchangeAdapter" | "futuresPoolHedgerParams" | "getAllPositionsValue" | "getCappedExpectedHedge" | "getCurrentHedgedNetDelta" | "getCurrentLeverage" | "getHedgerState" | "getHedgingLiquidity" | "getPoolHedgerParams" | "getPositions" | "getSwapFeeBP" | "gmxPositionCallback" | "greekCache" | "hasPendingDecrease" | "hasPendingIncrease" | "hedgeDelta" | "init" | "lastInteraction" | "lastOrderTimestamp" | "nominateNewOwner" | "nominatedOwner" | "optionMarket" | "owner" | "pendingOrderKey" | "positionRouter" | "quoteAsset" | "recoverEth" | "recoverFunds" | "referralCode" | "resetInteractionDelay" | "router" | "sendAllFundsToLP" | "setFuturesPoolHedgerParams" | "setPoolHedgerParams" | "setPositionRouter" | "setReferralCode" | "updateCollateral" | "vault" | "weth"): FunctionFragment;
    encodeFunctionData(functionFragment: "BASIS_POINTS_DIVISOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "GMX_PRICE_PRECISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "canHedge", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "cancelPendingOrder", values?: undefined): string;
    encodeFunctionData(functionFragment: "exchangeAdapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "futuresPoolHedgerParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllPositionsValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCappedExpectedHedge", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentHedgedNetDelta", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentLeverage", values?: undefined): string;
    encodeFunctionData(functionFragment: "getHedgerState", values?: undefined): string;
    encodeFunctionData(functionFragment: "getHedgingLiquidity", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPoolHedgerParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPositions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSwapFeeBP", values: [
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "gmxPositionCallback", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<boolean>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "greekCache", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasPendingDecrease", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasPendingIncrease", values?: undefined): string;
    encodeFunctionData(functionFragment: "hedgeDelta", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "lastInteraction", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastOrderTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "optionMarket", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOrderKey", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "recoverEth", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "recoverFunds", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "referralCode", values?: undefined): string;
    encodeFunctionData(functionFragment: "resetInteractionDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "router", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendAllFundsToLP", values?: undefined): string;
    encodeFunctionData(functionFragment: "setFuturesPoolHedgerParams", values: [GMXFuturesPoolHedger.FuturesPoolHedgerParametersStruct]): string;
    encodeFunctionData(functionFragment: "setPoolHedgerParams", values: [PoolHedger.PoolHedgerParametersStruct]): string;
    encodeFunctionData(functionFragment: "setPositionRouter", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setReferralCode", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "updateCollateral", values?: undefined): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BASIS_POINTS_DIVISOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GMX_PRICE_PRECISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canHedge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelPendingOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "futuresPoolHedgerParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllPositionsValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCappedExpectedHedge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentHedgedNetDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentLeverage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHedgerState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHedgingLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolHedgerParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSwapFeeBP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gmxPositionCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "greekCache", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasPendingDecrease", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasPendingIncrease", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hedgeDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastInteraction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastOrderTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "optionMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOrderKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverEth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "referralCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetInteractionDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendAllFundsToLP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFuturesPoolHedgerParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolHedgerParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPositionRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReferralCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    events: {
        "BaseReturnedToLP(uint256)": EventFragment;
        "CollateralOrderPosted(bytes32,bool,int256)": EventFragment;
        "FuturesPoolHedgerParamsSet(tuple)": EventFragment;
        "GMXPositionCallback(bytes32,bool,bool,tuple)": EventFragment;
        "HedgerPosition(tuple)": EventFragment;
        "OrderCanceled(bytes32,bool)": EventFragment;
        "OrderPosted(bytes32,uint256,uint256,bool,bool)": EventFragment;
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
        "PoolHedgerParametersSet(tuple)": EventFragment;
        "PositionRouterSet(address)": EventFragment;
        "PositionUpdated(address,int256,int256,uint256,bool)": EventFragment;
        "QuoteReturnedToLP(uint256)": EventFragment;
        "WETHSold(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BaseReturnedToLP"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CollateralOrderPosted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FuturesPoolHedgerParamsSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GMXPositionCallback"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "HedgerPosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderPosted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolHedgerParametersSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionRouterSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuoteReturnedToLP"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WETHSold"): EventFragment;
}
export interface BaseReturnedToLPEventObject {
    amountBase: BigNumber;
}
export type BaseReturnedToLPEvent = TypedEvent<[
    BigNumber
], BaseReturnedToLPEventObject>;
export type BaseReturnedToLPEventFilter = TypedEventFilter<BaseReturnedToLPEvent>;
export interface CollateralOrderPostedEventObject {
    positionKey: string;
    isLong: boolean;
    collateralDelta: BigNumber;
}
export type CollateralOrderPostedEvent = TypedEvent<[
    string,
    boolean,
    BigNumber
], CollateralOrderPostedEventObject>;
export type CollateralOrderPostedEventFilter = TypedEventFilter<CollateralOrderPostedEvent>;
export interface FuturesPoolHedgerParamsSetEventObject {
    futuresPoolHedgerParams: GMXFuturesPoolHedger.FuturesPoolHedgerParametersStructOutput;
}
export type FuturesPoolHedgerParamsSetEvent = TypedEvent<[
    GMXFuturesPoolHedger.FuturesPoolHedgerParametersStructOutput
], FuturesPoolHedgerParamsSetEventObject>;
export type FuturesPoolHedgerParamsSetEventFilter = TypedEventFilter<FuturesPoolHedgerParamsSetEvent>;
export interface GMXPositionCallbackEventObject {
    positionKey: string;
    isExecuted: boolean;
    isIncrease: boolean;
    positions: GMXFuturesPoolHedger.CurrentPositionsStructOutput;
}
export type GMXPositionCallbackEvent = TypedEvent<[
    string,
    boolean,
    boolean,
    GMXFuturesPoolHedger.CurrentPositionsStructOutput
], GMXPositionCallbackEventObject>;
export type GMXPositionCallbackEventFilter = TypedEventFilter<GMXPositionCallbackEvent>;
export interface HedgerPositionEventObject {
    position: GMXFuturesPoolHedger.CurrentPositionsStructOutput;
}
export type HedgerPositionEvent = TypedEvent<[
    GMXFuturesPoolHedger.CurrentPositionsStructOutput
], HedgerPositionEventObject>;
export type HedgerPositionEventFilter = TypedEventFilter<HedgerPositionEvent>;
export interface OrderCanceledEventObject {
    pendingOrderKey: string;
    success: boolean;
}
export type OrderCanceledEvent = TypedEvent<[
    string,
    boolean
], OrderCanceledEventObject>;
export type OrderCanceledEventFilter = TypedEventFilter<OrderCanceledEvent>;
export interface OrderPostedEventObject {
    positionKey: string;
    collateralDelta: BigNumber;
    sizeDelta: BigNumber;
    isLong: boolean;
    isIncrease: boolean;
}
export type OrderPostedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    boolean,
    boolean
], OrderPostedEventObject>;
export type OrderPostedEventFilter = TypedEventFilter<OrderPostedEvent>;
export interface OwnerChangedEventObject {
    oldOwner: string;
    newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[
    string,
    string
], OwnerChangedEventObject>;
export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;
export interface OwnerNominatedEventObject {
    newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<[
    string
], OwnerNominatedEventObject>;
export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;
export interface PoolHedgerParametersSetEventObject {
    poolHedgerParams: PoolHedger.PoolHedgerParametersStructOutput;
}
export type PoolHedgerParametersSetEvent = TypedEvent<[
    PoolHedger.PoolHedgerParametersStructOutput
], PoolHedgerParametersSetEventObject>;
export type PoolHedgerParametersSetEventFilter = TypedEventFilter<PoolHedgerParametersSetEvent>;
export interface PositionRouterSetEventObject {
    positionRouter: string;
}
export type PositionRouterSetEvent = TypedEvent<[
    string
], PositionRouterSetEventObject>;
export type PositionRouterSetEventFilter = TypedEventFilter<PositionRouterSetEvent>;
export interface PositionUpdatedEventObject {
    thrower: string;
    currentNetDelta: BigNumber;
    expectedNetDelta: BigNumber;
    modifiedDelta: BigNumber;
    isIncrease: boolean;
}
export type PositionUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
], PositionUpdatedEventObject>;
export type PositionUpdatedEventFilter = TypedEventFilter<PositionUpdatedEvent>;
export interface QuoteReturnedToLPEventObject {
    amountQuote: BigNumber;
}
export type QuoteReturnedToLPEvent = TypedEvent<[
    BigNumber
], QuoteReturnedToLPEventObject>;
export type QuoteReturnedToLPEventFilter = TypedEventFilter<QuoteReturnedToLPEvent>;
export interface WETHSoldEventObject {
    amountWeth: BigNumber;
    quoteReceived: BigNumber;
}
export type WETHSoldEvent = TypedEvent<[
    BigNumber,
    BigNumber
], WETHSoldEventObject>;
export type WETHSoldEventFilter = TypedEventFilter<WETHSoldEvent>;
export interface NewportPoolHedger extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NewportPoolHedgerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<[BigNumber]>;
        GMX_PRICE_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        baseAsset(overrides?: CallOverrides): Promise<[string]>;
        canHedge(arg0: PromiseOrValue<BigNumberish>, increasesPoolDelta: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[boolean]>;
        cancelPendingOrder(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeAdapter(overrides?: CallOverrides): Promise<[string]>;
        futuresPoolHedgerParams(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            acceptableSpotSlippage: BigNumber;
            deltaThreshold: BigNumber;
            marketDepthBuffer: BigNumber;
            targetLeverage: BigNumber;
            maxLeverage: BigNumber;
            leverageBuffer: BigNumber;
            minCancelDelay: BigNumber;
            vaultLiquidityCheckEnabled: boolean;
        }>;
        getAllPositionsValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        getCappedExpectedHedge(overrides?: CallOverrides): Promise<[BigNumber]>;
        getCurrentHedgedNetDelta(overrides?: CallOverrides): Promise<[BigNumber]>;
        getCurrentLeverage(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean,
            boolean,
            BigNumber
        ] & {
            leverage: BigNumber;
            isLong: boolean;
            needUpdate: boolean;
            collateralDelta: BigNumber;
        }>;
        getHedgerState(overrides?: CallOverrides): Promise<[GMXFuturesPoolHedger.GMXFuturesPoolHedgerViewStructOutput]>;
        getHedgingLiquidity(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            pendingDeltaLiquidity: BigNumber;
            usedDeltaLiquidity: BigNumber;
        }>;
        getPoolHedgerParams(overrides?: CallOverrides): Promise<[PoolHedger.PoolHedgerParametersStructOutput]>;
        getPositions(overrides?: CallOverrides): Promise<[
            GMXFuturesPoolHedger.CurrentPositionsStructOutput
        ] & {
            positions: GMXFuturesPoolHedger.CurrentPositionsStructOutput;
        }>;
        getSwapFeeBP(isLong: PromiseOrValue<boolean>, isIncrease: PromiseOrValue<boolean>, amountIn18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            feeBP: BigNumber;
        }>;
        gmxPositionCallback(positionKey: PromiseOrValue<BytesLike>, isExecuted: PromiseOrValue<boolean>, isIncrease: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        greekCache(overrides?: CallOverrides): Promise<[string]>;
        hasPendingDecrease(overrides?: CallOverrides): Promise<[boolean]>;
        hasPendingIncrease(overrides?: CallOverrides): Promise<[boolean]>;
        hedgeDelta(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        init(_liquidityPool: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, _exchangeAdapter: PromiseOrValue<string>, _positionRouter: PromiseOrValue<string>, _router: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, _weth: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lastInteraction(overrides?: CallOverrides): Promise<[BigNumber]>;
        lastOrderTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        optionMarket(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pendingOrderKey(overrides?: CallOverrides): Promise<[string]>;
        positionRouter(overrides?: CallOverrides): Promise<[string]>;
        quoteAsset(overrides?: CallOverrides): Promise<[string]>;
        recoverEth(receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        recoverFunds(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        referralCode(overrides?: CallOverrides): Promise<[string]>;
        resetInteractionDelay(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        router(overrides?: CallOverrides): Promise<[string]>;
        sendAllFundsToLP(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setFuturesPoolHedgerParams(_futuresPoolHedgerParams: GMXFuturesPoolHedger.FuturesPoolHedgerParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPoolHedgerParams(_poolHedgerParams: PoolHedger.PoolHedgerParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPositionRouter(_positionRouter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReferralCode(_referralCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateCollateral(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        vault(overrides?: CallOverrides): Promise<[string]>;
        weth(overrides?: CallOverrides): Promise<[string]>;
    };
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;
    GMX_PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    baseAsset(overrides?: CallOverrides): Promise<string>;
    canHedge(arg0: PromiseOrValue<BigNumberish>, increasesPoolDelta: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
    cancelPendingOrder(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeAdapter(overrides?: CallOverrides): Promise<string>;
    futuresPoolHedgerParams(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        acceptableSpotSlippage: BigNumber;
        deltaThreshold: BigNumber;
        marketDepthBuffer: BigNumber;
        targetLeverage: BigNumber;
        maxLeverage: BigNumber;
        leverageBuffer: BigNumber;
        minCancelDelay: BigNumber;
        vaultLiquidityCheckEnabled: boolean;
    }>;
    getAllPositionsValue(overrides?: CallOverrides): Promise<BigNumber>;
    getCappedExpectedHedge(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentHedgedNetDelta(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentLeverage(overrides?: CallOverrides): Promise<[
        BigNumber,
        boolean,
        boolean,
        BigNumber
    ] & {
        leverage: BigNumber;
        isLong: boolean;
        needUpdate: boolean;
        collateralDelta: BigNumber;
    }>;
    getHedgerState(overrides?: CallOverrides): Promise<GMXFuturesPoolHedger.GMXFuturesPoolHedgerViewStructOutput>;
    getHedgingLiquidity(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        pendingDeltaLiquidity: BigNumber;
        usedDeltaLiquidity: BigNumber;
    }>;
    getPoolHedgerParams(overrides?: CallOverrides): Promise<PoolHedger.PoolHedgerParametersStructOutput>;
    getPositions(overrides?: CallOverrides): Promise<GMXFuturesPoolHedger.CurrentPositionsStructOutput>;
    getSwapFeeBP(isLong: PromiseOrValue<boolean>, isIncrease: PromiseOrValue<boolean>, amountIn18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    gmxPositionCallback(positionKey: PromiseOrValue<BytesLike>, isExecuted: PromiseOrValue<boolean>, isIncrease: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    greekCache(overrides?: CallOverrides): Promise<string>;
    hasPendingDecrease(overrides?: CallOverrides): Promise<boolean>;
    hasPendingIncrease(overrides?: CallOverrides): Promise<boolean>;
    hedgeDelta(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    init(_liquidityPool: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, _exchangeAdapter: PromiseOrValue<string>, _positionRouter: PromiseOrValue<string>, _router: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, _weth: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lastInteraction(overrides?: CallOverrides): Promise<BigNumber>;
    lastOrderTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    optionMarket(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pendingOrderKey(overrides?: CallOverrides): Promise<string>;
    positionRouter(overrides?: CallOverrides): Promise<string>;
    quoteAsset(overrides?: CallOverrides): Promise<string>;
    recoverEth(receiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    recoverFunds(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    referralCode(overrides?: CallOverrides): Promise<string>;
    resetInteractionDelay(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    router(overrides?: CallOverrides): Promise<string>;
    sendAllFundsToLP(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setFuturesPoolHedgerParams(_futuresPoolHedgerParams: GMXFuturesPoolHedger.FuturesPoolHedgerParametersStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPoolHedgerParams(_poolHedgerParams: PoolHedger.PoolHedgerParametersStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPositionRouter(_positionRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReferralCode(_referralCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateCollateral(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    vault(overrides?: CallOverrides): Promise<string>;
    weth(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;
        GMX_PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        baseAsset(overrides?: CallOverrides): Promise<string>;
        canHedge(arg0: PromiseOrValue<BigNumberish>, increasesPoolDelta: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<boolean>;
        cancelPendingOrder(overrides?: CallOverrides): Promise<void>;
        exchangeAdapter(overrides?: CallOverrides): Promise<string>;
        futuresPoolHedgerParams(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            acceptableSpotSlippage: BigNumber;
            deltaThreshold: BigNumber;
            marketDepthBuffer: BigNumber;
            targetLeverage: BigNumber;
            maxLeverage: BigNumber;
            leverageBuffer: BigNumber;
            minCancelDelay: BigNumber;
            vaultLiquidityCheckEnabled: boolean;
        }>;
        getAllPositionsValue(overrides?: CallOverrides): Promise<BigNumber>;
        getCappedExpectedHedge(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentHedgedNetDelta(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentLeverage(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean,
            boolean,
            BigNumber
        ] & {
            leverage: BigNumber;
            isLong: boolean;
            needUpdate: boolean;
            collateralDelta: BigNumber;
        }>;
        getHedgerState(overrides?: CallOverrides): Promise<GMXFuturesPoolHedger.GMXFuturesPoolHedgerViewStructOutput>;
        getHedgingLiquidity(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            pendingDeltaLiquidity: BigNumber;
            usedDeltaLiquidity: BigNumber;
        }>;
        getPoolHedgerParams(overrides?: CallOverrides): Promise<PoolHedger.PoolHedgerParametersStructOutput>;
        getPositions(overrides?: CallOverrides): Promise<GMXFuturesPoolHedger.CurrentPositionsStructOutput>;
        getSwapFeeBP(isLong: PromiseOrValue<boolean>, isIncrease: PromiseOrValue<boolean>, amountIn18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        gmxPositionCallback(positionKey: PromiseOrValue<BytesLike>, isExecuted: PromiseOrValue<boolean>, isIncrease: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        greekCache(overrides?: CallOverrides): Promise<string>;
        hasPendingDecrease(overrides?: CallOverrides): Promise<boolean>;
        hasPendingIncrease(overrides?: CallOverrides): Promise<boolean>;
        hedgeDelta(overrides?: CallOverrides): Promise<void>;
        init(_liquidityPool: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, _exchangeAdapter: PromiseOrValue<string>, _positionRouter: PromiseOrValue<string>, _router: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, _weth: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        lastInteraction(overrides?: CallOverrides): Promise<BigNumber>;
        lastOrderTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        optionMarket(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pendingOrderKey(overrides?: CallOverrides): Promise<string>;
        positionRouter(overrides?: CallOverrides): Promise<string>;
        quoteAsset(overrides?: CallOverrides): Promise<string>;
        recoverEth(receiver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        recoverFunds(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        referralCode(overrides?: CallOverrides): Promise<string>;
        resetInteractionDelay(overrides?: CallOverrides): Promise<void>;
        router(overrides?: CallOverrides): Promise<string>;
        sendAllFundsToLP(overrides?: CallOverrides): Promise<void>;
        setFuturesPoolHedgerParams(_futuresPoolHedgerParams: GMXFuturesPoolHedger.FuturesPoolHedgerParametersStruct, overrides?: CallOverrides): Promise<void>;
        setPoolHedgerParams(_poolHedgerParams: PoolHedger.PoolHedgerParametersStruct, overrides?: CallOverrides): Promise<void>;
        setPositionRouter(_positionRouter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setReferralCode(_referralCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        updateCollateral(overrides?: CallOverrides): Promise<void>;
        vault(overrides?: CallOverrides): Promise<string>;
        weth(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "BaseReturnedToLP(uint256)"(amountBase?: null): BaseReturnedToLPEventFilter;
        BaseReturnedToLP(amountBase?: null): BaseReturnedToLPEventFilter;
        "CollateralOrderPosted(bytes32,bool,int256)"(positionKey?: null, isLong?: null, collateralDelta?: null): CollateralOrderPostedEventFilter;
        CollateralOrderPosted(positionKey?: null, isLong?: null, collateralDelta?: null): CollateralOrderPostedEventFilter;
        "FuturesPoolHedgerParamsSet(tuple)"(futuresPoolHedgerParams?: null): FuturesPoolHedgerParamsSetEventFilter;
        FuturesPoolHedgerParamsSet(futuresPoolHedgerParams?: null): FuturesPoolHedgerParamsSetEventFilter;
        "GMXPositionCallback(bytes32,bool,bool,tuple)"(positionKey?: null, isExecuted?: null, isIncrease?: null, positions?: null): GMXPositionCallbackEventFilter;
        GMXPositionCallback(positionKey?: null, isExecuted?: null, isIncrease?: null, positions?: null): GMXPositionCallbackEventFilter;
        "HedgerPosition(tuple)"(position?: null): HedgerPositionEventFilter;
        HedgerPosition(position?: null): HedgerPositionEventFilter;
        "OrderCanceled(bytes32,bool)"(pendingOrderKey?: null, success?: null): OrderCanceledEventFilter;
        OrderCanceled(pendingOrderKey?: null, success?: null): OrderCanceledEventFilter;
        "OrderPosted(bytes32,uint256,uint256,bool,bool)"(positionKey?: null, collateralDelta?: null, sizeDelta?: null, isLong?: null, isIncrease?: null): OrderPostedEventFilter;
        OrderPosted(positionKey?: null, collateralDelta?: null, sizeDelta?: null, isLong?: null, isIncrease?: null): OrderPostedEventFilter;
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
        "PoolHedgerParametersSet(tuple)"(poolHedgerParams?: null): PoolHedgerParametersSetEventFilter;
        PoolHedgerParametersSet(poolHedgerParams?: null): PoolHedgerParametersSetEventFilter;
        "PositionRouterSet(address)"(positionRouter?: null): PositionRouterSetEventFilter;
        PositionRouterSet(positionRouter?: null): PositionRouterSetEventFilter;
        "PositionUpdated(address,int256,int256,uint256,bool)"(thrower?: null, currentNetDelta?: null, expectedNetDelta?: null, modifiedDelta?: null, isIncrease?: null): PositionUpdatedEventFilter;
        PositionUpdated(thrower?: null, currentNetDelta?: null, expectedNetDelta?: null, modifiedDelta?: null, isIncrease?: null): PositionUpdatedEventFilter;
        "QuoteReturnedToLP(uint256)"(amountQuote?: null): QuoteReturnedToLPEventFilter;
        QuoteReturnedToLP(amountQuote?: null): QuoteReturnedToLPEventFilter;
        "WETHSold(uint256,uint256)"(amountWeth?: null, quoteReceived?: null): WETHSoldEventFilter;
        WETHSold(amountWeth?: null, quoteReceived?: null): WETHSoldEventFilter;
    };
    estimateGas: {
        BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;
        GMX_PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        baseAsset(overrides?: CallOverrides): Promise<BigNumber>;
        canHedge(arg0: PromiseOrValue<BigNumberish>, increasesPoolDelta: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        cancelPendingOrder(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeAdapter(overrides?: CallOverrides): Promise<BigNumber>;
        futuresPoolHedgerParams(overrides?: CallOverrides): Promise<BigNumber>;
        getAllPositionsValue(overrides?: CallOverrides): Promise<BigNumber>;
        getCappedExpectedHedge(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentHedgedNetDelta(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentLeverage(overrides?: CallOverrides): Promise<BigNumber>;
        getHedgerState(overrides?: CallOverrides): Promise<BigNumber>;
        getHedgingLiquidity(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolHedgerParams(overrides?: CallOverrides): Promise<BigNumber>;
        getPositions(overrides?: CallOverrides): Promise<BigNumber>;
        getSwapFeeBP(isLong: PromiseOrValue<boolean>, isIncrease: PromiseOrValue<boolean>, amountIn18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        gmxPositionCallback(positionKey: PromiseOrValue<BytesLike>, isExecuted: PromiseOrValue<boolean>, isIncrease: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        greekCache(overrides?: CallOverrides): Promise<BigNumber>;
        hasPendingDecrease(overrides?: CallOverrides): Promise<BigNumber>;
        hasPendingIncrease(overrides?: CallOverrides): Promise<BigNumber>;
        hedgeDelta(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        init(_liquidityPool: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, _exchangeAdapter: PromiseOrValue<string>, _positionRouter: PromiseOrValue<string>, _router: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, _weth: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lastInteraction(overrides?: CallOverrides): Promise<BigNumber>;
        lastOrderTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        optionMarket(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pendingOrderKey(overrides?: CallOverrides): Promise<BigNumber>;
        positionRouter(overrides?: CallOverrides): Promise<BigNumber>;
        quoteAsset(overrides?: CallOverrides): Promise<BigNumber>;
        recoverEth(receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        recoverFunds(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        referralCode(overrides?: CallOverrides): Promise<BigNumber>;
        resetInteractionDelay(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        router(overrides?: CallOverrides): Promise<BigNumber>;
        sendAllFundsToLP(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setFuturesPoolHedgerParams(_futuresPoolHedgerParams: GMXFuturesPoolHedger.FuturesPoolHedgerParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPoolHedgerParams(_poolHedgerParams: PoolHedger.PoolHedgerParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPositionRouter(_positionRouter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReferralCode(_referralCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateCollateral(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GMX_PRICE_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        baseAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canHedge(arg0: PromiseOrValue<BigNumberish>, increasesPoolDelta: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelPendingOrder(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeAdapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        futuresPoolHedgerParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllPositionsValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCappedExpectedHedge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentHedgedNetDelta(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentLeverage(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHedgerState(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHedgingLiquidity(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolHedgerParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPositions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSwapFeeBP(isLong: PromiseOrValue<boolean>, isIncrease: PromiseOrValue<boolean>, amountIn18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gmxPositionCallback(positionKey: PromiseOrValue<BytesLike>, isExecuted: PromiseOrValue<boolean>, isIncrease: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        greekCache(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasPendingDecrease(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasPendingIncrease(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hedgeDelta(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        init(_liquidityPool: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, _exchangeAdapter: PromiseOrValue<string>, _positionRouter: PromiseOrValue<string>, _router: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, _weth: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lastInteraction(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastOrderTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        optionMarket(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingOrderKey(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recoverEth(receiver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        recoverFunds(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        referralCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resetInteractionDelay(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        router(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendAllFundsToLP(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setFuturesPoolHedgerParams(_futuresPoolHedgerParams: GMXFuturesPoolHedger.FuturesPoolHedgerParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPoolHedgerParams(_poolHedgerParams: PoolHedger.PoolHedgerParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPositionRouter(_positionRouter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReferralCode(_referralCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateCollateral(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
