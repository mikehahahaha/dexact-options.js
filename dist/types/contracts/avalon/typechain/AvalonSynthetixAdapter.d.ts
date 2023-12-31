import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
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
export interface AvalonSynthetixAdapterInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "addressResolver()": FunctionFragment;
        "baseKey(address)": FunctionFragment;
        "delegateApprovals()": FunctionFragment;
        "estimateExchangeToExactBase((uint256,bytes32,bytes32,uint256,uint256),uint256)": FunctionFragment;
        "estimateExchangeToExactQuote((uint256,bytes32,bytes32,uint256,uint256),uint256)": FunctionFragment;
        "exchangeFromExactBase(address,uint256)": FunctionFragment;
        "exchangeFromExactQuote(address,uint256)": FunctionFragment;
        "exchangeRates()": FunctionFragment;
        "exchangeToExactBase((uint256,bytes32,bytes32,uint256,uint256),address,uint256)": FunctionFragment;
        "exchangeToExactBaseWithLimit((uint256,bytes32,bytes32,uint256,uint256),address,uint256,uint256)": FunctionFragment;
        "exchangeToExactQuote((uint256,bytes32,bytes32,uint256,uint256),address,uint256)": FunctionFragment;
        "exchangeToExactQuoteWithLimit((uint256,bytes32,bytes32,uint256,uint256),address,uint256,uint256)": FunctionFragment;
        "exchanger()": FunctionFragment;
        "getExchangeParams(address)": FunctionFragment;
        "getSpotPrice(bytes32)": FunctionFragment;
        "getSpotPriceForMarket(address)": FunctionFragment;
        "initialize()": FunctionFragment;
        "isGlobalPaused()": FunctionFragment;
        "isMarketPaused(address)": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "owner()": FunctionFragment;
        "quoteKey(address)": FunctionFragment;
        "requireNotGlobalPaused(address)": FunctionFragment;
        "rewardAddress(address)": FunctionFragment;
        "setAddressResolver(address)": FunctionFragment;
        "setGlobalPaused(bool)": FunctionFragment;
        "setGlobalsForContract(address,bytes32,bytes32,address,bytes32)": FunctionFragment;
        "setMarketPaused(address,bool)": FunctionFragment;
        "synthetix()": FunctionFragment;
        "trackingCode(address)": FunctionFragment;
        "updateSynthetixAddresses()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "addressResolver" | "baseKey" | "delegateApprovals" | "estimateExchangeToExactBase" | "estimateExchangeToExactQuote" | "exchangeFromExactBase" | "exchangeFromExactQuote" | "exchangeRates" | "exchangeToExactBase" | "exchangeToExactBaseWithLimit" | "exchangeToExactQuote" | "exchangeToExactQuoteWithLimit" | "exchanger" | "getExchangeParams" | "getSpotPrice" | "getSpotPriceForMarket" | "initialize" | "isGlobalPaused" | "isMarketPaused" | "nominateNewOwner" | "nominatedOwner" | "owner" | "quoteKey" | "requireNotGlobalPaused" | "rewardAddress" | "setAddressResolver" | "setGlobalPaused" | "setGlobalsForContract" | "setMarketPaused" | "synthetix" | "trackingCode" | "updateSynthetixAddresses"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "addressResolver", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseKey", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "delegateApprovals", values?: undefined): string;
    encodeFunctionData(functionFragment: "estimateExchangeToExactBase", values: [
        SynthetixAdapter.ExchangeParamsStruct,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "estimateExchangeToExactQuote", values: [
        SynthetixAdapter.ExchangeParamsStruct,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "exchangeFromExactBase", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "exchangeFromExactQuote", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "exchangeRates", values?: undefined): string;
    encodeFunctionData(functionFragment: "exchangeToExactBase", values: [
        SynthetixAdapter.ExchangeParamsStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "exchangeToExactBaseWithLimit", values: [
        SynthetixAdapter.ExchangeParamsStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "exchangeToExactQuote", values: [
        SynthetixAdapter.ExchangeParamsStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "exchangeToExactQuoteWithLimit", values: [
        SynthetixAdapter.ExchangeParamsStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "exchanger", values?: undefined): string;
    encodeFunctionData(functionFragment: "getExchangeParams", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getSpotPrice", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getSpotPriceForMarket", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initialize", values?: undefined): string;
    encodeFunctionData(functionFragment: "isGlobalPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isMarketPaused", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteKey", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "requireNotGlobalPaused", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "rewardAddress", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setAddressResolver", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setGlobalPaused", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setGlobalsForContract", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setMarketPaused", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "synthetix", values?: undefined): string;
    encodeFunctionData(functionFragment: "trackingCode", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateSynthetixAddresses", values?: undefined): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addressResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateApprovals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateExchangeToExactBase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "estimateExchangeToExactQuote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeFromExactBase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeFromExactQuote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactBase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactBaseWithLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactQuote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchangeToExactQuoteWithLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchanger", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExchangeParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSpotPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSpotPriceForMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGlobalPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isMarketPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "requireNotGlobalPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddressResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGlobalPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGlobalsForContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMarketPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "synthetix", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trackingCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSynthetixAddresses", data: BytesLike): Result;
    events: {
        "AddressResolverSet(address)": EventFragment;
        "BaseSwappedForQuote(address,address,uint256,uint256)": EventFragment;
        "GlobalPausedSet(bool)": EventFragment;
        "GlobalsSetForContract(address,bytes32,bytes32,address,bytes32)": EventFragment;
        "MarketPausedSet(address,bool)": EventFragment;
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
        "QuoteSwappedForBase(address,address,uint256,uint256)": EventFragment;
        "SynthetixAddressesUpdated(address,address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressResolverSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BaseSwappedForQuote"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GlobalPausedSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GlobalsSetForContract"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketPausedSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuoteSwappedForBase"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SynthetixAddressesUpdated"): EventFragment;
}
export interface AddressResolverSetEventObject {
    addressResolver: string;
}
export type AddressResolverSetEvent = TypedEvent<[
    string
], AddressResolverSetEventObject>;
export type AddressResolverSetEventFilter = TypedEventFilter<AddressResolverSetEvent>;
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
export interface GlobalPausedSetEventObject {
    isPaused: boolean;
}
export type GlobalPausedSetEvent = TypedEvent<[
    boolean
], GlobalPausedSetEventObject>;
export type GlobalPausedSetEventFilter = TypedEventFilter<GlobalPausedSetEvent>;
export interface GlobalsSetForContractEventObject {
    market: string;
    quoteKey: string;
    baseKey: string;
    rewardAddress: string;
    trackingCode: string;
}
export type GlobalsSetForContractEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string
], GlobalsSetForContractEventObject>;
export type GlobalsSetForContractEventFilter = TypedEventFilter<GlobalsSetForContractEvent>;
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
export interface SynthetixAddressesUpdatedEventObject {
    synthetix: string;
    exchanger: string;
    exchangeRates: string;
    delegateApprovals: string;
}
export type SynthetixAddressesUpdatedEvent = TypedEvent<[
    string,
    string,
    string,
    string
], SynthetixAddressesUpdatedEventObject>;
export type SynthetixAddressesUpdatedEventFilter = TypedEventFilter<SynthetixAddressesUpdatedEvent>;
export interface AvalonSynthetixAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AvalonSynthetixAdapterInterface;
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
        baseKey(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        delegateApprovals(overrides?: CallOverrides): Promise<[string]>;
        estimateExchangeToExactBase(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            quoteNeeded: BigNumber;
        }>;
        estimateExchangeToExactQuote(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            baseNeeded: BigNumber;
        }>;
        exchangeFromExactBase(optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeFromExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeRates(overrides?: CallOverrides): Promise<[string]>;
        exchangeToExactBase(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeToExactBaseWithLimit(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, quoteLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeToExactQuote(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchangeToExactQuoteWithLimit(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, baseLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exchanger(overrides?: CallOverrides): Promise<[string]>;
        getExchangeParams(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            SynthetixAdapter.ExchangeParamsStructOutput
        ] & {
            exchangeParams: SynthetixAdapter.ExchangeParamsStructOutput;
        }>;
        getSpotPrice(to: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSpotPriceForMarket(_contractAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            spotPrice: BigNumber;
        }>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isGlobalPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        quoteKey(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[void]>;
        rewardAddress(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        setAddressResolver(_addressResolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGlobalPaused(_isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGlobalsForContract(_contractAddress: PromiseOrValue<string>, _quoteKey: PromiseOrValue<BytesLike>, _baseKey: PromiseOrValue<BytesLike>, _rewardAddress: PromiseOrValue<string>, _trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMarketPaused(_contractAddress: PromiseOrValue<string>, _isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        synthetix(overrides?: CallOverrides): Promise<[string]>;
        trackingCode(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        updateSynthetixAddresses(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addressResolver(overrides?: CallOverrides): Promise<string>;
    baseKey(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    delegateApprovals(overrides?: CallOverrides): Promise<string>;
    estimateExchangeToExactBase(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    estimateExchangeToExactQuote(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    exchangeFromExactBase(optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeFromExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeRates(overrides?: CallOverrides): Promise<string>;
    exchangeToExactBase(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeToExactBaseWithLimit(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, quoteLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeToExactQuote(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchangeToExactQuoteWithLimit(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, baseLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exchanger(overrides?: CallOverrides): Promise<string>;
    getExchangeParams(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<SynthetixAdapter.ExchangeParamsStructOutput>;
    getSpotPrice(to: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getSpotPriceForMarket(_contractAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    initialize(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isGlobalPaused(overrides?: CallOverrides): Promise<boolean>;
    isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    quoteKey(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    rewardAddress(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    setAddressResolver(_addressResolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGlobalPaused(_isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGlobalsForContract(_contractAddress: PromiseOrValue<string>, _quoteKey: PromiseOrValue<BytesLike>, _baseKey: PromiseOrValue<BytesLike>, _rewardAddress: PromiseOrValue<string>, _trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMarketPaused(_contractAddress: PromiseOrValue<string>, _isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    synthetix(overrides?: CallOverrides): Promise<string>;
    trackingCode(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    updateSynthetixAddresses(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        addressResolver(overrides?: CallOverrides): Promise<string>;
        baseKey(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        delegateApprovals(overrides?: CallOverrides): Promise<string>;
        estimateExchangeToExactBase(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateExchangeToExactQuote(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeFromExactBase(optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeFromExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeRates(overrides?: CallOverrides): Promise<string>;
        exchangeToExactBase(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            quoteSpent: BigNumber;
            baseReceived: BigNumber;
        }>;
        exchangeToExactBaseWithLimit(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, quoteLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            quoteSpent: BigNumber;
            baseReceived: BigNumber;
        }>;
        exchangeToExactQuote(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            baseSpent: BigNumber;
            quoteReceived: BigNumber;
        }>;
        exchangeToExactQuoteWithLimit(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, baseLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            baseSpent: BigNumber;
            quoteReceived: BigNumber;
        }>;
        exchanger(overrides?: CallOverrides): Promise<string>;
        getExchangeParams(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<SynthetixAdapter.ExchangeParamsStructOutput>;
        getSpotPrice(to: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getSpotPriceForMarket(_contractAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: CallOverrides): Promise<void>;
        isGlobalPaused(overrides?: CallOverrides): Promise<boolean>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        quoteKey(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        rewardAddress(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        setAddressResolver(_addressResolver: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setGlobalPaused(_isPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setGlobalsForContract(_contractAddress: PromiseOrValue<string>, _quoteKey: PromiseOrValue<BytesLike>, _baseKey: PromiseOrValue<BytesLike>, _rewardAddress: PromiseOrValue<string>, _trackingCode: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setMarketPaused(_contractAddress: PromiseOrValue<string>, _isPaused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        synthetix(overrides?: CallOverrides): Promise<string>;
        trackingCode(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        updateSynthetixAddresses(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddressResolverSet(address)"(addressResolver?: null): AddressResolverSetEventFilter;
        AddressResolverSet(addressResolver?: null): AddressResolverSetEventFilter;
        "BaseSwappedForQuote(address,address,uint256,uint256)"(marketAddress?: PromiseOrValue<string> | null, exchanger?: PromiseOrValue<string> | null, baseSwapped?: null, quoteReceived?: null): BaseSwappedForQuoteEventFilter;
        BaseSwappedForQuote(marketAddress?: PromiseOrValue<string> | null, exchanger?: PromiseOrValue<string> | null, baseSwapped?: null, quoteReceived?: null): BaseSwappedForQuoteEventFilter;
        "GlobalPausedSet(bool)"(isPaused?: null): GlobalPausedSetEventFilter;
        GlobalPausedSet(isPaused?: null): GlobalPausedSetEventFilter;
        "GlobalsSetForContract(address,bytes32,bytes32,address,bytes32)"(market?: PromiseOrValue<string> | null, quoteKey?: null, baseKey?: null, rewardAddress?: null, trackingCode?: null): GlobalsSetForContractEventFilter;
        GlobalsSetForContract(market?: PromiseOrValue<string> | null, quoteKey?: null, baseKey?: null, rewardAddress?: null, trackingCode?: null): GlobalsSetForContractEventFilter;
        "MarketPausedSet(address,bool)"(contractAddress?: null, isPaused?: null): MarketPausedSetEventFilter;
        MarketPausedSet(contractAddress?: null, isPaused?: null): MarketPausedSetEventFilter;
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
        "QuoteSwappedForBase(address,address,uint256,uint256)"(marketAddress?: PromiseOrValue<string> | null, exchanger?: PromiseOrValue<string> | null, quoteSwapped?: null, baseReceived?: null): QuoteSwappedForBaseEventFilter;
        QuoteSwappedForBase(marketAddress?: PromiseOrValue<string> | null, exchanger?: PromiseOrValue<string> | null, quoteSwapped?: null, baseReceived?: null): QuoteSwappedForBaseEventFilter;
        "SynthetixAddressesUpdated(address,address,address,address)"(synthetix?: null, exchanger?: null, exchangeRates?: null, delegateApprovals?: null): SynthetixAddressesUpdatedEventFilter;
        SynthetixAddressesUpdated(synthetix?: null, exchanger?: null, exchangeRates?: null, delegateApprovals?: null): SynthetixAddressesUpdatedEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addressResolver(overrides?: CallOverrides): Promise<BigNumber>;
        baseKey(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        delegateApprovals(overrides?: CallOverrides): Promise<BigNumber>;
        estimateExchangeToExactBase(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        estimateExchangeToExactQuote(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        exchangeFromExactBase(optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeFromExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeRates(overrides?: CallOverrides): Promise<BigNumber>;
        exchangeToExactBase(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeToExactBaseWithLimit(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, quoteLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeToExactQuote(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchangeToExactQuoteWithLimit(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, baseLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exchanger(overrides?: CallOverrides): Promise<BigNumber>;
        getExchangeParams(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getSpotPrice(to: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getSpotPriceForMarket(_contractAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isGlobalPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        quoteKey(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        rewardAddress(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setAddressResolver(_addressResolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGlobalPaused(_isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGlobalsForContract(_contractAddress: PromiseOrValue<string>, _quoteKey: PromiseOrValue<BytesLike>, _baseKey: PromiseOrValue<BytesLike>, _rewardAddress: PromiseOrValue<string>, _trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMarketPaused(_contractAddress: PromiseOrValue<string>, _isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        synthetix(overrides?: CallOverrides): Promise<BigNumber>;
        trackingCode(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        updateSynthetixAddresses(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addressResolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseKey(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegateApprovals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateExchangeToExactBase(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, amountBase: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        estimateExchangeToExactQuote(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, amountQuote: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchangeFromExactBase(optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeFromExactQuote(optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeRates(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchangeToExactBase(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeToExactBaseWithLimit(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountBase: PromiseOrValue<BigNumberish>, quoteLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeToExactQuote(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchangeToExactQuoteWithLimit(exchangeParams: SynthetixAdapter.ExchangeParamsStruct, optionMarket: PromiseOrValue<string>, amountQuote: PromiseOrValue<BigNumberish>, baseLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exchanger(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExchangeParams(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSpotPrice(to: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSpotPriceForMarket(_contractAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isGlobalPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isMarketPaused(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteKey(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        requireNotGlobalPaused(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardAddress(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAddressResolver(_addressResolver: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGlobalPaused(_isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGlobalsForContract(_contractAddress: PromiseOrValue<string>, _quoteKey: PromiseOrValue<BytesLike>, _baseKey: PromiseOrValue<BytesLike>, _rewardAddress: PromiseOrValue<string>, _trackingCode: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMarketPaused(_contractAddress: PromiseOrValue<string>, _isPaused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        synthetix(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        trackingCode(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateSynthetixAddresses(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
