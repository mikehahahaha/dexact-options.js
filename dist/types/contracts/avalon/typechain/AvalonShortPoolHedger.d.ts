import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
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
export interface AvalonShortPoolHedgerInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "collateralShort()": FunctionFragment;
        "getCappedExpectedHedge()": FunctionFragment;
        "getCurrentHedgedNetDelta()": FunctionFragment;
        "getHedgingLiquidity(uint256)": FunctionFragment;
        "getPoolHedgerParams()": FunctionFragment;
        "getPoolHedgerSettings()": FunctionFragment;
        "getShortPosition()": FunctionFragment;
        "hedgeDelta()": FunctionFragment;
        "init(address,address,address,address,address,address)": FunctionFragment;
        "lastInteraction()": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "openShortAccount()": FunctionFragment;
        "owner()": FunctionFragment;
        "resetInteractionDelay()": FunctionFragment;
        "setPoolHedgerParams((uint256,uint256))": FunctionFragment;
        "setShortBuffer(uint256)": FunctionFragment;
        "shortBuffer()": FunctionFragment;
        "shortId()": FunctionFragment;
        "updateCollateral()": FunctionFragment;
        "updateCollateralShortAddress()": FunctionFragment;
        "updateDelegateApproval()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "collateralShort" | "getCappedExpectedHedge" | "getCurrentHedgedNetDelta" | "getHedgingLiquidity" | "getPoolHedgerParams" | "getPoolHedgerSettings" | "getShortPosition" | "hedgeDelta" | "init" | "lastInteraction" | "nominateNewOwner" | "nominatedOwner" | "openShortAccount" | "owner" | "resetInteractionDelay" | "setPoolHedgerParams" | "setShortBuffer" | "shortBuffer" | "shortId" | "updateCollateral" | "updateCollateralShortAddress" | "updateDelegateApproval"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralShort", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCappedExpectedHedge", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentHedgedNetDelta", values?: undefined): string;
    encodeFunctionData(functionFragment: "getHedgingLiquidity", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPoolHedgerParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPoolHedgerSettings", values?: undefined): string;
    encodeFunctionData(functionFragment: "getShortPosition", values?: undefined): string;
    encodeFunctionData(functionFragment: "hedgeDelta", values?: undefined): string;
    encodeFunctionData(functionFragment: "init", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "lastInteraction", values?: undefined): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "openShortAccount", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "resetInteractionDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPoolHedgerParams", values: [PoolHedger.PoolHedgerParametersStruct]): string;
    encodeFunctionData(functionFragment: "setShortBuffer", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "shortBuffer", values?: undefined): string;
    encodeFunctionData(functionFragment: "shortId", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCollateral", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCollateralShortAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateDelegateApproval", values?: undefined): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralShort", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCappedExpectedHedge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentHedgedNetDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHedgingLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolHedgerParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPoolHedgerSettings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getShortPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hedgeDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastInteraction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openShortAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetInteractionDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPoolHedgerParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setShortBuffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shortBuffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shortId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCollateralShortAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDelegateApproval", data: BytesLike): Result;
    events: {
        "LongSetTo(uint256,uint256)": EventFragment;
        "OpenedShortAccount(uint256)": EventFragment;
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
        "PoolHedgerParametersSet(tuple)": EventFragment;
        "PositionUpdated(int256,int256,int256)": EventFragment;
        "QuoteReturnedToLP(uint256)": EventFragment;
        "ShortBufferSet(uint256)": EventFragment;
        "ShortCollateralSet(address)": EventFragment;
        "ShortSetTo(uint256,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LongSetTo"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OpenedShortAccount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PoolHedgerParametersSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PositionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuoteReturnedToLP"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ShortBufferSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ShortCollateralSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ShortSetTo"): EventFragment;
}
export interface LongSetToEventObject {
    oldAmount: BigNumber;
    newAmount: BigNumber;
}
export type LongSetToEvent = TypedEvent<[
    BigNumber,
    BigNumber
], LongSetToEventObject>;
export type LongSetToEventFilter = TypedEventFilter<LongSetToEvent>;
export interface OpenedShortAccountEventObject {
    shortId: BigNumber;
}
export type OpenedShortAccountEvent = TypedEvent<[
    BigNumber
], OpenedShortAccountEventObject>;
export type OpenedShortAccountEventFilter = TypedEventFilter<OpenedShortAccountEvent>;
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
export interface PositionUpdatedEventObject {
    oldNetDelta: BigNumber;
    currentNetDelta: BigNumber;
    expectedNetDelta: BigNumber;
}
export type PositionUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], PositionUpdatedEventObject>;
export type PositionUpdatedEventFilter = TypedEventFilter<PositionUpdatedEvent>;
export interface QuoteReturnedToLPEventObject {
    amountQuote: BigNumber;
}
export type QuoteReturnedToLPEvent = TypedEvent<[
    BigNumber
], QuoteReturnedToLPEventObject>;
export type QuoteReturnedToLPEventFilter = TypedEventFilter<QuoteReturnedToLPEvent>;
export interface ShortBufferSetEventObject {
    newShortBuffer: BigNumber;
}
export type ShortBufferSetEvent = TypedEvent<[
    BigNumber
], ShortBufferSetEventObject>;
export type ShortBufferSetEventFilter = TypedEventFilter<ShortBufferSetEvent>;
export interface ShortCollateralSetEventObject {
    collateralShort: string;
}
export type ShortCollateralSetEvent = TypedEvent<[
    string
], ShortCollateralSetEventObject>;
export type ShortCollateralSetEventFilter = TypedEventFilter<ShortCollateralSetEvent>;
export interface ShortSetToEventObject {
    oldShort: BigNumber;
    newShort: BigNumber;
    oldCollateral: BigNumber;
    newCollateral: BigNumber;
}
export type ShortSetToEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], ShortSetToEventObject>;
export type ShortSetToEventFilter = TypedEventFilter<ShortSetToEvent>;
export interface AvalonShortPoolHedger extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AvalonShortPoolHedgerInterface;
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
        collateralShort(overrides?: CallOverrides): Promise<[string]>;
        getCappedExpectedHedge(overrides?: CallOverrides): Promise<[BigNumber] & {
            cappedExpectedHedge: BigNumber;
        }>;
        getCurrentHedgedNetDelta(overrides?: CallOverrides): Promise<[BigNumber]>;
        getHedgingLiquidity(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            pendingDeltaLiquidity: BigNumber;
            usedDeltaLiquidity: BigNumber;
        }>;
        getPoolHedgerParams(overrides?: CallOverrides): Promise<[PoolHedger.PoolHedgerParametersStructOutput]>;
        getPoolHedgerSettings(overrides?: CallOverrides): Promise<[
            PoolHedger.PoolHedgerParametersStructOutput,
            BigNumber
        ] & {
            _poolHedgerParams: PoolHedger.PoolHedgerParametersStructOutput;
            _shortBuffer: BigNumber;
        }>;
        getShortPosition(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            shortBalance: BigNumber;
            collateral: BigNumber;
        }>;
        hedgeDelta(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        init(_synthetixAdapter: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _optionGreekCache: PromiseOrValue<string>, _liquidityPool: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lastInteraction(overrides?: CallOverrides): Promise<[BigNumber]>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        openShortAccount(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        resetInteractionDelay(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setPoolHedgerParams(_poolHedgerParams: PoolHedger.PoolHedgerParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setShortBuffer(_shortBuffer: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        shortBuffer(overrides?: CallOverrides): Promise<[BigNumber]>;
        shortId(overrides?: CallOverrides): Promise<[BigNumber]>;
        updateCollateral(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateCollateralShortAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateDelegateApproval(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collateralShort(overrides?: CallOverrides): Promise<string>;
    getCappedExpectedHedge(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentHedgedNetDelta(overrides?: CallOverrides): Promise<BigNumber>;
    getHedgingLiquidity(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        pendingDeltaLiquidity: BigNumber;
        usedDeltaLiquidity: BigNumber;
    }>;
    getPoolHedgerParams(overrides?: CallOverrides): Promise<PoolHedger.PoolHedgerParametersStructOutput>;
    getPoolHedgerSettings(overrides?: CallOverrides): Promise<[
        PoolHedger.PoolHedgerParametersStructOutput,
        BigNumber
    ] & {
        _poolHedgerParams: PoolHedger.PoolHedgerParametersStructOutput;
        _shortBuffer: BigNumber;
    }>;
    getShortPosition(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        shortBalance: BigNumber;
        collateral: BigNumber;
    }>;
    hedgeDelta(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    init(_synthetixAdapter: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _optionGreekCache: PromiseOrValue<string>, _liquidityPool: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lastInteraction(overrides?: CallOverrides): Promise<BigNumber>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    openShortAccount(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    resetInteractionDelay(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setPoolHedgerParams(_poolHedgerParams: PoolHedger.PoolHedgerParametersStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setShortBuffer(_shortBuffer: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    shortBuffer(overrides?: CallOverrides): Promise<BigNumber>;
    shortId(overrides?: CallOverrides): Promise<BigNumber>;
    updateCollateral(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateCollateralShortAddress(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateDelegateApproval(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        collateralShort(overrides?: CallOverrides): Promise<string>;
        getCappedExpectedHedge(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentHedgedNetDelta(overrides?: CallOverrides): Promise<BigNumber>;
        getHedgingLiquidity(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            pendingDeltaLiquidity: BigNumber;
            usedDeltaLiquidity: BigNumber;
        }>;
        getPoolHedgerParams(overrides?: CallOverrides): Promise<PoolHedger.PoolHedgerParametersStructOutput>;
        getPoolHedgerSettings(overrides?: CallOverrides): Promise<[
            PoolHedger.PoolHedgerParametersStructOutput,
            BigNumber
        ] & {
            _poolHedgerParams: PoolHedger.PoolHedgerParametersStructOutput;
            _shortBuffer: BigNumber;
        }>;
        getShortPosition(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            shortBalance: BigNumber;
            collateral: BigNumber;
        }>;
        hedgeDelta(overrides?: CallOverrides): Promise<void>;
        init(_synthetixAdapter: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _optionGreekCache: PromiseOrValue<string>, _liquidityPool: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        lastInteraction(overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        openShortAccount(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        resetInteractionDelay(overrides?: CallOverrides): Promise<void>;
        setPoolHedgerParams(_poolHedgerParams: PoolHedger.PoolHedgerParametersStruct, overrides?: CallOverrides): Promise<void>;
        setShortBuffer(_shortBuffer: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        shortBuffer(overrides?: CallOverrides): Promise<BigNumber>;
        shortId(overrides?: CallOverrides): Promise<BigNumber>;
        updateCollateral(overrides?: CallOverrides): Promise<void>;
        updateCollateralShortAddress(overrides?: CallOverrides): Promise<void>;
        updateDelegateApproval(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "LongSetTo(uint256,uint256)"(oldAmount?: null, newAmount?: null): LongSetToEventFilter;
        LongSetTo(oldAmount?: null, newAmount?: null): LongSetToEventFilter;
        "OpenedShortAccount(uint256)"(shortId?: null): OpenedShortAccountEventFilter;
        OpenedShortAccount(shortId?: null): OpenedShortAccountEventFilter;
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
        "PoolHedgerParametersSet(tuple)"(poolHedgerParams?: null): PoolHedgerParametersSetEventFilter;
        PoolHedgerParametersSet(poolHedgerParams?: null): PoolHedgerParametersSetEventFilter;
        "PositionUpdated(int256,int256,int256)"(oldNetDelta?: null, currentNetDelta?: null, expectedNetDelta?: null): PositionUpdatedEventFilter;
        PositionUpdated(oldNetDelta?: null, currentNetDelta?: null, expectedNetDelta?: null): PositionUpdatedEventFilter;
        "QuoteReturnedToLP(uint256)"(amountQuote?: null): QuoteReturnedToLPEventFilter;
        QuoteReturnedToLP(amountQuote?: null): QuoteReturnedToLPEventFilter;
        "ShortBufferSet(uint256)"(newShortBuffer?: null): ShortBufferSetEventFilter;
        ShortBufferSet(newShortBuffer?: null): ShortBufferSetEventFilter;
        "ShortCollateralSet(address)"(collateralShort?: null): ShortCollateralSetEventFilter;
        ShortCollateralSet(collateralShort?: null): ShortCollateralSetEventFilter;
        "ShortSetTo(uint256,uint256,uint256,uint256)"(oldShort?: null, newShort?: null, oldCollateral?: null, newCollateral?: null): ShortSetToEventFilter;
        ShortSetTo(oldShort?: null, newShort?: null, oldCollateral?: null, newCollateral?: null): ShortSetToEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collateralShort(overrides?: CallOverrides): Promise<BigNumber>;
        getCappedExpectedHedge(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentHedgedNetDelta(overrides?: CallOverrides): Promise<BigNumber>;
        getHedgingLiquidity(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPoolHedgerParams(overrides?: CallOverrides): Promise<BigNumber>;
        getPoolHedgerSettings(overrides?: CallOverrides): Promise<BigNumber>;
        getShortPosition(overrides?: CallOverrides): Promise<BigNumber>;
        hedgeDelta(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        init(_synthetixAdapter: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _optionGreekCache: PromiseOrValue<string>, _liquidityPool: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lastInteraction(overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        openShortAccount(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        resetInteractionDelay(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setPoolHedgerParams(_poolHedgerParams: PoolHedger.PoolHedgerParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setShortBuffer(_shortBuffer: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        shortBuffer(overrides?: CallOverrides): Promise<BigNumber>;
        shortId(overrides?: CallOverrides): Promise<BigNumber>;
        updateCollateral(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateCollateralShortAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateDelegateApproval(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collateralShort(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCappedExpectedHedge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentHedgedNetDelta(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHedgingLiquidity(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolHedgerParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPoolHedgerSettings(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getShortPosition(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hedgeDelta(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        init(_synthetixAdapter: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _optionGreekCache: PromiseOrValue<string>, _liquidityPool: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lastInteraction(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openShortAccount(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resetInteractionDelay(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setPoolHedgerParams(_poolHedgerParams: PoolHedger.PoolHedgerParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setShortBuffer(_shortBuffer: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        shortBuffer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        shortId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateCollateral(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateCollateralShortAddress(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateDelegateApproval(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
