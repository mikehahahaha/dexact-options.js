import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace GMXAdapter {
    type MarketPricingParamsStruct = {
        staticSwapFeeEstimate: PromiseOrValue<BigNumberish>;
        gmxUsageThreshold: PromiseOrValue<BigNumberish>;
        priceVarianceCBPercent: PromiseOrValue<BigNumberish>;
        chainlinkStalenessCheck: PromiseOrValue<BigNumberish>;
    };
    type MarketPricingParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        staticSwapFeeEstimate: BigNumber;
        gmxUsageThreshold: BigNumber;
        priceVarianceCBPercent: BigNumber;
        chainlinkStalenessCheck: BigNumber;
    };
    type GMXAdapterStateStruct = {
        chainlinkFeed: PromiseOrValue<string>;
        marketPricingParams: GMXAdapter.MarketPricingParamsStruct;
        rateAndCarry: PromiseOrValue<BigNumberish>;
        clPrice: PromiseOrValue<BigNumberish>;
        gmxMinPrice: PromiseOrValue<BigNumberish>;
        gmxMaxPrice: PromiseOrValue<BigNumberish>;
    };
    type GMXAdapterStateStructOutput = [
        string,
        GMXAdapter.MarketPricingParamsStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        chainlinkFeed: string;
        marketPricingParams: GMXAdapter.MarketPricingParamsStructOutput;
        rateAndCarry: BigNumber;
        clPrice: BigNumber;
        gmxMinPrice: BigNumber;
        gmxMaxPrice: BigNumber;
    };
}
export interface NewportGMXAdapterInterface extends utils.Interface {
    functions: {
        "GMX_PRICE_PRECISION()": FunctionFragment;
        "acceptOwnership()": FunctionFragment;
        "chainlinkFeeds(address)": FunctionFragment;
        "estimateExchangeToExactBase(address,uint256)": FunctionFragment;
        "estimateExchangeToExactQuote(address,uint256)": FunctionFragment;
        "exchangeFromExactBase(address,uint256)": FunctionFragment;
        "exchangeFromExactQuote(address,uint256)": FunctionFragment;
        "exchangeToExactBase(address,uint256)": FunctionFragment;
        "exchangeToExactBaseWithLimit(address,uint256,uint256)": FunctionFragment;
        "exchangeToExactQuote(address,uint256)": FunctionFragment;
        "exchangeToExactQuoteWithLimit(address,uint256,uint256)": FunctionFragment;
        "getAdapterState(address)": FunctionFragment;
        "getSettlementPriceForMarket(address,uint256)": FunctionFragment;
        "getSpotPriceForMarket(address,uint8)": FunctionFragment;
        "initialize()": FunctionFragment;
        "isGlobalPaused()": FunctionFragment;
        "isMarketPaused(address)": FunctionFragment;
        "marketPricingParams(address)": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "owner()": FunctionFragment;
        "rateAndCarry(address)": FunctionFragment;
        "requireNotGlobalPaused(address)": FunctionFragment;
        "requireNotMarketPaused(address)": FunctionFragment;
        "setChainlinkFeed(address,address)": FunctionFragment;
        "setGlobalPaused(bool)": FunctionFragment;
        "setMarketPaused(address,bool)": FunctionFragment;
        "setMarketPricingParams(address,(uint256,uint256,uint256,uint256))": FunctionFragment;
        "setRiskFreeRate(address,int256)": FunctionFragment;
        "setVaultContract(address)": FunctionFragment;
        "vault()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "GMX_PRICE_PRECISION" | "acceptOwnership" | "chainlinkFeeds" | "estimateExchangeToExactBase" | "estimateExchangeToExactQuote" | "exchangeFromExactBase" | "exchangeFromExactQuote" | "exchangeToExactBase" | "exchangeToExactBaseWithLimit" | "exchangeToExactQuote" | "exchangeToExactQuoteWithLimit" | "getAdapterState" | "getSettlementPriceForMarket" | "getSpotPriceForMarket" | "initialize" | "isGlobalPaused" | "isMarketPaused" | "marketPricingParams" | "nominateNewOwner" | "nominatedOwner" | "owner" | "rateAndCarry" | "requireNotGlobalPaused" | "requireNotMarketPaused" | "setChainlinkFeed" | "setGlobalPaused" | "setMarketPaused" | "setMarketPricingParams" | "setRiskFreeRate" | "setVaultContract" | "vault"): FunctionFragment;
    encodeFunctionData(functionFragment: "GMX_PRICE_PRECISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "chainlinkFeeds", values: [PromiseOrValue<string>]): string;
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
    encodeFunctionData(functionFragment: "getSettlementPriceForMarket", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSpotPriceForMarket", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "isGlobalPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isMarketPaused", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "marketPricingParams", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "rateAndCarry", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "requireNotGlobalPaused", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "requireNotMarketPaused", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setChainlinkFeed", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGlobalPaused", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setMarketPaused", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setMarketPricingParams", values: [PromiseOrValue<string>, GMXAdapter.MarketPricingParamsStruct]): string;
    encodeFunctionData(functionFragment: "setRiskFreeRate", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setVaultContract", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "vault", values?: undefined): string;
    decodeFunctionResult(functionFragment: "GMX_PRICE_PRECISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainlinkFeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateExchangeToExactBase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateExchangeToExactQuote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeFromExactBase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeFromExactQuote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactBase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactBaseWithLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactQuote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactQuoteWithLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAdapterState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSettlementPriceForMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSpotPriceForMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGlobalPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMarketPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketPricingParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rateAndCarry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireNotGlobalPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireNotMarketPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChainlinkFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGlobalPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMarketPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMarketPricingParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRiskFreeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVaultContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
    events: {
        "BaseSwappedForQuote(address,address,uint256,uint256)": EventFragment;
        "ChainlinkAggregatorUpdated(address,address)": EventFragment;
        "GMXVaultAddressUpdated(address)": EventFragment;
        "GlobalPausedSet(bool)": EventFragment;
        "MarketPausedSet(address,bool)": EventFragment;
        "MarketPricingParamsUpdated(address,tuple)": EventFragment;
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
        "QuoteSwappedForBase(address,address,uint256,uint256)": EventFragment;
        "RiskFreeRateUpdated(address,int256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BaseSwappedForQuote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChainlinkAggregatorUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GMXVaultAddressUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GlobalPausedSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketPausedSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketPricingParamsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuoteSwappedForBase"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RiskFreeRateUpdated"): EventFragment;
}
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
export interface ChainlinkAggregatorUpdatedEventObject {
    asset: string;
    aggregator: string;
}
export type ChainlinkAggregatorUpdatedEvent = TypedEvent<[
    string,
    string
], ChainlinkAggregatorUpdatedEventObject>;
export type ChainlinkAggregatorUpdatedEventFilter = TypedEventFilter<ChainlinkAggregatorUpdatedEvent>;
export interface GMXVaultAddressUpdatedEventObject {
    vault: string;
}
export type GMXVaultAddressUpdatedEvent = TypedEvent<[
    string
], GMXVaultAddressUpdatedEventObject>;
export type GMXVaultAddressUpdatedEventFilter = TypedEventFilter<GMXVaultAddressUpdatedEvent>;
export interface GlobalPausedSetEventObject {
    isPaused: boolean;
}
export type GlobalPausedSetEvent = TypedEvent<[
    boolean
], GlobalPausedSetEventObject>;
export type GlobalPausedSetEventFilter = TypedEventFilter<GlobalPausedSetEvent>;
export interface MarketPausedSetEventObject {
    contractAddress: string;
    isPaused: boolean;
}
export type MarketPausedSetEvent = TypedEvent<[
    string,
    boolean
], MarketPausedSetEventObject>;
export type MarketPausedSetEventFilter = TypedEventFilter<MarketPausedSetEvent>;
export interface MarketPricingParamsUpdatedEventObject {
    optionMarket: string;
    marketPricingParams: GMXAdapter.MarketPricingParamsStructOutput;
}
export type MarketPricingParamsUpdatedEvent = TypedEvent<[
    string,
    GMXAdapter.MarketPricingParamsStructOutput
], MarketPricingParamsUpdatedEventObject>;
export type MarketPricingParamsUpdatedEventFilter = TypedEventFilter<MarketPricingParamsUpdatedEvent>;
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
    newRate: BigNumber;
}
export type RiskFreeRateUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], RiskFreeRateUpdatedEventObject>;
export type RiskFreeRateUpdatedEventFilter = TypedEventFilter<RiskFreeRateUpdatedEvent>;
export interface NewportGMXAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NewportGMXAdapterInterface;
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
        GMX_PRICE_PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        chainlinkFeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        estimateExchangeToExactBase(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            quoteNeeded: BigNumber;
        }>;
        estimateExchangeToExactQuote(_optionMarket: PromiseOrValue<string>, _amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            baseNeeded: BigNumber;
        }>;
        exchangeFromExactBase(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeFromExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeToExactBase(optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeToExactBaseWithLimit(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, _quoteLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeToExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeToExactQuoteWithLimit(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, baseLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAdapterState(_optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[GMXAdapter.GMXAdapterStateStructOutput]>;
        getSettlementPriceForMarket(optionMarket: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
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
        marketPricingParams(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            staticSwapFeeEstimate: BigNumber;
            gmxUsageThreshold: BigNumber;
            priceVarianceCBPercent: BigNumber;
            chainlinkStalenessCheck: BigNumber;
        }>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        rateAndCarry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[void]>;
        requireNotMarketPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[void]>;
        setChainlinkFeed(_asset: PromiseOrValue<string>, _assetPriceFeed: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMarketPricingParams(_optionMarket: PromiseOrValue<string>, _marketPricingParams: GMXAdapter.MarketPricingParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRiskFreeRate(_optionMarket: PromiseOrValue<string>, _rate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVaultContract(_vault: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        vault(overrides?: CallOverrides): Promise<[string]>;
    };
    GMX_PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    chainlinkFeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    estimateExchangeToExactBase(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    estimateExchangeToExactQuote(_optionMarket: PromiseOrValue<string>, _amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    exchangeFromExactBase(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeFromExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeToExactBase(optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeToExactBaseWithLimit(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, _quoteLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeToExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeToExactQuoteWithLimit(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, baseLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAdapterState(_optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<GMXAdapter.GMXAdapterStateStructOutput>;
    getSettlementPriceForMarket(optionMarket: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    initialize(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isGlobalPaused(overrides?: CallOverrides): Promise<boolean>;
    isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    marketPricingParams(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        staticSwapFeeEstimate: BigNumber;
        gmxUsageThreshold: BigNumber;
        priceVarianceCBPercent: BigNumber;
        chainlinkStalenessCheck: BigNumber;
    }>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    rateAndCarry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    requireNotMarketPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    setChainlinkFeed(_asset: PromiseOrValue<string>, _assetPriceFeed: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMarketPricingParams(_optionMarket: PromiseOrValue<string>, _marketPricingParams: GMXAdapter.MarketPricingParamsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRiskFreeRate(_optionMarket: PromiseOrValue<string>, _rate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVaultContract(_vault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    vault(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        GMX_PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        chainlinkFeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        estimateExchangeToExactBase(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateExchangeToExactQuote(_optionMarket: PromiseOrValue<string>, _amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeFromExactBase(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeFromExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeToExactBase(optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            quoteSpent: BigNumber;
            baseReceived: BigNumber;
        }>;
        exchangeToExactBaseWithLimit(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, _quoteLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            quoteSpent: BigNumber;
            baseReceived: BigNumber;
        }>;
        exchangeToExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            baseSpent: BigNumber;
            quoteReceived: BigNumber;
        }>;
        exchangeToExactQuoteWithLimit(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, baseLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            quoteSpent: BigNumber;
            baseReceived: BigNumber;
        }>;
        getAdapterState(_optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<GMXAdapter.GMXAdapterStateStructOutput>;
        getSettlementPriceForMarket(optionMarket: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: CallOverrides): Promise<void>;
        isGlobalPaused(overrides?: CallOverrides): Promise<boolean>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        marketPricingParams(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            staticSwapFeeEstimate: BigNumber;
            gmxUsageThreshold: BigNumber;
            priceVarianceCBPercent: BigNumber;
            chainlinkStalenessCheck: BigNumber;
        }>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        rateAndCarry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        requireNotMarketPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setChainlinkFeed(_asset: PromiseOrValue<string>, _assetPriceFeed: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setMarketPricingParams(_optionMarket: PromiseOrValue<string>, _marketPricingParams: GMXAdapter.MarketPricingParamsStruct, overrides?: CallOverrides): Promise<void>;
        setRiskFreeRate(_optionMarket: PromiseOrValue<string>, _rate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setVaultContract(_vault: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        vault(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "BaseSwappedForQuote(address,address,uint256,uint256)"(marketAddress?: PromiseOrValue<string> | null, exchanger?: PromiseOrValue<string> | null, baseSwapped?: null, quoteReceived?: null): BaseSwappedForQuoteEventFilter;
        BaseSwappedForQuote(marketAddress?: PromiseOrValue<string> | null, exchanger?: PromiseOrValue<string> | null, baseSwapped?: null, quoteReceived?: null): BaseSwappedForQuoteEventFilter;
        "ChainlinkAggregatorUpdated(address,address)"(asset?: PromiseOrValue<string> | null, aggregator?: PromiseOrValue<string> | null): ChainlinkAggregatorUpdatedEventFilter;
        ChainlinkAggregatorUpdated(asset?: PromiseOrValue<string> | null, aggregator?: PromiseOrValue<string> | null): ChainlinkAggregatorUpdatedEventFilter;
        "GMXVaultAddressUpdated(address)"(vault?: null): GMXVaultAddressUpdatedEventFilter;
        GMXVaultAddressUpdated(vault?: null): GMXVaultAddressUpdatedEventFilter;
        "GlobalPausedSet(bool)"(isPaused?: null): GlobalPausedSetEventFilter;
        GlobalPausedSet(isPaused?: null): GlobalPausedSetEventFilter;
        "MarketPausedSet(address,bool)"(contractAddress?: PromiseOrValue<string> | null, isPaused?: null): MarketPausedSetEventFilter;
        MarketPausedSet(contractAddress?: PromiseOrValue<string> | null, isPaused?: null): MarketPausedSetEventFilter;
        "MarketPricingParamsUpdated(address,tuple)"(optionMarket?: PromiseOrValue<string> | null, marketPricingParams?: null): MarketPricingParamsUpdatedEventFilter;
        MarketPricingParamsUpdated(optionMarket?: PromiseOrValue<string> | null, marketPricingParams?: null): MarketPricingParamsUpdatedEventFilter;
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
        "QuoteSwappedForBase(address,address,uint256,uint256)"(marketAddress?: PromiseOrValue<string> | null, exchanger?: PromiseOrValue<string> | null, quoteSwapped?: null, baseReceived?: null): QuoteSwappedForBaseEventFilter;
        QuoteSwappedForBase(marketAddress?: PromiseOrValue<string> | null, exchanger?: PromiseOrValue<string> | null, quoteSwapped?: null, baseReceived?: null): QuoteSwappedForBaseEventFilter;
        "RiskFreeRateUpdated(address,int256)"(optionMarket?: PromiseOrValue<string> | null, newRate?: null): RiskFreeRateUpdatedEventFilter;
        RiskFreeRateUpdated(optionMarket?: PromiseOrValue<string> | null, newRate?: null): RiskFreeRateUpdatedEventFilter;
    };
    estimateGas: {
        GMX_PRICE_PRECISION(overrides?: CallOverrides): Promise<BigNumber>;
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        chainlinkFeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateExchangeToExactBase(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateExchangeToExactQuote(_optionMarket: PromiseOrValue<string>, _amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeFromExactBase(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeFromExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeToExactBase(optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeToExactBaseWithLimit(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, _quoteLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeToExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeToExactQuoteWithLimit(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, baseLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAdapterState(_optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSettlementPriceForMarket(optionMarket: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isGlobalPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        marketPricingParams(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        rateAndCarry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        requireNotMarketPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setChainlinkFeed(_asset: PromiseOrValue<string>, _assetPriceFeed: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMarketPricingParams(_optionMarket: PromiseOrValue<string>, _marketPricingParams: GMXAdapter.MarketPricingParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRiskFreeRate(_optionMarket: PromiseOrValue<string>, _rate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVaultContract(_vault: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        vault(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        GMX_PRICE_PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        chainlinkFeeds(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateExchangeToExactBase(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateExchangeToExactQuote(_optionMarket: PromiseOrValue<string>, _amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchangeFromExactBase(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeFromExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeToExactBase(optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeToExactBaseWithLimit(_optionMarket: PromiseOrValue<string>, _amountBase: PromiseOrValue<BigNumberish>, _quoteLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeToExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeToExactQuoteWithLimit(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, baseLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAdapterState(_optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSettlementPriceForMarket(optionMarket: PromiseOrValue<string>, arg1: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isGlobalPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketPricingParams(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rateAndCarry(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireNotMarketPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setChainlinkFeed(_asset: PromiseOrValue<string>, _assetPriceFeed: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMarketPricingParams(_optionMarket: PromiseOrValue<string>, _marketPricingParams: GMXAdapter.MarketPricingParamsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRiskFreeRate(_optionMarket: PromiseOrValue<string>, _rate: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVaultContract(_vault: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
