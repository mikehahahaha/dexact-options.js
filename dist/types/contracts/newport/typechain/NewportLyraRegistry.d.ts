import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace LyraRegistry {
    type OptionMarketAddressesStruct = {
        liquidityPool: PromiseOrValue<string>;
        liquidityToken: PromiseOrValue<string>;
        greekCache: PromiseOrValue<string>;
        optionMarket: PromiseOrValue<string>;
        optionMarketPricer: PromiseOrValue<string>;
        optionToken: PromiseOrValue<string>;
        poolHedger: PromiseOrValue<string>;
        shortCollateral: PromiseOrValue<string>;
        gwavOracle: PromiseOrValue<string>;
        quoteAsset: PromiseOrValue<string>;
        baseAsset: PromiseOrValue<string>;
    };
    type OptionMarketAddressesStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        liquidityPool: string;
        liquidityToken: string;
        greekCache: string;
        optionMarket: string;
        optionMarketPricer: string;
        optionToken: string;
        poolHedger: string;
        shortCollateral: string;
        gwavOracle: string;
        quoteAsset: string;
        baseAsset: string;
    };
}
export interface NewportLyraRegistryInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "addMarket((address,address,address,address,address,address,address,address,address,address,address))": FunctionFragment;
        "getGlobalAddress(bytes32)": FunctionFragment;
        "getMarketAddresses(address)": FunctionFragment;
        "globalAddresses(bytes32)": FunctionFragment;
        "marketAddresses(address)": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "optionMarkets(uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "removeMarket(address)": FunctionFragment;
        "updateGlobalAddresses(bytes32[],address[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "addMarket" | "getGlobalAddress" | "getMarketAddresses" | "globalAddresses" | "marketAddresses" | "nominateNewOwner" | "nominatedOwner" | "optionMarkets" | "owner" | "removeMarket" | "updateGlobalAddresses"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "addMarket", values: [LyraRegistry.OptionMarketAddressesStruct]): string;
    encodeFunctionData(functionFragment: "getGlobalAddress", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getMarketAddresses", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "globalAddresses", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "marketAddresses", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "optionMarkets", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeMarket", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateGlobalAddresses", values: [PromiseOrValue<BytesLike>[], PromiseOrValue<string>[]]): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGlobalAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMarketAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "globalAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "optionMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGlobalAddresses", data: BytesLike): Result;
    events: {
        "GlobalAddressUpdated(bytes32,address)": EventFragment;
        "MarketRemoved(address)": EventFragment;
        "MarketUpdated(address,tuple)": EventFragment;
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "GlobalAddressUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
}
export interface GlobalAddressUpdatedEventObject {
    name: string;
    addr: string;
}
export type GlobalAddressUpdatedEvent = TypedEvent<[
    string,
    string
], GlobalAddressUpdatedEventObject>;
export type GlobalAddressUpdatedEventFilter = TypedEventFilter<GlobalAddressUpdatedEvent>;
export interface MarketRemovedEventObject {
    market: string;
}
export type MarketRemovedEvent = TypedEvent<[string], MarketRemovedEventObject>;
export type MarketRemovedEventFilter = TypedEventFilter<MarketRemovedEvent>;
export interface MarketUpdatedEventObject {
    optionMarket: string;
    market: LyraRegistry.OptionMarketAddressesStructOutput;
}
export type MarketUpdatedEvent = TypedEvent<[
    string,
    LyraRegistry.OptionMarketAddressesStructOutput
], MarketUpdatedEventObject>;
export type MarketUpdatedEventFilter = TypedEventFilter<MarketUpdatedEvent>;
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
export interface NewportLyraRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NewportLyraRegistryInterface;
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
        addMarket(newMarketAddresses: LyraRegistry.OptionMarketAddressesStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getGlobalAddress(contractName: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            globalContract: string;
        }>;
        getMarketAddresses(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[LyraRegistry.OptionMarketAddressesStructOutput]>;
        globalAddresses(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        marketAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ] & {
            liquidityPool: string;
            liquidityToken: string;
            greekCache: string;
            optionMarket: string;
            optionMarketPricer: string;
            optionToken: string;
            poolHedger: string;
            shortCollateral: string;
            gwavOracle: string;
            quoteAsset: string;
            baseAsset: string;
        }>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        optionMarkets(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        removeMarket(market: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateGlobalAddresses(names: PromiseOrValue<BytesLike>[], addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addMarket(newMarketAddresses: LyraRegistry.OptionMarketAddressesStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getGlobalAddress(contractName: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getMarketAddresses(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<LyraRegistry.OptionMarketAddressesStructOutput>;
    globalAddresses(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    marketAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        liquidityPool: string;
        liquidityToken: string;
        greekCache: string;
        optionMarket: string;
        optionMarketPricer: string;
        optionToken: string;
        poolHedger: string;
        shortCollateral: string;
        gwavOracle: string;
        quoteAsset: string;
        baseAsset: string;
    }>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    optionMarkets(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    removeMarket(market: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateGlobalAddresses(names: PromiseOrValue<BytesLike>[], addresses: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        addMarket(newMarketAddresses: LyraRegistry.OptionMarketAddressesStruct, overrides?: CallOverrides): Promise<void>;
        getGlobalAddress(contractName: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getMarketAddresses(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<LyraRegistry.OptionMarketAddressesStructOutput>;
        globalAddresses(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        marketAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ] & {
            liquidityPool: string;
            liquidityToken: string;
            greekCache: string;
            optionMarket: string;
            optionMarketPricer: string;
            optionToken: string;
            poolHedger: string;
            shortCollateral: string;
            gwavOracle: string;
            quoteAsset: string;
            baseAsset: string;
        }>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        optionMarkets(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        removeMarket(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateGlobalAddresses(names: PromiseOrValue<BytesLike>[], addresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "GlobalAddressUpdated(bytes32,address)"(name?: PromiseOrValue<BytesLike> | null, addr?: null): GlobalAddressUpdatedEventFilter;
        GlobalAddressUpdated(name?: PromiseOrValue<BytesLike> | null, addr?: null): GlobalAddressUpdatedEventFilter;
        "MarketRemoved(address)"(market?: PromiseOrValue<string> | null): MarketRemovedEventFilter;
        MarketRemoved(market?: PromiseOrValue<string> | null): MarketRemovedEventFilter;
        "MarketUpdated(address,tuple)"(optionMarket?: PromiseOrValue<string> | null, market?: null): MarketUpdatedEventFilter;
        MarketUpdated(optionMarket?: PromiseOrValue<string> | null, market?: null): MarketUpdatedEventFilter;
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addMarket(newMarketAddresses: LyraRegistry.OptionMarketAddressesStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getGlobalAddress(contractName: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getMarketAddresses(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        globalAddresses(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        marketAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        optionMarkets(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        removeMarket(market: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateGlobalAddresses(names: PromiseOrValue<BytesLike>[], addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addMarket(newMarketAddresses: LyraRegistry.OptionMarketAddressesStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getGlobalAddress(contractName: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMarketAddresses(optionMarket: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        globalAddresses(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        marketAddresses(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        optionMarkets(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeMarket(market: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateGlobalAddresses(names: PromiseOrValue<BytesLike>[], addresses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
