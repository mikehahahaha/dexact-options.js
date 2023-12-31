import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface NewportExchangeAdapterInterface extends utils.Interface {
    functions: {
        "chainlinkFeeds(address)": FunctionFragment;
        "estimateExchangeToExactBase(address,uint256)": FunctionFragment;
        "estimateExchangeToExactQuote(address,uint256)": FunctionFragment;
        "exchangeFromExactBase(address,uint256)": FunctionFragment;
        "exchangeFromExactQuote(address,uint256)": FunctionFragment;
        "exchangeToExactBase(address,uint256)": FunctionFragment;
        "exchangeToExactBaseWithLimit(address,uint256,uint256)": FunctionFragment;
        "exchangeToExactQuote(address,uint256)": FunctionFragment;
        "exchangeToExactQuoteWithLimit(address,uint256,uint256)": FunctionFragment;
        "getSettlementPriceForMarket(address,uint256)": FunctionFragment;
        "getSpotPriceForMarket(address,uint8)": FunctionFragment;
        "isGlobalPaused()": FunctionFragment;
        "isMarketPaused(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "requireNotGlobalPaused(address)": FunctionFragment;
        "setChainlinkFeed(address,address)": FunctionFragment;
        "setGlobalPaused(bool)": FunctionFragment;
        "setMarketPaused(address,bool)": FunctionFragment;
        "setMinReturnPercent(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "chainlinkFeeds" | "estimateExchangeToExactBase" | "estimateExchangeToExactQuote" | "exchangeFromExactBase" | "exchangeFromExactQuote" | "exchangeToExactBase" | "exchangeToExactBaseWithLimit" | "exchangeToExactQuote" | "exchangeToExactQuoteWithLimit" | "getSettlementPriceForMarket" | "getSpotPriceForMarket" | "isGlobalPaused" | "isMarketPaused" | "owner" | "requireNotGlobalPaused" | "setChainlinkFeed" | "setGlobalPaused" | "setMarketPaused" | "setMinReturnPercent"): FunctionFragment;
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
    encodeFunctionData(functionFragment: "getSettlementPriceForMarket", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSpotPriceForMarket", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isGlobalPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isMarketPaused", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "requireNotGlobalPaused", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setChainlinkFeed", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGlobalPaused", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setMarketPaused", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setMinReturnPercent", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "chainlinkFeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateExchangeToExactBase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateExchangeToExactQuote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeFromExactBase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeFromExactQuote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactBase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactBaseWithLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactQuote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactQuoteWithLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSettlementPriceForMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSpotPriceForMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGlobalPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMarketPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireNotGlobalPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChainlinkFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGlobalPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMarketPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinReturnPercent", data: BytesLike): Result;
    events: {};
}
export interface NewportExchangeAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NewportExchangeAdapterInterface;
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
        getSettlementPriceForMarket(optionMarket: PromiseOrValue<string>, expiry: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            spotPrice: BigNumber;
        }>;
        getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            spotPrice: BigNumber;
        }>;
        isGlobalPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[void]>;
        setChainlinkFeed(_asset: PromiseOrValue<string>, _assetPriceFeed: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinReturnPercent(_minReturnPercent: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
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
    getSettlementPriceForMarket(optionMarket: PromiseOrValue<string>, expiry: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    isGlobalPaused(overrides?: CallOverrides): Promise<boolean>;
    isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    setChainlinkFeed(_asset: PromiseOrValue<string>, _assetPriceFeed: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinReturnPercent(_minReturnPercent: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
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
        getSettlementPriceForMarket(optionMarket: PromiseOrValue<string>, expiry: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isGlobalPaused(overrides?: CallOverrides): Promise<boolean>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setChainlinkFeed(_asset: PromiseOrValue<string>, _assetPriceFeed: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setMinReturnPercent(_minReturnPercent: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
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
        getSettlementPriceForMarket(optionMarket: PromiseOrValue<string>, expiry: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isGlobalPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setChainlinkFeed(_asset: PromiseOrValue<string>, _assetPriceFeed: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinReturnPercent(_minReturnPercent: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
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
        getSettlementPriceForMarket(optionMarket: PromiseOrValue<string>, expiry: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSpotPriceForMarket(optionMarket: PromiseOrValue<string>, pricing: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isGlobalPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setChainlinkFeed(_asset: PromiseOrValue<string>, _assetPriceFeed: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGlobalPaused(isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMarketPaused(optionMarket: PromiseOrValue<string>, isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinReturnPercent(_minReturnPercent: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
