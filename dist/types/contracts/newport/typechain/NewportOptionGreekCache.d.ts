import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace OptionGreekCache {
    type NetGreeksStruct = {
        netDelta: PromiseOrValue<BigNumberish>;
        netStdVega: PromiseOrValue<BigNumberish>;
        netOptionValue: PromiseOrValue<BigNumberish>;
    };
    type NetGreeksStructOutput = [BigNumber, BigNumber, BigNumber] & {
        netDelta: BigNumber;
        netStdVega: BigNumber;
        netOptionValue: BigNumber;
    };
    type OptionBoardCacheStruct = {
        id: PromiseOrValue<BigNumberish>;
        strikes: PromiseOrValue<BigNumberish>[];
        expiry: PromiseOrValue<BigNumberish>;
        iv: PromiseOrValue<BigNumberish>;
        netGreeks: OptionGreekCache.NetGreeksStruct;
        updatedAt: PromiseOrValue<BigNumberish>;
        updatedAtPrice: PromiseOrValue<BigNumberish>;
        maxSkewVariance: PromiseOrValue<BigNumberish>;
        ivVariance: PromiseOrValue<BigNumberish>;
    };
    type OptionBoardCacheStructOutput = [
        BigNumber,
        BigNumber[],
        BigNumber,
        BigNumber,
        OptionGreekCache.NetGreeksStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        id: BigNumber;
        strikes: BigNumber[];
        expiry: BigNumber;
        iv: BigNumber;
        netGreeks: OptionGreekCache.NetGreeksStructOutput;
        updatedAt: BigNumber;
        updatedAtPrice: BigNumber;
        maxSkewVariance: BigNumber;
        ivVariance: BigNumber;
    };
    type ForceCloseParametersStruct = {
        ivGWAVPeriod: PromiseOrValue<BigNumberish>;
        skewGWAVPeriod: PromiseOrValue<BigNumberish>;
        shortVolShock: PromiseOrValue<BigNumberish>;
        shortPostCutoffVolShock: PromiseOrValue<BigNumberish>;
        longVolShock: PromiseOrValue<BigNumberish>;
        longPostCutoffVolShock: PromiseOrValue<BigNumberish>;
        liquidateVolShock: PromiseOrValue<BigNumberish>;
        liquidatePostCutoffVolShock: PromiseOrValue<BigNumberish>;
        shortSpotMin: PromiseOrValue<BigNumberish>;
        liquidateSpotMin: PromiseOrValue<BigNumberish>;
    };
    type ForceCloseParametersStructOutput = [
        BigNumber,
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
        ivGWAVPeriod: BigNumber;
        skewGWAVPeriod: BigNumber;
        shortVolShock: BigNumber;
        shortPostCutoffVolShock: BigNumber;
        longVolShock: BigNumber;
        longPostCutoffVolShock: BigNumber;
        liquidateVolShock: BigNumber;
        liquidatePostCutoffVolShock: BigNumber;
        shortSpotMin: BigNumber;
        liquidateSpotMin: BigNumber;
    };
    type GlobalCacheStruct = {
        minUpdatedAt: PromiseOrValue<BigNumberish>;
        minUpdatedAtPrice: PromiseOrValue<BigNumberish>;
        maxUpdatedAtPrice: PromiseOrValue<BigNumberish>;
        maxSkewVariance: PromiseOrValue<BigNumberish>;
        maxIvVariance: PromiseOrValue<BigNumberish>;
        netGreeks: OptionGreekCache.NetGreeksStruct;
    };
    type GlobalCacheStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        OptionGreekCache.NetGreeksStructOutput
    ] & {
        minUpdatedAt: BigNumber;
        minUpdatedAtPrice: BigNumber;
        maxUpdatedAtPrice: BigNumber;
        maxSkewVariance: BigNumber;
        maxIvVariance: BigNumber;
        netGreeks: OptionGreekCache.NetGreeksStructOutput;
    };
    type GreekCacheParametersStruct = {
        maxStrikesPerBoard: PromiseOrValue<BigNumberish>;
        acceptableSpotPricePercentMove: PromiseOrValue<BigNumberish>;
        staleUpdateDuration: PromiseOrValue<BigNumberish>;
        varianceIvGWAVPeriod: PromiseOrValue<BigNumberish>;
        varianceSkewGWAVPeriod: PromiseOrValue<BigNumberish>;
        optionValueIvGWAVPeriod: PromiseOrValue<BigNumberish>;
        optionValueSkewGWAVPeriod: PromiseOrValue<BigNumberish>;
        gwavSkewFloor: PromiseOrValue<BigNumberish>;
        gwavSkewCap: PromiseOrValue<BigNumberish>;
    };
    type GreekCacheParametersStructOutput = [
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
        maxStrikesPerBoard: BigNumber;
        acceptableSpotPricePercentMove: BigNumber;
        staleUpdateDuration: BigNumber;
        varianceIvGWAVPeriod: BigNumber;
        varianceSkewGWAVPeriod: BigNumber;
        optionValueIvGWAVPeriod: BigNumber;
        optionValueSkewGWAVPeriod: BigNumber;
        gwavSkewFloor: BigNumber;
        gwavSkewCap: BigNumber;
    };
    type MinCollateralParametersStruct = {
        minStaticQuoteCollateral: PromiseOrValue<BigNumberish>;
        minStaticBaseCollateral: PromiseOrValue<BigNumberish>;
        shockVolA: PromiseOrValue<BigNumberish>;
        shockVolPointA: PromiseOrValue<BigNumberish>;
        shockVolB: PromiseOrValue<BigNumberish>;
        shockVolPointB: PromiseOrValue<BigNumberish>;
        callSpotPriceShock: PromiseOrValue<BigNumberish>;
        putSpotPriceShock: PromiseOrValue<BigNumberish>;
    };
    type MinCollateralParametersStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        minStaticQuoteCollateral: BigNumber;
        minStaticBaseCollateral: BigNumber;
        shockVolA: BigNumber;
        shockVolPointA: BigNumber;
        shockVolB: BigNumber;
        shockVolPointB: BigNumber;
        callSpotPriceShock: BigNumber;
        putSpotPriceShock: BigNumber;
    };
    type StrikeGreeksStruct = {
        callDelta: PromiseOrValue<BigNumberish>;
        putDelta: PromiseOrValue<BigNumberish>;
        stdVega: PromiseOrValue<BigNumberish>;
        callPrice: PromiseOrValue<BigNumberish>;
        putPrice: PromiseOrValue<BigNumberish>;
    };
    type StrikeGreeksStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        callDelta: BigNumber;
        putDelta: BigNumber;
        stdVega: BigNumber;
        callPrice: BigNumber;
        putPrice: BigNumber;
    };
    type StrikeCacheStruct = {
        id: PromiseOrValue<BigNumberish>;
        boardId: PromiseOrValue<BigNumberish>;
        strikePrice: PromiseOrValue<BigNumberish>;
        skew: PromiseOrValue<BigNumberish>;
        greeks: OptionGreekCache.StrikeGreeksStruct;
        callExposure: PromiseOrValue<BigNumberish>;
        putExposure: PromiseOrValue<BigNumberish>;
        skewVariance: PromiseOrValue<BigNumberish>;
    };
    type StrikeCacheStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        OptionGreekCache.StrikeGreeksStructOutput,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        id: BigNumber;
        boardId: BigNumber;
        strikePrice: BigNumber;
        skew: BigNumber;
        greeks: OptionGreekCache.StrikeGreeksStructOutput;
        callExposure: BigNumber;
        putExposure: BigNumber;
        skewVariance: BigNumber;
    };
    type BoardGreeksViewStruct = {
        boardGreeks: OptionGreekCache.NetGreeksStruct;
        ivGWAV: PromiseOrValue<BigNumberish>;
        strikeGreeks: OptionGreekCache.StrikeGreeksStruct[];
        skewGWAVs: PromiseOrValue<BigNumberish>[];
    };
    type BoardGreeksViewStructOutput = [
        OptionGreekCache.NetGreeksStructOutput,
        BigNumber,
        OptionGreekCache.StrikeGreeksStructOutput[],
        BigNumber[]
    ] & {
        boardGreeks: OptionGreekCache.NetGreeksStructOutput;
        ivGWAV: BigNumber;
        strikeGreeks: OptionGreekCache.StrikeGreeksStructOutput[];
        skewGWAVs: BigNumber[];
    };
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
export declare namespace OptionMarket {
    type OptionBoardStruct = {
        id: PromiseOrValue<BigNumberish>;
        expiry: PromiseOrValue<BigNumberish>;
        iv: PromiseOrValue<BigNumberish>;
        frozen: PromiseOrValue<boolean>;
        strikeIds: PromiseOrValue<BigNumberish>[];
    };
    type OptionBoardStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber[]
    ] & {
        id: BigNumber;
        expiry: BigNumber;
        iv: BigNumber;
        frozen: boolean;
        strikeIds: BigNumber[];
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
    type TradeParametersStruct = {
        isBuy: PromiseOrValue<boolean>;
        isForceClose: PromiseOrValue<boolean>;
        tradeDirection: PromiseOrValue<BigNumberish>;
        optionType: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
        expiry: PromiseOrValue<BigNumberish>;
        strikePrice: PromiseOrValue<BigNumberish>;
        spotPrice: PromiseOrValue<BigNumberish>;
        liquidity: LiquidityPool.LiquidityStruct;
    };
    type TradeParametersStructOutput = [
        boolean,
        boolean,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        LiquidityPool.LiquidityStructOutput
    ] & {
        isBuy: boolean;
        isForceClose: boolean;
        tradeDirection: number;
        optionType: number;
        amount: BigNumber;
        expiry: BigNumber;
        strikePrice: BigNumber;
        spotPrice: BigNumber;
        liquidity: LiquidityPool.LiquidityStructOutput;
    };
}
export declare namespace LiquidityPool {
    type LiquidityStruct = {
        freeLiquidity: PromiseOrValue<BigNumberish>;
        burnableLiquidity: PromiseOrValue<BigNumberish>;
        reservedCollatLiquidity: PromiseOrValue<BigNumberish>;
        pendingDeltaLiquidity: PromiseOrValue<BigNumberish>;
        usedDeltaLiquidity: PromiseOrValue<BigNumberish>;
        NAV: PromiseOrValue<BigNumberish>;
        longScaleFactor: PromiseOrValue<BigNumberish>;
    };
    type LiquidityStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        freeLiquidity: BigNumber;
        burnableLiquidity: BigNumber;
        reservedCollatLiquidity: BigNumber;
        pendingDeltaLiquidity: BigNumber;
        usedDeltaLiquidity: BigNumber;
        NAV: BigNumber;
        longScaleFactor: BigNumber;
    };
}
export interface NewportOptionGreekCacheInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "addBoard((uint256,uint256,uint256,bool,uint256[]),(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)[])": FunctionFragment;
        "addStrikeToBoard(uint256,uint256,uint256,uint256)": FunctionFragment;
        "getBoardGreeksView(uint256)": FunctionFragment;
        "getForceCloseParams()": FunctionFragment;
        "getGlobalCache()": FunctionFragment;
        "getGlobalNetDelta()": FunctionFragment;
        "getGlobalOptionValue()": FunctionFragment;
        "getGreekCacheParams()": FunctionFragment;
        "getIvGWAV(uint256,uint256)": FunctionFragment;
        "getMinCollatParams()": FunctionFragment;
        "getMinCollateral(uint8,uint256,uint256,uint256,uint256)": FunctionFragment;
        "getOptionBoardCache(uint256)": FunctionFragment;
        "getPriceForForceClose((bool,bool,uint8,uint8,uint256,uint256,uint256,uint256,(uint256,uint256,uint256,uint256,uint256,uint256,uint256)),(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,uint256,bool)": FunctionFragment;
        "getShockVol(uint256)": FunctionFragment;
        "getSkewGWAV(uint256,uint256)": FunctionFragment;
        "getStrikeCache(uint256)": FunctionFragment;
        "init(address,address,address)": FunctionFragment;
        "isBoardCacheStale(uint256)": FunctionFragment;
        "isGlobalCacheStale(uint256)": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "owner()": FunctionFragment;
        "removeBoard(uint256)": FunctionFragment;
        "setBoardIv(uint256,uint256)": FunctionFragment;
        "setForceCloseParameters((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "setGreekCacheParameters((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "setMinCollateralParameters((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
        "setStrikeSkew(uint256,uint256)": FunctionFragment;
        "updateBoardCachedGreeks(uint256)": FunctionFragment;
        "updateStrikeExposureAndGetPrice((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bool,bool,uint8,uint8,uint256,uint256,uint256,uint256,(uint256,uint256,uint256,uint256,uint256,uint256,uint256)),uint256,uint256,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "addBoard" | "addStrikeToBoard" | "getBoardGreeksView" | "getForceCloseParams" | "getGlobalCache" | "getGlobalNetDelta" | "getGlobalOptionValue" | "getGreekCacheParams" | "getIvGWAV" | "getMinCollatParams" | "getMinCollateral" | "getOptionBoardCache" | "getPriceForForceClose" | "getShockVol" | "getSkewGWAV" | "getStrikeCache" | "init" | "isBoardCacheStale" | "isGlobalCacheStale" | "nominateNewOwner" | "nominatedOwner" | "owner" | "removeBoard" | "setBoardIv" | "setForceCloseParameters" | "setGreekCacheParameters" | "setMinCollateralParameters" | "setStrikeSkew" | "updateBoardCachedGreeks" | "updateStrikeExposureAndGetPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "addBoard", values: [OptionMarket.OptionBoardStruct, OptionMarket.StrikeStruct[]]): string;
    encodeFunctionData(functionFragment: "addStrikeToBoard", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getBoardGreeksView", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getForceCloseParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGlobalCache", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGlobalNetDelta", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGlobalOptionValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGreekCacheParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getIvGWAV", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getMinCollatParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMinCollateral", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getOptionBoardCache", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPriceForForceClose", values: [
        OptionMarket.TradeParametersStruct,
        OptionMarket.StrikeStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getShockVol", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSkewGWAV", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getStrikeCache", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "init", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "isBoardCacheStale", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isGlobalCacheStale", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeBoard", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setBoardIv", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setForceCloseParameters", values: [OptionGreekCache.ForceCloseParametersStruct]): string;
    encodeFunctionData(functionFragment: "setGreekCacheParameters", values: [OptionGreekCache.GreekCacheParametersStruct]): string;
    encodeFunctionData(functionFragment: "setMinCollateralParameters", values: [OptionGreekCache.MinCollateralParametersStruct]): string;
    encodeFunctionData(functionFragment: "setStrikeSkew", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateBoardCachedGreeks", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateStrikeExposureAndGetPrice", values: [
        OptionMarket.StrikeStruct,
        OptionMarket.TradeParametersStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addBoard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addStrikeToBoard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBoardGreeksView", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getForceCloseParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGlobalCache", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGlobalNetDelta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGlobalOptionValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGreekCacheParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIvGWAV", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinCollatParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOptionBoardCache", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceForForceClose", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getShockVol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSkewGWAV", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStrikeCache", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isBoardCacheStale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isGlobalCacheStale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeBoard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBoardIv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setForceCloseParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGreekCacheParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinCollateralParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStrikeSkew", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBoardCachedGreeks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStrikeExposureAndGetPrice", data: BytesLike): Result;
    events: {
        "BoardCacheRemoved(uint256)": EventFragment;
        "BoardCacheUpdated(tuple)": EventFragment;
        "BoardIvUpdated(uint256,uint256,uint256)": EventFragment;
        "ForceCloseParametersSet(tuple)": EventFragment;
        "GlobalCacheUpdated(tuple)": EventFragment;
        "GreekCacheParametersSet(tuple)": EventFragment;
        "MinCollateralParametersSet(tuple)": EventFragment;
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
        "StrikeCacheRemoved(uint256)": EventFragment;
        "StrikeCacheUpdated(tuple)": EventFragment;
        "StrikeSkewUpdated(uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BoardCacheRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BoardCacheUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BoardIvUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ForceCloseParametersSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GlobalCacheUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GreekCacheParametersSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinCollateralParametersSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrikeCacheRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrikeCacheUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrikeSkewUpdated"): EventFragment;
}
export interface BoardCacheRemovedEventObject {
    boardId: BigNumber;
}
export type BoardCacheRemovedEvent = TypedEvent<[
    BigNumber
], BoardCacheRemovedEventObject>;
export type BoardCacheRemovedEventFilter = TypedEventFilter<BoardCacheRemovedEvent>;
export interface BoardCacheUpdatedEventObject {
    boardCache: OptionGreekCache.OptionBoardCacheStructOutput;
}
export type BoardCacheUpdatedEvent = TypedEvent<[
    OptionGreekCache.OptionBoardCacheStructOutput
], BoardCacheUpdatedEventObject>;
export type BoardCacheUpdatedEventFilter = TypedEventFilter<BoardCacheUpdatedEvent>;
export interface BoardIvUpdatedEventObject {
    boardId: BigNumber;
    newIv: BigNumber;
    globalMaxIvVariance: BigNumber;
}
export type BoardIvUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], BoardIvUpdatedEventObject>;
export type BoardIvUpdatedEventFilter = TypedEventFilter<BoardIvUpdatedEvent>;
export interface ForceCloseParametersSetEventObject {
    params: OptionGreekCache.ForceCloseParametersStructOutput;
}
export type ForceCloseParametersSetEvent = TypedEvent<[
    OptionGreekCache.ForceCloseParametersStructOutput
], ForceCloseParametersSetEventObject>;
export type ForceCloseParametersSetEventFilter = TypedEventFilter<ForceCloseParametersSetEvent>;
export interface GlobalCacheUpdatedEventObject {
    globalCache: OptionGreekCache.GlobalCacheStructOutput;
}
export type GlobalCacheUpdatedEvent = TypedEvent<[
    OptionGreekCache.GlobalCacheStructOutput
], GlobalCacheUpdatedEventObject>;
export type GlobalCacheUpdatedEventFilter = TypedEventFilter<GlobalCacheUpdatedEvent>;
export interface GreekCacheParametersSetEventObject {
    params: OptionGreekCache.GreekCacheParametersStructOutput;
}
export type GreekCacheParametersSetEvent = TypedEvent<[
    OptionGreekCache.GreekCacheParametersStructOutput
], GreekCacheParametersSetEventObject>;
export type GreekCacheParametersSetEventFilter = TypedEventFilter<GreekCacheParametersSetEvent>;
export interface MinCollateralParametersSetEventObject {
    params: OptionGreekCache.MinCollateralParametersStructOutput;
}
export type MinCollateralParametersSetEvent = TypedEvent<[
    OptionGreekCache.MinCollateralParametersStructOutput
], MinCollateralParametersSetEventObject>;
export type MinCollateralParametersSetEventFilter = TypedEventFilter<MinCollateralParametersSetEvent>;
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
export interface StrikeCacheRemovedEventObject {
    strikeId: BigNumber;
}
export type StrikeCacheRemovedEvent = TypedEvent<[
    BigNumber
], StrikeCacheRemovedEventObject>;
export type StrikeCacheRemovedEventFilter = TypedEventFilter<StrikeCacheRemovedEvent>;
export interface StrikeCacheUpdatedEventObject {
    strikeCache: OptionGreekCache.StrikeCacheStructOutput;
}
export type StrikeCacheUpdatedEvent = TypedEvent<[
    OptionGreekCache.StrikeCacheStructOutput
], StrikeCacheUpdatedEventObject>;
export type StrikeCacheUpdatedEventFilter = TypedEventFilter<StrikeCacheUpdatedEvent>;
export interface StrikeSkewUpdatedEventObject {
    strikeId: BigNumber;
    newSkew: BigNumber;
    globalMaxSkewVariance: BigNumber;
}
export type StrikeSkewUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], StrikeSkewUpdatedEventObject>;
export type StrikeSkewUpdatedEventFilter = TypedEventFilter<StrikeSkewUpdatedEvent>;
export interface NewportOptionGreekCache extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NewportOptionGreekCacheInterface;
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
        addBoard(board: OptionMarket.OptionBoardStruct, strikes: OptionMarket.StrikeStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addStrikeToBoard(boardId: PromiseOrValue<BigNumberish>, strikeId: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getBoardGreeksView(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OptionGreekCache.BoardGreeksViewStructOutput]>;
        getForceCloseParams(overrides?: CallOverrides): Promise<[OptionGreekCache.ForceCloseParametersStructOutput]>;
        getGlobalCache(overrides?: CallOverrides): Promise<[OptionGreekCache.GlobalCacheStructOutput]>;
        getGlobalNetDelta(overrides?: CallOverrides): Promise<[BigNumber]>;
        getGlobalOptionValue(overrides?: CallOverrides): Promise<[BigNumber]>;
        getGreekCacheParams(overrides?: CallOverrides): Promise<[OptionGreekCache.GreekCacheParametersStructOutput]>;
        getIvGWAV(boardId: PromiseOrValue<BigNumberish>, secondsAgo: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            ivGWAV: BigNumber;
        }>;
        getMinCollatParams(overrides?: CallOverrides): Promise<[OptionGreekCache.MinCollateralParametersStructOutput]>;
        getMinCollateral(optionType: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, spotPrice: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            minCollateral: BigNumber;
        }>;
        getOptionBoardCache(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OptionGreekCache.OptionBoardCacheStructOutput]>;
        getPriceForForceClose(trade: OptionMarket.TradeParametersStruct, strike: OptionMarket.StrikeStruct, expiry: PromiseOrValue<BigNumberish>, newVol: PromiseOrValue<BigNumberish>, isPostCutoff: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            optionPrice: BigNumber;
            forceCloseVol: BigNumber;
        }>;
        getShockVol(timeToMaturity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSkewGWAV(strikeId: PromiseOrValue<BigNumberish>, secondsAgo: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            skewGWAV: BigNumber;
        }>;
        getStrikeCache(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OptionGreekCache.StrikeCacheStructOutput]>;
        init(_exchangeAdapter: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _optionMarketPricer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isBoardCacheStale(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        isGlobalCacheStale(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        removeBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBoardIv(boardId: PromiseOrValue<BigNumberish>, newBaseIv: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setForceCloseParameters(_forceCloseParams: OptionGreekCache.ForceCloseParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setGreekCacheParameters(_greekCacheParams: OptionGreekCache.GreekCacheParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMinCollateralParameters(_minCollatParams: OptionGreekCache.MinCollateralParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setStrikeSkew(strikeId: PromiseOrValue<BigNumberish>, newSkew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateBoardCachedGreeks(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateStrikeExposureAndGetPrice(strike: OptionMarket.StrikeStruct, trade: OptionMarket.TradeParametersStruct, iv: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, isPostCutoff: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addBoard(board: OptionMarket.OptionBoardStruct, strikes: OptionMarket.StrikeStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addStrikeToBoard(boardId: PromiseOrValue<BigNumberish>, strikeId: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getBoardGreeksView(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionGreekCache.BoardGreeksViewStructOutput>;
    getForceCloseParams(overrides?: CallOverrides): Promise<OptionGreekCache.ForceCloseParametersStructOutput>;
    getGlobalCache(overrides?: CallOverrides): Promise<OptionGreekCache.GlobalCacheStructOutput>;
    getGlobalNetDelta(overrides?: CallOverrides): Promise<BigNumber>;
    getGlobalOptionValue(overrides?: CallOverrides): Promise<BigNumber>;
    getGreekCacheParams(overrides?: CallOverrides): Promise<OptionGreekCache.GreekCacheParametersStructOutput>;
    getIvGWAV(boardId: PromiseOrValue<BigNumberish>, secondsAgo: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getMinCollatParams(overrides?: CallOverrides): Promise<OptionGreekCache.MinCollateralParametersStructOutput>;
    getMinCollateral(optionType: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, spotPrice: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getOptionBoardCache(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionGreekCache.OptionBoardCacheStructOutput>;
    getPriceForForceClose(trade: OptionMarket.TradeParametersStruct, strike: OptionMarket.StrikeStruct, expiry: PromiseOrValue<BigNumberish>, newVol: PromiseOrValue<BigNumberish>, isPostCutoff: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        optionPrice: BigNumber;
        forceCloseVol: BigNumber;
    }>;
    getShockVol(timeToMaturity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getSkewGWAV(strikeId: PromiseOrValue<BigNumberish>, secondsAgo: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getStrikeCache(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionGreekCache.StrikeCacheStructOutput>;
    init(_exchangeAdapter: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _optionMarketPricer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isBoardCacheStale(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    isGlobalCacheStale(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    removeBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBoardIv(boardId: PromiseOrValue<BigNumberish>, newBaseIv: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setForceCloseParameters(_forceCloseParams: OptionGreekCache.ForceCloseParametersStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setGreekCacheParameters(_greekCacheParams: OptionGreekCache.GreekCacheParametersStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMinCollateralParameters(_minCollatParams: OptionGreekCache.MinCollateralParametersStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setStrikeSkew(strikeId: PromiseOrValue<BigNumberish>, newSkew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateBoardCachedGreeks(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateStrikeExposureAndGetPrice(strike: OptionMarket.StrikeStruct, trade: OptionMarket.TradeParametersStruct, iv: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, isPostCutoff: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        addBoard(board: OptionMarket.OptionBoardStruct, strikes: OptionMarket.StrikeStruct[], overrides?: CallOverrides): Promise<void>;
        addStrikeToBoard(boardId: PromiseOrValue<BigNumberish>, strikeId: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getBoardGreeksView(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionGreekCache.BoardGreeksViewStructOutput>;
        getForceCloseParams(overrides?: CallOverrides): Promise<OptionGreekCache.ForceCloseParametersStructOutput>;
        getGlobalCache(overrides?: CallOverrides): Promise<OptionGreekCache.GlobalCacheStructOutput>;
        getGlobalNetDelta(overrides?: CallOverrides): Promise<BigNumber>;
        getGlobalOptionValue(overrides?: CallOverrides): Promise<BigNumber>;
        getGreekCacheParams(overrides?: CallOverrides): Promise<OptionGreekCache.GreekCacheParametersStructOutput>;
        getIvGWAV(boardId: PromiseOrValue<BigNumberish>, secondsAgo: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMinCollatParams(overrides?: CallOverrides): Promise<OptionGreekCache.MinCollateralParametersStructOutput>;
        getMinCollateral(optionType: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, spotPrice: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOptionBoardCache(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionGreekCache.OptionBoardCacheStructOutput>;
        getPriceForForceClose(trade: OptionMarket.TradeParametersStruct, strike: OptionMarket.StrikeStruct, expiry: PromiseOrValue<BigNumberish>, newVol: PromiseOrValue<BigNumberish>, isPostCutoff: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            optionPrice: BigNumber;
            forceCloseVol: BigNumber;
        }>;
        getShockVol(timeToMaturity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSkewGWAV(strikeId: PromiseOrValue<BigNumberish>, secondsAgo: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getStrikeCache(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionGreekCache.StrikeCacheStructOutput>;
        init(_exchangeAdapter: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _optionMarketPricer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isBoardCacheStale(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isGlobalCacheStale(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        removeBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setBoardIv(boardId: PromiseOrValue<BigNumberish>, newBaseIv: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setForceCloseParameters(_forceCloseParams: OptionGreekCache.ForceCloseParametersStruct, overrides?: CallOverrides): Promise<void>;
        setGreekCacheParameters(_greekCacheParams: OptionGreekCache.GreekCacheParametersStruct, overrides?: CallOverrides): Promise<void>;
        setMinCollateralParameters(_minCollatParams: OptionGreekCache.MinCollateralParametersStruct, overrides?: CallOverrides): Promise<void>;
        setStrikeSkew(strikeId: PromiseOrValue<BigNumberish>, newSkew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateBoardCachedGreeks(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateStrikeExposureAndGetPrice(strike: OptionMarket.StrikeStruct, trade: OptionMarket.TradeParametersStruct, iv: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, isPostCutoff: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<OptionGreekCache.TradePricingStructOutput>;
    };
    filters: {
        "BoardCacheRemoved(uint256)"(boardId?: null): BoardCacheRemovedEventFilter;
        BoardCacheRemoved(boardId?: null): BoardCacheRemovedEventFilter;
        "BoardCacheUpdated(tuple)"(boardCache?: null): BoardCacheUpdatedEventFilter;
        BoardCacheUpdated(boardCache?: null): BoardCacheUpdatedEventFilter;
        "BoardIvUpdated(uint256,uint256,uint256)"(boardId?: null, newIv?: null, globalMaxIvVariance?: null): BoardIvUpdatedEventFilter;
        BoardIvUpdated(boardId?: null, newIv?: null, globalMaxIvVariance?: null): BoardIvUpdatedEventFilter;
        "ForceCloseParametersSet(tuple)"(params?: null): ForceCloseParametersSetEventFilter;
        ForceCloseParametersSet(params?: null): ForceCloseParametersSetEventFilter;
        "GlobalCacheUpdated(tuple)"(globalCache?: null): GlobalCacheUpdatedEventFilter;
        GlobalCacheUpdated(globalCache?: null): GlobalCacheUpdatedEventFilter;
        "GreekCacheParametersSet(tuple)"(params?: null): GreekCacheParametersSetEventFilter;
        GreekCacheParametersSet(params?: null): GreekCacheParametersSetEventFilter;
        "MinCollateralParametersSet(tuple)"(params?: null): MinCollateralParametersSetEventFilter;
        MinCollateralParametersSet(params?: null): MinCollateralParametersSetEventFilter;
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
        "StrikeCacheRemoved(uint256)"(strikeId?: null): StrikeCacheRemovedEventFilter;
        StrikeCacheRemoved(strikeId?: null): StrikeCacheRemovedEventFilter;
        "StrikeCacheUpdated(tuple)"(strikeCache?: null): StrikeCacheUpdatedEventFilter;
        StrikeCacheUpdated(strikeCache?: null): StrikeCacheUpdatedEventFilter;
        "StrikeSkewUpdated(uint256,uint256,uint256)"(strikeId?: null, newSkew?: null, globalMaxSkewVariance?: null): StrikeSkewUpdatedEventFilter;
        StrikeSkewUpdated(strikeId?: null, newSkew?: null, globalMaxSkewVariance?: null): StrikeSkewUpdatedEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addBoard(board: OptionMarket.OptionBoardStruct, strikes: OptionMarket.StrikeStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addStrikeToBoard(boardId: PromiseOrValue<BigNumberish>, strikeId: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getBoardGreeksView(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getForceCloseParams(overrides?: CallOverrides): Promise<BigNumber>;
        getGlobalCache(overrides?: CallOverrides): Promise<BigNumber>;
        getGlobalNetDelta(overrides?: CallOverrides): Promise<BigNumber>;
        getGlobalOptionValue(overrides?: CallOverrides): Promise<BigNumber>;
        getGreekCacheParams(overrides?: CallOverrides): Promise<BigNumber>;
        getIvGWAV(boardId: PromiseOrValue<BigNumberish>, secondsAgo: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getMinCollatParams(overrides?: CallOverrides): Promise<BigNumber>;
        getMinCollateral(optionType: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, spotPrice: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOptionBoardCache(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPriceForForceClose(trade: OptionMarket.TradeParametersStruct, strike: OptionMarket.StrikeStruct, expiry: PromiseOrValue<BigNumberish>, newVol: PromiseOrValue<BigNumberish>, isPostCutoff: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        getShockVol(timeToMaturity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSkewGWAV(strikeId: PromiseOrValue<BigNumberish>, secondsAgo: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getStrikeCache(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        init(_exchangeAdapter: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _optionMarketPricer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isBoardCacheStale(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isGlobalCacheStale(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        removeBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBoardIv(boardId: PromiseOrValue<BigNumberish>, newBaseIv: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setForceCloseParameters(_forceCloseParams: OptionGreekCache.ForceCloseParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setGreekCacheParameters(_greekCacheParams: OptionGreekCache.GreekCacheParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMinCollateralParameters(_minCollatParams: OptionGreekCache.MinCollateralParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setStrikeSkew(strikeId: PromiseOrValue<BigNumberish>, newSkew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateBoardCachedGreeks(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateStrikeExposureAndGetPrice(strike: OptionMarket.StrikeStruct, trade: OptionMarket.TradeParametersStruct, iv: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, isPostCutoff: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addBoard(board: OptionMarket.OptionBoardStruct, strikes: OptionMarket.StrikeStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addStrikeToBoard(boardId: PromiseOrValue<BigNumberish>, strikeId: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getBoardGreeksView(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getForceCloseParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGlobalCache(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGlobalNetDelta(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGlobalOptionValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGreekCacheParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIvGWAV(boardId: PromiseOrValue<BigNumberish>, secondsAgo: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMinCollatParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMinCollateral(optionType: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, expiry: PromiseOrValue<BigNumberish>, spotPrice: PromiseOrValue<BigNumberish>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOptionBoardCache(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceForForceClose(trade: OptionMarket.TradeParametersStruct, strike: OptionMarket.StrikeStruct, expiry: PromiseOrValue<BigNumberish>, newVol: PromiseOrValue<BigNumberish>, isPostCutoff: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getShockVol(timeToMaturity: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSkewGWAV(strikeId: PromiseOrValue<BigNumberish>, secondsAgo: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStrikeCache(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(_exchangeAdapter: PromiseOrValue<string>, _optionMarket: PromiseOrValue<string>, _optionMarketPricer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isBoardCacheStale(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isGlobalCacheStale(spotPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBoardIv(boardId: PromiseOrValue<BigNumberish>, newBaseIv: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setForceCloseParameters(_forceCloseParams: OptionGreekCache.ForceCloseParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setGreekCacheParameters(_greekCacheParams: OptionGreekCache.GreekCacheParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMinCollateralParameters(_minCollatParams: OptionGreekCache.MinCollateralParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setStrikeSkew(strikeId: PromiseOrValue<BigNumberish>, newSkew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateBoardCachedGreeks(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateStrikeExposureAndGetPrice(strike: OptionMarket.StrikeStruct, trade: OptionMarket.TradeParametersStruct, iv: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, isPostCutoff: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
