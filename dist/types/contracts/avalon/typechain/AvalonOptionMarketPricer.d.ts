import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace OptionMarketPricer {
    type PricingParametersStruct = {
        optionPriceFeeCoefficient: PromiseOrValue<BigNumberish>;
        optionPriceFee1xPoint: PromiseOrValue<BigNumberish>;
        optionPriceFee2xPoint: PromiseOrValue<BigNumberish>;
        spotPriceFeeCoefficient: PromiseOrValue<BigNumberish>;
        spotPriceFee1xPoint: PromiseOrValue<BigNumberish>;
        spotPriceFee2xPoint: PromiseOrValue<BigNumberish>;
        vegaFeeCoefficient: PromiseOrValue<BigNumberish>;
        standardSize: PromiseOrValue<BigNumberish>;
        skewAdjustmentFactor: PromiseOrValue<BigNumberish>;
    };
    type PricingParametersStructOutput = [
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
        optionPriceFeeCoefficient: BigNumber;
        optionPriceFee1xPoint: BigNumber;
        optionPriceFee2xPoint: BigNumber;
        spotPriceFeeCoefficient: BigNumber;
        spotPriceFee1xPoint: BigNumber;
        spotPriceFee2xPoint: BigNumber;
        vegaFeeCoefficient: BigNumber;
        standardSize: BigNumber;
        skewAdjustmentFactor: BigNumber;
    };
    type TradeLimitParametersStruct = {
        minDelta: PromiseOrValue<BigNumberish>;
        minForceCloseDelta: PromiseOrValue<BigNumberish>;
        tradingCutoff: PromiseOrValue<BigNumberish>;
        minBaseIV: PromiseOrValue<BigNumberish>;
        maxBaseIV: PromiseOrValue<BigNumberish>;
        minSkew: PromiseOrValue<BigNumberish>;
        maxSkew: PromiseOrValue<BigNumberish>;
        minVol: PromiseOrValue<BigNumberish>;
        maxVol: PromiseOrValue<BigNumberish>;
        absMinSkew: PromiseOrValue<BigNumberish>;
        absMaxSkew: PromiseOrValue<BigNumberish>;
        capSkewsToAbs: PromiseOrValue<boolean>;
    };
    type TradeLimitParametersStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        minDelta: BigNumber;
        minForceCloseDelta: BigNumber;
        tradingCutoff: BigNumber;
        minBaseIV: BigNumber;
        maxBaseIV: BigNumber;
        minSkew: BigNumber;
        maxSkew: BigNumber;
        minVol: BigNumber;
        maxVol: BigNumber;
        absMinSkew: BigNumber;
        absMaxSkew: BigNumber;
        capSkewsToAbs: boolean;
    };
    type VarianceFeeParametersStruct = {
        defaultVarianceFeeCoefficient: PromiseOrValue<BigNumberish>;
        forceCloseVarianceFeeCoefficient: PromiseOrValue<BigNumberish>;
        skewAdjustmentCoefficient: PromiseOrValue<BigNumberish>;
        referenceSkew: PromiseOrValue<BigNumberish>;
        minimumStaticSkewAdjustment: PromiseOrValue<BigNumberish>;
        vegaCoefficient: PromiseOrValue<BigNumberish>;
        minimumStaticVega: PromiseOrValue<BigNumberish>;
        ivVarianceCoefficient: PromiseOrValue<BigNumberish>;
        minimumStaticIvVariance: PromiseOrValue<BigNumberish>;
    };
    type VarianceFeeParametersStructOutput = [
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
        defaultVarianceFeeCoefficient: BigNumber;
        forceCloseVarianceFeeCoefficient: BigNumber;
        skewAdjustmentCoefficient: BigNumber;
        referenceSkew: BigNumber;
        minimumStaticSkewAdjustment: BigNumber;
        vegaCoefficient: BigNumber;
        minimumStaticVega: BigNumber;
        ivVarianceCoefficient: BigNumber;
        minimumStaticIvVariance: BigNumber;
    };
    type VegaUtilFeeComponentsStruct = {
        preTradeAmmNetStdVega: PromiseOrValue<BigNumberish>;
        postTradeAmmNetStdVega: PromiseOrValue<BigNumberish>;
        vegaUtil: PromiseOrValue<BigNumberish>;
        volTraded: PromiseOrValue<BigNumberish>;
        NAV: PromiseOrValue<BigNumberish>;
        vegaUtilFee: PromiseOrValue<BigNumberish>;
    };
    type VegaUtilFeeComponentsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        preTradeAmmNetStdVega: BigNumber;
        postTradeAmmNetStdVega: BigNumber;
        vegaUtil: BigNumber;
        volTraded: BigNumber;
        NAV: BigNumber;
        vegaUtilFee: BigNumber;
    };
    type VarianceFeeComponentsStruct = {
        varianceFeeCoefficient: PromiseOrValue<BigNumberish>;
        vega: PromiseOrValue<BigNumberish>;
        vegaCoefficient: PromiseOrValue<BigNumberish>;
        skew: PromiseOrValue<BigNumberish>;
        skewCoefficient: PromiseOrValue<BigNumberish>;
        ivVariance: PromiseOrValue<BigNumberish>;
        ivVarianceCoefficient: PromiseOrValue<BigNumberish>;
        varianceFee: PromiseOrValue<BigNumberish>;
    };
    type VarianceFeeComponentsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        varianceFeeCoefficient: BigNumber;
        vega: BigNumber;
        vegaCoefficient: BigNumber;
        skew: BigNumber;
        skewCoefficient: BigNumber;
        ivVariance: BigNumber;
        ivVarianceCoefficient: BigNumber;
        varianceFee: BigNumber;
    };
    type TradeResultStruct = {
        amount: PromiseOrValue<BigNumberish>;
        premium: PromiseOrValue<BigNumberish>;
        optionPriceFee: PromiseOrValue<BigNumberish>;
        spotPriceFee: PromiseOrValue<BigNumberish>;
        vegaUtilFee: OptionMarketPricer.VegaUtilFeeComponentsStruct;
        varianceFee: OptionMarketPricer.VarianceFeeComponentsStruct;
        totalFee: PromiseOrValue<BigNumberish>;
        totalCost: PromiseOrValue<BigNumberish>;
        volTraded: PromiseOrValue<BigNumberish>;
        newBaseIv: PromiseOrValue<BigNumberish>;
        newSkew: PromiseOrValue<BigNumberish>;
    };
    type TradeResultStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        OptionMarketPricer.VegaUtilFeeComponentsStructOutput,
        OptionMarketPricer.VarianceFeeComponentsStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amount: BigNumber;
        premium: BigNumber;
        optionPriceFee: BigNumber;
        spotPriceFee: BigNumber;
        vegaUtilFee: OptionMarketPricer.VegaUtilFeeComponentsStructOutput;
        varianceFee: OptionMarketPricer.VarianceFeeComponentsStructOutput;
        totalFee: BigNumber;
        totalCost: BigNumber;
        volTraded: BigNumber;
        newBaseIv: BigNumber;
        newSkew: BigNumber;
    };
}
export declare namespace LiquidityPool {
    type LiquidityStruct = {
        freeLiquidity: PromiseOrValue<BigNumberish>;
        burnableLiquidity: PromiseOrValue<BigNumberish>;
        usedCollatLiquidity: PromiseOrValue<BigNumberish>;
        pendingDeltaLiquidity: PromiseOrValue<BigNumberish>;
        usedDeltaLiquidity: PromiseOrValue<BigNumberish>;
        NAV: PromiseOrValue<BigNumberish>;
    };
    type LiquidityStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        freeLiquidity: BigNumber;
        burnableLiquidity: BigNumber;
        usedCollatLiquidity: BigNumber;
        pendingDeltaLiquidity: BigNumber;
        usedDeltaLiquidity: BigNumber;
        NAV: BigNumber;
    };
}
export declare namespace SynthetixAdapter {
    type ExchangeParamsStruct = {
        spotPrice: PromiseOrValue<BigNumberish>;
        quoteKey: PromiseOrValue<BytesLike>;
        baseKey: PromiseOrValue<BytesLike>;
        quoteBaseFeeRate: PromiseOrValue<BigNumberish>;
        baseQuoteFeeRate: PromiseOrValue<BigNumberish>;
    };
    type ExchangeParamsStructOutput = [
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        spotPrice: BigNumber;
        quoteKey: string;
        baseKey: string;
        quoteBaseFeeRate: BigNumber;
        baseQuoteFeeRate: BigNumber;
    };
}
export declare namespace OptionMarket {
    type TradeParametersStruct = {
        isBuy: PromiseOrValue<boolean>;
        isForceClose: PromiseOrValue<boolean>;
        tradeDirection: PromiseOrValue<BigNumberish>;
        optionType: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
        expiry: PromiseOrValue<BigNumberish>;
        strikePrice: PromiseOrValue<BigNumberish>;
        liquidity: LiquidityPool.LiquidityStruct;
        exchangeParams: SynthetixAdapter.ExchangeParamsStruct;
    };
    type TradeParametersStructOutput = [
        boolean,
        boolean,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        LiquidityPool.LiquidityStructOutput,
        SynthetixAdapter.ExchangeParamsStructOutput
    ] & {
        isBuy: boolean;
        isForceClose: boolean;
        tradeDirection: number;
        optionType: number;
        amount: BigNumber;
        expiry: BigNumber;
        strikePrice: BigNumber;
        liquidity: LiquidityPool.LiquidityStructOutput;
        exchangeParams: SynthetixAdapter.ExchangeParamsStructOutput;
    };
    type StrikeStruct = {
        id: PromiseOrValue<BigNumberish>;
        strikePrice: PromiseOrValue<BigNumberish>;
        skew: PromiseOrValue<BigNumberish>;
        longCall: PromiseOrValue<BigNumberish>;
        shortCallBase: PromiseOrValue<BigNumberish>;
        shortCallQuote: PromiseOrValue<BigNumberish>;
        longPut: PromiseOrValue<BigNumberish>;
        shortPut: PromiseOrValue<BigNumberish>;
        boardId: PromiseOrValue<BigNumberish>;
    };
    type StrikeStructOutput = [
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
        id: BigNumber;
        strikePrice: BigNumber;
        skew: BigNumber;
        longCall: BigNumber;
        shortCallBase: BigNumber;
        shortCallQuote: BigNumber;
        longPut: BigNumber;
        shortPut: BigNumber;
        boardId: BigNumber;
    };
}
export declare namespace OptionGreekCache {
    type TradePricingStruct = {
        optionPrice: PromiseOrValue<BigNumberish>;
        preTradeAmmNetStdVega: PromiseOrValue<BigNumberish>;
        postTradeAmmNetStdVega: PromiseOrValue<BigNumberish>;
        callDelta: PromiseOrValue<BigNumberish>;
        volTraded: PromiseOrValue<BigNumberish>;
        ivVariance: PromiseOrValue<BigNumberish>;
        vega: PromiseOrValue<BigNumberish>;
    };
    type TradePricingStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        optionPrice: BigNumber;
        preTradeAmmNetStdVega: BigNumber;
        postTradeAmmNetStdVega: BigNumber;
        callDelta: BigNumber;
        volTraded: BigNumber;
        ivVariance: BigNumber;
        vega: BigNumber;
    };
}
export interface AvalonOptionMarketPricerInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "getPricingParams()": FunctionFragment;
        "getTimeWeightedFee(uint256,uint256,uint256,uint256)": FunctionFragment;
        "getTradeLimitParams()": FunctionFragment;
        "getTradeResult((bool,bool,uint8,uint8,uint256,uint256,uint256,(uint256,uint256,uint256,uint256,uint256,uint256),(uint256,bytes32,bytes32,uint256,uint256)),(uint256,int256,int256,int256,uint256,uint256,uint256),uint256,uint256)": FunctionFragment;
        "getVarianceFee((bool,bool,uint8,uint8,uint256,uint256,uint256,(uint256,uint256,uint256,uint256,uint256,uint256),(uint256,bytes32,bytes32,uint256,uint256)),(uint256,int256,int256,int256,uint256,uint256,uint256),uint256)": FunctionFragment;
        "getVarianceFeeParams()": FunctionFragment;
        "getVegaUtilFee((bool,bool,uint8,uint8,uint256,uint256,uint256,(uint256,uint256,uint256,uint256,uint256,uint256),(uint256,bytes32,bytes32,uint256,uint256)),(uint256,int256,int256,int256,uint256,uint256,uint256))": FunctionFragment;
        "init(address,address)": FunctionFragment;
        "ivImpactForTrade((bool,bool,uint8,uint8,uint256,uint256,uint256,(uint256,uint256,uint256,uint256,uint256,uint256),(uint256,bytes32,bytes32,uint256,uint256)),uint256,uint256)": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "owner()": FunctionFragment;
        "pricingParams()": FunctionFragment;
        "setPricingParams((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "setTradeLimitParams((int256,int256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,bool))": FunctionFragment;
        "setVarianceFeeParams((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "tradeLimitParams()": FunctionFragment;
        "updateCacheAndGetTradeResult((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bool,bool,uint8,uint8,uint256,uint256,uint256,(uint256,uint256,uint256,uint256,uint256,uint256),(uint256,bytes32,bytes32,uint256,uint256)),uint256,uint256)": FunctionFragment;
        "varianceFeeParams()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "getPricingParams" | "getTimeWeightedFee" | "getTradeLimitParams" | "getTradeResult" | "getVarianceFee" | "getVarianceFeeParams" | "getVegaUtilFee" | "init" | "ivImpactForTrade" | "nominateNewOwner" | "nominatedOwner" | "owner" | "pricingParams" | "setPricingParams" | "setTradeLimitParams" | "setVarianceFeeParams" | "tradeLimitParams" | "updateCacheAndGetTradeResult" | "varianceFeeParams"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPricingParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTimeWeightedFee", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getTradeLimitParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTradeResult", values: [
        OptionMarket.TradeParametersStruct,
        OptionGreekCache.TradePricingStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getVarianceFee", values: [
        OptionMarket.TradeParametersStruct,
        OptionGreekCache.TradePricingStruct,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getVarianceFeeParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVegaUtilFee", values: [
        OptionMarket.TradeParametersStruct,
        OptionGreekCache.TradePricingStruct
    ]): string;
    encodeFunctionData(functionFragment: "init", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "ivImpactForTrade", values: [
        OptionMarket.TradeParametersStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pricingParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPricingParams", values: [OptionMarketPricer.PricingParametersStruct]): string;
    encodeFunctionData(functionFragment: "setTradeLimitParams", values: [OptionMarketPricer.TradeLimitParametersStruct]): string;
    encodeFunctionData(functionFragment: "setVarianceFeeParams", values: [OptionMarketPricer.VarianceFeeParametersStruct]): string;
    encodeFunctionData(functionFragment: "tradeLimitParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCacheAndGetTradeResult", values: [
        OptionMarket.StrikeStruct,
        OptionMarket.TradeParametersStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "varianceFeeParams", values?: undefined): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPricingParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTimeWeightedFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeLimitParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTradeResult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVarianceFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVarianceFeeParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVegaUtilFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ivImpactForTrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pricingParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPricingParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTradeLimitParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVarianceFeeParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tradeLimitParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCacheAndGetTradeResult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "varianceFeeParams", data: BytesLike): Result;
    events: {
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
        "PricingParametersSet(tuple)": EventFragment;
        "TradeLimitParametersSet(tuple)": EventFragment;
        "VarianceFeeParametersSet(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PricingParametersSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TradeLimitParametersSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VarianceFeeParametersSet"): EventFragment;
}
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
export interface PricingParametersSetEventObject {
    pricingParams: OptionMarketPricer.PricingParametersStructOutput;
}
export type PricingParametersSetEvent = TypedEvent<[
    OptionMarketPricer.PricingParametersStructOutput
], PricingParametersSetEventObject>;
export type PricingParametersSetEventFilter = TypedEventFilter<PricingParametersSetEvent>;
export interface TradeLimitParametersSetEventObject {
    tradeLimitParams: OptionMarketPricer.TradeLimitParametersStructOutput;
}
export type TradeLimitParametersSetEvent = TypedEvent<[
    OptionMarketPricer.TradeLimitParametersStructOutput
], TradeLimitParametersSetEventObject>;
export type TradeLimitParametersSetEventFilter = TypedEventFilter<TradeLimitParametersSetEvent>;
export interface VarianceFeeParametersSetEventObject {
    varianceFeeParams: OptionMarketPricer.VarianceFeeParametersStructOutput;
}
export type VarianceFeeParametersSetEvent = TypedEvent<[
    OptionMarketPricer.VarianceFeeParametersStructOutput
], VarianceFeeParametersSetEventObject>;
export type VarianceFeeParametersSetEventFilter = TypedEventFilter<VarianceFeeParametersSetEvent>;
export interface AvalonOptionMarketPricer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AvalonOptionMarketPricerInterface;
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
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getPricingParams(overrides?: CallOverrides): Promise<[
            OptionMarketPricer.PricingParametersStructOutput
        ] & {
            pricingParameters: OptionMarketPricer.PricingParametersStructOutput;
        }>;
        getTimeWeightedFee(expiry: PromiseOrValue<BigNumberish>, pointA: PromiseOrValue<BigNumberish>, pointB: PromiseOrValue<BigNumberish>, coefficient: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            timeWeightedFee: BigNumber;
        }>;
        getTradeLimitParams(overrides?: CallOverrides): Promise<[
            OptionMarketPricer.TradeLimitParametersStructOutput
        ] & {
            tradeLimitParameters: OptionMarketPricer.TradeLimitParametersStructOutput;
        }>;
        getTradeResult(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, newBaseIv: PromiseOrValue<BigNumberish>, newSkew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            OptionMarketPricer.TradeResultStructOutput
        ] & {
            tradeResult: OptionMarketPricer.TradeResultStructOutput;
        }>;
        getVarianceFee(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, skew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            OptionMarketPricer.VarianceFeeComponentsStructOutput
        ] & {
            varianceFeeComponents: OptionMarketPricer.VarianceFeeComponentsStructOutput;
        }>;
        getVarianceFeeParams(overrides?: CallOverrides): Promise<[
            OptionMarketPricer.VarianceFeeParametersStructOutput
        ] & {
            varianceFeeParameters: OptionMarketPricer.VarianceFeeParametersStructOutput;
        }>;
        getVegaUtilFee(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, overrides?: CallOverrides): Promise<[
            OptionMarketPricer.VegaUtilFeeComponentsStructOutput
        ] & {
            vegaUtilFeeComponents: OptionMarketPricer.VegaUtilFeeComponentsStructOutput;
        }>;
        init(_optionMarket: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        ivImpactForTrade(trade: OptionMarket.TradeParametersStruct, boardBaseIv: PromiseOrValue<BigNumberish>, strikeSkew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            newBaseIv: BigNumber;
            newSkew: BigNumber;
        }>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pricingParams(overrides?: CallOverrides): Promise<[
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
            optionPriceFeeCoefficient: BigNumber;
            optionPriceFee1xPoint: BigNumber;
            optionPriceFee2xPoint: BigNumber;
            spotPriceFeeCoefficient: BigNumber;
            spotPriceFee1xPoint: BigNumber;
            spotPriceFee2xPoint: BigNumber;
            vegaFeeCoefficient: BigNumber;
            standardSize: BigNumber;
            skewAdjustmentFactor: BigNumber;
        }>;
        setPricingParams(_pricingParams: OptionMarketPricer.PricingParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTradeLimitParams(_tradeLimitParams: OptionMarketPricer.TradeLimitParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVarianceFeeParams(_varianceFeeParams: OptionMarketPricer.VarianceFeeParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tradeLimitParams(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            minDelta: BigNumber;
            minForceCloseDelta: BigNumber;
            tradingCutoff: BigNumber;
            minBaseIV: BigNumber;
            maxBaseIV: BigNumber;
            minSkew: BigNumber;
            maxSkew: BigNumber;
            minVol: BigNumber;
            maxVol: BigNumber;
            absMinSkew: BigNumber;
            absMaxSkew: BigNumber;
            capSkewsToAbs: boolean;
        }>;
        updateCacheAndGetTradeResult(strike: OptionMarket.StrikeStruct, trade: OptionMarket.TradeParametersStruct, boardBaseIv: PromiseOrValue<BigNumberish>, boardExpiry: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        varianceFeeParams(overrides?: CallOverrides): Promise<[
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
            defaultVarianceFeeCoefficient: BigNumber;
            forceCloseVarianceFeeCoefficient: BigNumber;
            skewAdjustmentCoefficient: BigNumber;
            referenceSkew: BigNumber;
            minimumStaticSkewAdjustment: BigNumber;
            vegaCoefficient: BigNumber;
            minimumStaticVega: BigNumber;
            ivVarianceCoefficient: BigNumber;
            minimumStaticIvVariance: BigNumber;
        }>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getPricingParams(overrides?: CallOverrides): Promise<OptionMarketPricer.PricingParametersStructOutput>;
    getTimeWeightedFee(expiry: PromiseOrValue<BigNumberish>, pointA: PromiseOrValue<BigNumberish>, pointB: PromiseOrValue<BigNumberish>, coefficient: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTradeLimitParams(overrides?: CallOverrides): Promise<OptionMarketPricer.TradeLimitParametersStructOutput>;
    getTradeResult(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, newBaseIv: PromiseOrValue<BigNumberish>, newSkew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarketPricer.TradeResultStructOutput>;
    getVarianceFee(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, skew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarketPricer.VarianceFeeComponentsStructOutput>;
    getVarianceFeeParams(overrides?: CallOverrides): Promise<OptionMarketPricer.VarianceFeeParametersStructOutput>;
    getVegaUtilFee(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, overrides?: CallOverrides): Promise<OptionMarketPricer.VegaUtilFeeComponentsStructOutput>;
    init(_optionMarket: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    ivImpactForTrade(trade: OptionMarket.TradeParametersStruct, boardBaseIv: PromiseOrValue<BigNumberish>, strikeSkew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        newBaseIv: BigNumber;
        newSkew: BigNumber;
    }>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pricingParams(overrides?: CallOverrides): Promise<[
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
        optionPriceFeeCoefficient: BigNumber;
        optionPriceFee1xPoint: BigNumber;
        optionPriceFee2xPoint: BigNumber;
        spotPriceFeeCoefficient: BigNumber;
        spotPriceFee1xPoint: BigNumber;
        spotPriceFee2xPoint: BigNumber;
        vegaFeeCoefficient: BigNumber;
        standardSize: BigNumber;
        skewAdjustmentFactor: BigNumber;
    }>;
    setPricingParams(_pricingParams: OptionMarketPricer.PricingParametersStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTradeLimitParams(_tradeLimitParams: OptionMarketPricer.TradeLimitParametersStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVarianceFeeParams(_varianceFeeParams: OptionMarketPricer.VarianceFeeParametersStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tradeLimitParams(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        minDelta: BigNumber;
        minForceCloseDelta: BigNumber;
        tradingCutoff: BigNumber;
        minBaseIV: BigNumber;
        maxBaseIV: BigNumber;
        minSkew: BigNumber;
        maxSkew: BigNumber;
        minVol: BigNumber;
        maxVol: BigNumber;
        absMinSkew: BigNumber;
        absMaxSkew: BigNumber;
        capSkewsToAbs: boolean;
    }>;
    updateCacheAndGetTradeResult(strike: OptionMarket.StrikeStruct, trade: OptionMarket.TradeParametersStruct, boardBaseIv: PromiseOrValue<BigNumberish>, boardExpiry: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    varianceFeeParams(overrides?: CallOverrides): Promise<[
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
        defaultVarianceFeeCoefficient: BigNumber;
        forceCloseVarianceFeeCoefficient: BigNumber;
        skewAdjustmentCoefficient: BigNumber;
        referenceSkew: BigNumber;
        minimumStaticSkewAdjustment: BigNumber;
        vegaCoefficient: BigNumber;
        minimumStaticVega: BigNumber;
        ivVarianceCoefficient: BigNumber;
        minimumStaticIvVariance: BigNumber;
    }>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        getPricingParams(overrides?: CallOverrides): Promise<OptionMarketPricer.PricingParametersStructOutput>;
        getTimeWeightedFee(expiry: PromiseOrValue<BigNumberish>, pointA: PromiseOrValue<BigNumberish>, pointB: PromiseOrValue<BigNumberish>, coefficient: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeLimitParams(overrides?: CallOverrides): Promise<OptionMarketPricer.TradeLimitParametersStructOutput>;
        getTradeResult(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, newBaseIv: PromiseOrValue<BigNumberish>, newSkew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarketPricer.TradeResultStructOutput>;
        getVarianceFee(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, skew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarketPricer.VarianceFeeComponentsStructOutput>;
        getVarianceFeeParams(overrides?: CallOverrides): Promise<OptionMarketPricer.VarianceFeeParametersStructOutput>;
        getVegaUtilFee(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, overrides?: CallOverrides): Promise<OptionMarketPricer.VegaUtilFeeComponentsStructOutput>;
        init(_optionMarket: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        ivImpactForTrade(trade: OptionMarket.TradeParametersStruct, boardBaseIv: PromiseOrValue<BigNumberish>, strikeSkew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            newBaseIv: BigNumber;
            newSkew: BigNumber;
        }>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pricingParams(overrides?: CallOverrides): Promise<[
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
            optionPriceFeeCoefficient: BigNumber;
            optionPriceFee1xPoint: BigNumber;
            optionPriceFee2xPoint: BigNumber;
            spotPriceFeeCoefficient: BigNumber;
            spotPriceFee1xPoint: BigNumber;
            spotPriceFee2xPoint: BigNumber;
            vegaFeeCoefficient: BigNumber;
            standardSize: BigNumber;
            skewAdjustmentFactor: BigNumber;
        }>;
        setPricingParams(_pricingParams: OptionMarketPricer.PricingParametersStruct, overrides?: CallOverrides): Promise<void>;
        setTradeLimitParams(_tradeLimitParams: OptionMarketPricer.TradeLimitParametersStruct, overrides?: CallOverrides): Promise<void>;
        setVarianceFeeParams(_varianceFeeParams: OptionMarketPricer.VarianceFeeParametersStruct, overrides?: CallOverrides): Promise<void>;
        tradeLimitParams(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            minDelta: BigNumber;
            minForceCloseDelta: BigNumber;
            tradingCutoff: BigNumber;
            minBaseIV: BigNumber;
            maxBaseIV: BigNumber;
            minSkew: BigNumber;
            maxSkew: BigNumber;
            minVol: BigNumber;
            maxVol: BigNumber;
            absMinSkew: BigNumber;
            absMaxSkew: BigNumber;
            capSkewsToAbs: boolean;
        }>;
        updateCacheAndGetTradeResult(strike: OptionMarket.StrikeStruct, trade: OptionMarket.TradeParametersStruct, boardBaseIv: PromiseOrValue<BigNumberish>, boardExpiry: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarketPricer.TradeResultStructOutput>;
        varianceFeeParams(overrides?: CallOverrides): Promise<[
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
            defaultVarianceFeeCoefficient: BigNumber;
            forceCloseVarianceFeeCoefficient: BigNumber;
            skewAdjustmentCoefficient: BigNumber;
            referenceSkew: BigNumber;
            minimumStaticSkewAdjustment: BigNumber;
            vegaCoefficient: BigNumber;
            minimumStaticVega: BigNumber;
            ivVarianceCoefficient: BigNumber;
            minimumStaticIvVariance: BigNumber;
        }>;
    };
    filters: {
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
        "PricingParametersSet(tuple)"(pricingParams?: null): PricingParametersSetEventFilter;
        PricingParametersSet(pricingParams?: null): PricingParametersSetEventFilter;
        "TradeLimitParametersSet(tuple)"(tradeLimitParams?: null): TradeLimitParametersSetEventFilter;
        TradeLimitParametersSet(tradeLimitParams?: null): TradeLimitParametersSetEventFilter;
        "VarianceFeeParametersSet(tuple)"(varianceFeeParams?: null): VarianceFeeParametersSetEventFilter;
        VarianceFeeParametersSet(varianceFeeParams?: null): VarianceFeeParametersSetEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getPricingParams(overrides?: CallOverrides): Promise<BigNumber>;
        getTimeWeightedFee(expiry: PromiseOrValue<BigNumberish>, pointA: PromiseOrValue<BigNumberish>, pointB: PromiseOrValue<BigNumberish>, coefficient: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTradeLimitParams(overrides?: CallOverrides): Promise<BigNumber>;
        getTradeResult(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, newBaseIv: PromiseOrValue<BigNumberish>, newSkew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVarianceFee(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, skew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVarianceFeeParams(overrides?: CallOverrides): Promise<BigNumber>;
        getVegaUtilFee(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, overrides?: CallOverrides): Promise<BigNumber>;
        init(_optionMarket: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        ivImpactForTrade(trade: OptionMarket.TradeParametersStruct, boardBaseIv: PromiseOrValue<BigNumberish>, strikeSkew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pricingParams(overrides?: CallOverrides): Promise<BigNumber>;
        setPricingParams(_pricingParams: OptionMarketPricer.PricingParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTradeLimitParams(_tradeLimitParams: OptionMarketPricer.TradeLimitParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVarianceFeeParams(_varianceFeeParams: OptionMarketPricer.VarianceFeeParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tradeLimitParams(overrides?: CallOverrides): Promise<BigNumber>;
        updateCacheAndGetTradeResult(strike: OptionMarket.StrikeStruct, trade: OptionMarket.TradeParametersStruct, boardBaseIv: PromiseOrValue<BigNumberish>, boardExpiry: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        varianceFeeParams(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getPricingParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTimeWeightedFee(expiry: PromiseOrValue<BigNumberish>, pointA: PromiseOrValue<BigNumberish>, pointB: PromiseOrValue<BigNumberish>, coefficient: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeLimitParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTradeResult(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, newBaseIv: PromiseOrValue<BigNumberish>, newSkew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVarianceFee(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, skew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVarianceFeeParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVegaUtilFee(trade: OptionMarket.TradeParametersStruct, pricing: OptionGreekCache.TradePricingStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(_optionMarket: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        ivImpactForTrade(trade: OptionMarket.TradeParametersStruct, boardBaseIv: PromiseOrValue<BigNumberish>, strikeSkew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pricingParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPricingParams(_pricingParams: OptionMarketPricer.PricingParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTradeLimitParams(_tradeLimitParams: OptionMarketPricer.TradeLimitParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVarianceFeeParams(_varianceFeeParams: OptionMarketPricer.VarianceFeeParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tradeLimitParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateCacheAndGetTradeResult(strike: OptionMarket.StrikeStruct, trade: OptionMarket.TradeParametersStruct, boardBaseIv: PromiseOrValue<BigNumberish>, boardExpiry: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        varianceFeeParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
