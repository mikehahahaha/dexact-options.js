import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace SNXPerpV2Adapter {
    type UniswapPoolInfoStruct = {
        pool: PromiseOrValue<string>;
        feeTier: PromiseOrValue<BigNumberish>;
    };
    type UniswapPoolInfoStructOutput = [string, number] & {
        pool: string;
        feeTier: number;
    };
    type MarketAdapterConfigurationStruct = {
        staticEstimationDiscount: PromiseOrValue<BigNumberish>;
        snxPerpV2MarketAddress: PromiseOrValue<string>;
        uniswapInfo: SNXPerpV2Adapter.UniswapPoolInfoStruct;
    };
    type MarketAdapterConfigurationStructOutput = [
        BigNumber,
        string,
        SNXPerpV2Adapter.UniswapPoolInfoStructOutput
    ] & {
        staticEstimationDiscount: BigNumber;
        snxPerpV2MarketAddress: string;
        uniswapInfo: SNXPerpV2Adapter.UniswapPoolInfoStructOutput;
    };
    type MarketAdapterStateStruct = {
        config: SNXPerpV2Adapter.MarketAdapterConfigurationStruct;
        snxPrice: PromiseOrValue<BigNumberish>;
        riskFreeRate: PromiseOrValue<BigNumberish>;
    };
    type MarketAdapterStateStructOutput = [
        SNXPerpV2Adapter.MarketAdapterConfigurationStructOutput,
        BigNumber,
        BigNumber
    ] & {
        config: SNXPerpV2Adapter.MarketAdapterConfigurationStructOutput;
        snxPrice: BigNumber;
        riskFreeRate: BigNumber;
    };
}
export interface NewportSNXPerpV2AdapterInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "addressResolver()": FunctionFragment;
        "approveRouter(address)": FunctionFragment;
        "estimateExchangeToExactBase(address,uint256)": FunctionFragment;
        "estimateExchangeToExactQuote(address,uint256)": FunctionFragment;
        "exchangeFromExactBase(address,uint256)": FunctionFragment;
        "exchangeFromExactQuote(address,uint256)": FunctionFragment;
        "exchangeToExactBase(address,uint256)": FunctionFragment;
        "exchangeToExactBaseWithLimit(address,uint256,uint256)": FunctionFragment;
        "exchangeToExactQuote(address,uint256)": FunctionFragment;
        "exchangeToExactQuoteWithLimit(address,uint256,uint256)": FunctionFragment;
        "getAdapterState(address)": FunctionFragment;
        "getPrices(address)": FunctionFragment;
        "getSettlementPriceForMarket(address,uint256)": FunctionFragment;
        "getSpotPriceForMarket(address,uint8)": FunctionFragment;
        "initialize()": FunctionFragment;
        "isGlobalPaused()": FunctionFragment;
        "isMarketPaused(address)": FunctionFragment;
        "marketConfigurations(address)": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "owner()": FunctionFragment;
        "rateAndCarry(address)": FunctionFragment;
        "requireNotGlobalPaused(address)": FunctionFragment;
        "requireNotMarketPaused(address)": FunctionFragment;
        "setAddressResolver(address)": FunctionFragment;
        "setGlobalPaused(bool)": FunctionFragment;
        "setMarketAdapterConfiguration(address,uint256,address,address,uint24)": FunctionFragment;
        "setMarketPaused(address,bool)": FunctionFragment;
        "setRiskFreeRate(address,int256)": FunctionFragment;
        "setUniSwapDeviation(uint256)": FunctionFragment;
        "setUniswapRouter(address)": FunctionFragment;
        "swapRouter()": FunctionFragment;
        "systemStatus()": FunctionFragment;
        "uniDeviation()": FunctionFragment;
        "updateSynthetixAddresses()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "addressResolver" | "approveRouter" | "estimateExchangeToExactBase" | "estimateExchangeToExactQuote" | "exchangeFromExactBase" | "exchangeFromExactQuote" | "exchangeToExactBase" | "exchangeToExactBaseWithLimit" | "exchangeToExactQuote" | "exchangeToExactQuoteWithLimit" | "getAdapterState" | "getPrices" | "getSettlementPriceForMarket" | "getSpotPriceForMarket" | "initialize" | "isGlobalPaused" | "isMarketPaused" | "marketConfigurations" | "nominateNewOwner" | "nominatedOwner" | "owner" | "rateAndCarry" | "requireNotGlobalPaused" | "requireNotMarketPaused" | "setAddressResolver" | "setGlobalPaused" | "setMarketAdapterConfiguration" | "setMarketPaused" | "setRiskFreeRate" | "setUniSwapDeviation" | "setUniswapRouter" | "swapRouter" | "systemStatus" | "uniDeviation" | "updateSynthetixAddresses"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "addressResolver", values?: undefined): string;
    encodeFunctionData(functionFragment: "approveRouter", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "estimateExchangeToExactBase", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "estimateExchangeToExactQuote", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "exchangeFromExactBase", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "exchangeFromExactQuote", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "exchangeToExactBase", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "exchangeToExactBaseWithLimit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "exchangeToExactQuote", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "exchangeToExactQuoteWithLimit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAdapterState", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPrices", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getSettlementPriceForMarket", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSpotPriceForMarket", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "isGlobalPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isMarketPaused", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "marketConfigurations", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "rateAndCarry", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "requireNotGlobalPaused", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "requireNotMarketPaused", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAddressResolver", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGlobalPaused", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setMarketAdapterConfiguration", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setMarketPaused", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setRiskFreeRate", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setUniSwapDeviation", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setUniswapRouter", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "swapRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemStatus", values?: undefined): string;
    encodeFunctionData(functionFragment: "uniDeviation", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateSynthetixAddresses", values?: undefined): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addressResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateExchangeToExactBase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateExchangeToExactQuote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeFromExactBase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeFromExactQuote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactBase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactBaseWithLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactQuote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactQuoteWithLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAdapterState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSettlementPriceForMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSpotPriceForMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGlobalPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMarketPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketConfigurations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rateAndCarry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireNotGlobalPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireNotMarketPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddressResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGlobalPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMarketAdapterConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMarketPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRiskFreeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUniSwapDeviation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUniswapRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniDeviation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSynthetixAddresses", data: BytesLike): Result;
    events: {
        "AddressResolverUpdated(address)": EventFragment;
        "BaseSwappedForQuote(address,address,uint256,uint256)": EventFragment;
        "ExchangeToExactBaseWithLimit(address,uint256,uint256)": EventFragment;
        "ExchangedFromExactBase(address,uint256,uint256)": EventFragment;
        "GlobalPausedSet(bool)": EventFragment;
        "MarketAdapterConfigurationUpdated(address,uint256,address,address,uint256)": EventFragment;
        "MarketPausedSet(address,bool)": EventFragment;
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
        "QuoteSwappedForBase(address,address,uint256,uint256)": EventFragment;
        "RiskFreeRateUpdated(address,int256)": EventFragment;
        "RouterApproved(address,address)": EventFragment;
        "SynthetixSystemStatusUpdated(address)": EventFragment;
        "UniDeviationUpdated(uint256)": EventFragment;
        "UniswapRouterUpdated(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressResolverUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BaseSwappedForQuote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExchangeToExactBaseWithLimit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExchangedFromExactBase"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GlobalPausedSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketAdapterConfigurationUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketPausedSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuoteSwappedForBase"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RiskFreeRateUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RouterApproved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SynthetixSystemStatusUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UniDeviationUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UniswapRouterUpdated"): EventFragment;
}
export interface AddressResolverUpdatedEventObject {
    addressResolver: string;
}
export type AddressResolverUpdatedEvent = TypedEvent<[
    string
], AddressResolverUpdatedEventObject>;
export type AddressResolverUpdatedEventFilter = TypedEventFilter<AddressResolverUpdatedEvent>;
export interface BaseSwappedForQuoteEventObject {
    marketAddress: string;
    exchanger: string;
    baseSwapped: BigNumber;
    quoteReceived: BigNumber;
}
export type BaseSwappedForQuoteEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], BaseSwappedForQuoteEventObject>;
export type BaseSwappedForQuoteEventFilter = TypedEventFilter<BaseSwappedForQuoteEvent>;
export interface ExchangeToExactBaseWithLimitEventObject {
    optionMarket: string;
    quoteSpentD18: BigNumber;
    baseAssetinD18: BigNumber;
}
export type ExchangeToExactBaseWithLimitEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], ExchangeToExactBaseWithLimitEventObject>;
export type ExchangeToExactBaseWithLimitEventFilter = TypedEventFilter<ExchangeToExactBaseWithLimitEvent>;
export interface ExchangedFromExactBaseEventObject {
    optionMarket: string;
    quoteSpentD18: BigNumber;
    baseAssetinD18: BigNumber;
}
export type ExchangedFromExactBaseEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], ExchangedFromExactBaseEventObject>;
export type ExchangedFromExactBaseEventFilter = TypedEventFilter<ExchangedFromExactBaseEvent>;
export interface GlobalPausedSetEventObject {
    isPaused: boolean;
}
export type GlobalPausedSetEvent = TypedEvent<[
    boolean
], GlobalPausedSetEventObject>;
export type GlobalPausedSetEventFilter = TypedEventFilter<GlobalPausedSetEvent>;
export interface MarketAdapterConfigurationUpdatedEventObject {
    optionMarket: string;
    staticEstimationDiscount: BigNumber;
    snxPerpV2Market: string;
    uniswapPool: string;
    feeTier: BigNumber;
}
export type MarketAdapterConfigurationUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    string,
    BigNumber
], MarketAdapterConfigurationUpdatedEventObject>;
export type MarketAdapterConfigurationUpdatedEventFilter = TypedEventFilter<MarketAdapterConfigurationUpdatedEvent>;
export interface MarketPausedSetEventObject {
    contractAddress: string;
    isPaused: boolean;
}
export type MarketPausedSetEvent = TypedEvent<[
    string,
    boolean
], MarketPausedSetEventObject>;
export type MarketPausedSetEventFilter = TypedEventFilter<MarketPausedSetEvent>;
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
export interface QuoteSwappedForBaseEventObject {
    marketAddress: string;
    exchanger: string;
    quoteSwapped: BigNumber;
    baseReceived: BigNumber;
}
export type QuoteSwappedForBaseEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], QuoteSwappedForBaseEventObject>;
export type QuoteSwappedForBaseEventFilter = TypedEventFilter<QuoteSwappedForBaseEvent>;
export interface RiskFreeRateUpdatedEventObject {
    optionMarket: string;
    riskFreeRate: BigNumber;
}
export type RiskFreeRateUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], RiskFreeRateUpdatedEventObject>;
export type RiskFreeRateUpdatedEventFilter = TypedEventFilter<RiskFreeRateUpdatedEvent>;
export interface RouterApprovedEventObject {
    asset: string;
    uniswapRouter: string;
}
export type RouterApprovedEvent = TypedEvent<[
    string,
    string
], RouterApprovedEventObject>;
export type RouterApprovedEventFilter = TypedEventFilter<RouterApprovedEvent>;
export interface SynthetixSystemStatusUpdatedEventObject {
    synthetixSystemStatus: string;
}
export type SynthetixSystemStatusUpdatedEvent = TypedEvent<[
    string
], SynthetixSystemStatusUpdatedEventObject>;
export type SynthetixSystemStatusUpdatedEventFilter = TypedEventFilter<SynthetixSystemStatusUpdatedEvent>;
export interface UniDeviationUpdatedEventObject {
    deviation: BigNumber;
}
export type UniDeviationUpdatedEvent = TypedEvent<[
    BigNumber
], UniDeviationUpdatedEventObject>;
export type UniDeviationUpdatedEventFilter = TypedEventFilter<UniDeviationUpdatedEvent>;
export interface UniswapRouterUpdatedEventObject {
    uniswapRouter: string;
}
export type UniswapRouterUpdatedEvent = TypedEvent<[
    string
], UniswapRouterUpdatedEventObject>;
export type UniswapRouterUpdatedEventFilter = TypedEventFilter<UniswapRouterUpdatedEvent>;
export interface NewportSNXPerpV2Adapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NewportSNXPerpV2AdapterInterface;
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
        addressResolver(overrides?: CallOverrides): Promise<[string]>;
        approveRouter(asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        estimateExchangeToExactBase(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            quoteNeededD18: BigNumber;
        }>;
        estimateExchangeToExactQuote(_optionMarket: PromiseOrValue<string>, _amountQuoteD18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            baseNeededD18: BigNumber;
        }>;
        exchangeFromExactBase(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeFromExactQuote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeToExactBase(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeToExactBaseWithLimit(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, _quoteLimitD18: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeToExactQuote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeToExactQuoteWithLimit(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAdapterState(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[SNXPerpV2Adapter.MarketAdapterStateStructOutput]>;
        getPrices(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSettlementPriceForMarket(_optionMarket: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            spotPrice: BigNumber;
        }>;
        getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            spotPrice: BigNumber;
        }>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isGlobalPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        marketConfigurations(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            SNXPerpV2Adapter.UniswapPoolInfoStructOutput
        ] & {
            staticEstimationDiscount: BigNumber;
            snxPerpV2MarketAddress: string;
            uniswapInfo: SNXPerpV2Adapter.UniswapPoolInfoStructOutput;
        }>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        rateAndCarry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        requireNotGlobalPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[void]>;
        requireNotMarketPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[void]>;
        setAddressResolver(_addressResolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMarketAdapterConfiguration(_optionMarket: PromiseOrValue<string>, _staticEstimationDiscount: PromiseOrValue<BigNumberish>, _snxPerpV2MarketAddress: PromiseOrValue<string>, _uniswapPool: PromiseOrValue<string>, _uniswapFeeTier: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRiskFreeRate(_optionMarket: PromiseOrValue<string>, _rate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUniSwapDeviation(_deviation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUniswapRouter(_swapRouter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapRouter(overrides?: CallOverrides): Promise<[string]>;
        systemStatus(overrides?: CallOverrides): Promise<[string]>;
        uniDeviation(overrides?: CallOverrides): Promise<[BigNumber]>;
        updateSynthetixAddresses(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addressResolver(overrides?: CallOverrides): Promise<string>;
    approveRouter(asset: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    estimateExchangeToExactBase(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    estimateExchangeToExactQuote(_optionMarket: PromiseOrValue<string>, _amountQuoteD18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    exchangeFromExactBase(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeFromExactQuote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeToExactBase(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeToExactBaseWithLimit(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, _quoteLimitD18: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeToExactQuote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeToExactQuoteWithLimit(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAdapterState(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<SNXPerpV2Adapter.MarketAdapterStateStructOutput>;
    getPrices(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getSettlementPriceForMarket(_optionMarket: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    initialize(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isGlobalPaused(overrides?: CallOverrides): Promise<boolean>;
    isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    marketConfigurations(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        SNXPerpV2Adapter.UniswapPoolInfoStructOutput
    ] & {
        staticEstimationDiscount: BigNumber;
        snxPerpV2MarketAddress: string;
        uniswapInfo: SNXPerpV2Adapter.UniswapPoolInfoStructOutput;
    }>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    rateAndCarry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    requireNotGlobalPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    requireNotMarketPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    setAddressResolver(_addressResolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMarketAdapterConfiguration(_optionMarket: PromiseOrValue<string>, _staticEstimationDiscount: PromiseOrValue<BigNumberish>, _snxPerpV2MarketAddress: PromiseOrValue<string>, _uniswapPool: PromiseOrValue<string>, _uniswapFeeTier: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRiskFreeRate(_optionMarket: PromiseOrValue<string>, _rate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUniSwapDeviation(_deviation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUniswapRouter(_swapRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapRouter(overrides?: CallOverrides): Promise<string>;
    systemStatus(overrides?: CallOverrides): Promise<string>;
    uniDeviation(overrides?: CallOverrides): Promise<BigNumber>;
    updateSynthetixAddresses(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        addressResolver(overrides?: CallOverrides): Promise<string>;
        approveRouter(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        estimateExchangeToExactBase(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateExchangeToExactQuote(_optionMarket: PromiseOrValue<string>, _amountQuoteD18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeFromExactBase(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeFromExactQuote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeToExactBase(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        exchangeToExactBaseWithLimit(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, _quoteLimitD18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            quoteSpentD18: BigNumber;
            baseReceivedD18: BigNumber;
        }>;
        exchangeToExactQuote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        exchangeToExactQuoteWithLimit(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        getAdapterState(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<SNXPerpV2Adapter.MarketAdapterStateStructOutput>;
        getPrices(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSettlementPriceForMarket(_optionMarket: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: CallOverrides): Promise<void>;
        isGlobalPaused(overrides?: CallOverrides): Promise<boolean>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        marketConfigurations(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            SNXPerpV2Adapter.UniswapPoolInfoStructOutput
        ] & {
            staticEstimationDiscount: BigNumber;
            snxPerpV2MarketAddress: string;
            uniswapInfo: SNXPerpV2Adapter.UniswapPoolInfoStructOutput;
        }>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        rateAndCarry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        requireNotGlobalPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        requireNotMarketPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setAddressResolver(_addressResolver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setMarketAdapterConfiguration(_optionMarket: PromiseOrValue<string>, _staticEstimationDiscount: PromiseOrValue<BigNumberish>, _snxPerpV2MarketAddress: PromiseOrValue<string>, _uniswapPool: PromiseOrValue<string>, _uniswapFeeTier: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setRiskFreeRate(_optionMarket: PromiseOrValue<string>, _rate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setUniSwapDeviation(_deviation: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setUniswapRouter(_swapRouter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        swapRouter(overrides?: CallOverrides): Promise<string>;
        systemStatus(overrides?: CallOverrides): Promise<string>;
        uniDeviation(overrides?: CallOverrides): Promise<BigNumber>;
        updateSynthetixAddresses(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddressResolverUpdated(address)"(addressResolver?: null): AddressResolverUpdatedEventFilter;
        AddressResolverUpdated(addressResolver?: null): AddressResolverUpdatedEventFilter;
        "BaseSwappedForQuote(address,address,uint256,uint256)"(marketAddress?: PromiseOrValue<string> | null, exchanger?: PromiseOrValue<string> | null, baseSwapped?: null, quoteReceived?: null): BaseSwappedForQuoteEventFilter;
        BaseSwappedForQuote(marketAddress?: PromiseOrValue<string> | null, exchanger?: PromiseOrValue<string> | null, baseSwapped?: null, quoteReceived?: null): BaseSwappedForQuoteEventFilter;
        "ExchangeToExactBaseWithLimit(address,uint256,uint256)"(optionMarket?: PromiseOrValue<string> | null, quoteSpentD18?: null, baseAssetinD18?: null): ExchangeToExactBaseWithLimitEventFilter;
        ExchangeToExactBaseWithLimit(optionMarket?: PromiseOrValue<string> | null, quoteSpentD18?: null, baseAssetinD18?: null): ExchangeToExactBaseWithLimitEventFilter;
        "ExchangedFromExactBase(address,uint256,uint256)"(optionMarket?: PromiseOrValue<string> | null, quoteSpentD18?: null, baseAssetinD18?: null): ExchangedFromExactBaseEventFilter;
        ExchangedFromExactBase(optionMarket?: PromiseOrValue<string> | null, quoteSpentD18?: null, baseAssetinD18?: null): ExchangedFromExactBaseEventFilter;
        "GlobalPausedSet(bool)"(isPaused?: null): GlobalPausedSetEventFilter;
        GlobalPausedSet(isPaused?: null): GlobalPausedSetEventFilter;
        "MarketAdapterConfigurationUpdated(address,uint256,address,address,uint256)"(optionMarket?: PromiseOrValue<string> | null, staticEstimationDiscount?: null, snxPerpV2Market?: null, uniswapPool?: null, feeTier?: null): MarketAdapterConfigurationUpdatedEventFilter;
        MarketAdapterConfigurationUpdated(optionMarket?: PromiseOrValue<string> | null, staticEstimationDiscount?: null, snxPerpV2Market?: null, uniswapPool?: null, feeTier?: null): MarketAdapterConfigurationUpdatedEventFilter;
        "MarketPausedSet(address,bool)"(contractAddress?: PromiseOrValue<string> | null, isPaused?: null): MarketPausedSetEventFilter;
        MarketPausedSet(contractAddress?: PromiseOrValue<string> | null, isPaused?: null): MarketPausedSetEventFilter;
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
        "QuoteSwappedForBase(address,address,uint256,uint256)"(marketAddress?: PromiseOrValue<string> | null, exchanger?: PromiseOrValue<string> | null, quoteSwapped?: null, baseReceived?: null): QuoteSwappedForBaseEventFilter;
        QuoteSwappedForBase(marketAddress?: PromiseOrValue<string> | null, exchanger?: PromiseOrValue<string> | null, quoteSwapped?: null, baseReceived?: null): QuoteSwappedForBaseEventFilter;
        "RiskFreeRateUpdated(address,int256)"(optionMarket?: PromiseOrValue<string> | null, riskFreeRate?: null): RiskFreeRateUpdatedEventFilter;
        RiskFreeRateUpdated(optionMarket?: PromiseOrValue<string> | null, riskFreeRate?: null): RiskFreeRateUpdatedEventFilter;
        "RouterApproved(address,address)"(asset?: PromiseOrValue<string> | null, uniswapRouter?: null): RouterApprovedEventFilter;
        RouterApproved(asset?: PromiseOrValue<string> | null, uniswapRouter?: null): RouterApprovedEventFilter;
        "SynthetixSystemStatusUpdated(address)"(synthetixSystemStatus?: null): SynthetixSystemStatusUpdatedEventFilter;
        SynthetixSystemStatusUpdated(synthetixSystemStatus?: null): SynthetixSystemStatusUpdatedEventFilter;
        "UniDeviationUpdated(uint256)"(deviation?: null): UniDeviationUpdatedEventFilter;
        UniDeviationUpdated(deviation?: null): UniDeviationUpdatedEventFilter;
        "UniswapRouterUpdated(address)"(uniswapRouter?: null): UniswapRouterUpdatedEventFilter;
        UniswapRouterUpdated(uniswapRouter?: null): UniswapRouterUpdatedEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addressResolver(overrides?: CallOverrides): Promise<BigNumber>;
        approveRouter(asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        estimateExchangeToExactBase(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateExchangeToExactQuote(_optionMarket: PromiseOrValue<string>, _amountQuoteD18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeFromExactBase(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeFromExactQuote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeToExactBase(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeToExactBaseWithLimit(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, _quoteLimitD18: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeToExactQuote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeToExactQuoteWithLimit(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAdapterState(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPrices(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSettlementPriceForMarket(_optionMarket: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isGlobalPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        marketConfigurations(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        rateAndCarry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        requireNotGlobalPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        requireNotMarketPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setAddressResolver(_addressResolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMarketAdapterConfiguration(_optionMarket: PromiseOrValue<string>, _staticEstimationDiscount: PromiseOrValue<BigNumberish>, _snxPerpV2MarketAddress: PromiseOrValue<string>, _uniswapPool: PromiseOrValue<string>, _uniswapFeeTier: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRiskFreeRate(_optionMarket: PromiseOrValue<string>, _rate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUniSwapDeviation(_deviation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUniswapRouter(_swapRouter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapRouter(overrides?: CallOverrides): Promise<BigNumber>;
        systemStatus(overrides?: CallOverrides): Promise<BigNumber>;
        uniDeviation(overrides?: CallOverrides): Promise<BigNumber>;
        updateSynthetixAddresses(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addressResolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approveRouter(asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        estimateExchangeToExactBase(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateExchangeToExactQuote(_optionMarket: PromiseOrValue<string>, _amountQuoteD18: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchangeFromExactBase(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeFromExactQuote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeToExactBase(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeToExactBaseWithLimit(_optionMarket: PromiseOrValue<string>, _amountBaseD18: PromiseOrValue<BigNumberish>, _quoteLimitD18: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeToExactQuote(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeToExactQuoteWithLimit(arg0: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, arg2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAdapterState(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPrices(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSettlementPriceForMarket(_optionMarket: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isGlobalPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketConfigurations(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rateAndCarry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireNotGlobalPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireNotMarketPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAddressResolver(_addressResolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMarketAdapterConfiguration(_optionMarket: PromiseOrValue<string>, _staticEstimationDiscount: PromiseOrValue<BigNumberish>, _snxPerpV2MarketAddress: PromiseOrValue<string>, _uniswapPool: PromiseOrValue<string>, _uniswapFeeTier: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRiskFreeRate(_optionMarket: PromiseOrValue<string>, _rate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUniSwapDeviation(_deviation: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUniswapRouter(_swapRouter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        systemStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uniDeviation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateSynthetixAddresses(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
