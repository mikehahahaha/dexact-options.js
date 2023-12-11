import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace OptionMarket {
    type OptionMarketParametersStruct = {
        maxBoardExpiry: PromiseOrValue<BigNumberish>;
        securityModule: PromiseOrValue<string>;
        feePortionReserved: PromiseOrValue<BigNumberish>;
        staticBaseSettlementFee: PromiseOrValue<BigNumberish>;
    };
    type OptionMarketParametersStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber
    ] & {
        maxBoardExpiry: BigNumber;
        securityModule: string;
        feePortionReserved: BigNumber;
        staticBaseSettlementFee: BigNumber;
    };
    type TradeEventDataStruct = {
        strikeId: PromiseOrValue<BigNumberish>;
        expiry: PromiseOrValue<BigNumberish>;
        strikePrice: PromiseOrValue<BigNumberish>;
        optionType: PromiseOrValue<BigNumberish>;
        tradeDirection: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
        setCollateralTo: PromiseOrValue<BigNumberish>;
        isForceClose: PromiseOrValue<boolean>;
        spotPrice: PromiseOrValue<BigNumberish>;
        reservedFee: PromiseOrValue<BigNumberish>;
        totalCost: PromiseOrValue<BigNumberish>;
    };
    type TradeEventDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        strikeId: BigNumber;
        expiry: BigNumber;
        strikePrice: BigNumber;
        optionType: number;
        tradeDirection: number;
        amount: BigNumber;
        setCollateralTo: BigNumber;
        isForceClose: boolean;
        spotPrice: BigNumber;
        reservedFee: BigNumber;
        totalCost: BigNumber;
    };
    type LiquidationEventDataStruct = {
        rewardBeneficiary: PromiseOrValue<string>;
        caller: PromiseOrValue<string>;
        returnCollateral: PromiseOrValue<BigNumberish>;
        lpPremiums: PromiseOrValue<BigNumberish>;
        lpFee: PromiseOrValue<BigNumberish>;
        liquidatorFee: PromiseOrValue<BigNumberish>;
        smFee: PromiseOrValue<BigNumberish>;
        insolventAmount: PromiseOrValue<BigNumberish>;
    };
    type LiquidationEventDataStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        rewardBeneficiary: string;
        caller: string;
        returnCollateral: BigNumber;
        lpPremiums: BigNumber;
        lpFee: BigNumber;
        liquidatorFee: BigNumber;
        smFee: BigNumber;
        insolventAmount: BigNumber;
    };
    type TradeInputParametersStruct = {
        strikeId: PromiseOrValue<BigNumberish>;
        positionId: PromiseOrValue<BigNumberish>;
        iterations: PromiseOrValue<BigNumberish>;
        optionType: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
        setCollateralTo: PromiseOrValue<BigNumberish>;
        minTotalCost: PromiseOrValue<BigNumberish>;
        maxTotalCost: PromiseOrValue<BigNumberish>;
        referrer: PromiseOrValue<string>;
    };
    type TradeInputParametersStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        strikeId: BigNumber;
        positionId: BigNumber;
        iterations: BigNumber;
        optionType: number;
        amount: BigNumber;
        setCollateralTo: BigNumber;
        minTotalCost: BigNumber;
        maxTotalCost: BigNumber;
        referrer: string;
    };
    type ResultStruct = {
        positionId: PromiseOrValue<BigNumberish>;
        totalCost: PromiseOrValue<BigNumberish>;
        totalFee: PromiseOrValue<BigNumberish>;
    };
    type ResultStructOutput = [BigNumber, BigNumber, BigNumber] & {
        positionId: BigNumber;
        totalCost: BigNumber;
        totalFee: BigNumber;
    };
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
}
export declare namespace OptionMarketPricer {
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
export interface NewportOptionMarketInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "addCollateral(uint256,uint256)": FunctionFragment;
        "addStrikeToBoard(uint256,uint256,uint256)": FunctionFragment;
        "baseAsset()": FunctionFragment;
        "baseLimit()": FunctionFragment;
        "boardToPriceAtExpiry(uint256)": FunctionFragment;
        "closePosition((uint256,uint256,uint256,uint8,uint256,uint256,uint256,uint256,address))": FunctionFragment;
        "createOptionBoard(uint256,uint256,uint256[],uint256[],bool)": FunctionFragment;
        "forceClosePosition((uint256,uint256,uint256,uint8,uint256,uint256,uint256,uint256,address))": FunctionFragment;
        "forceSettleBoard(uint256)": FunctionFragment;
        "getBoardAndStrikeDetails(uint256)": FunctionFragment;
        "getBoardStrikes(uint256)": FunctionFragment;
        "getLiveBoards()": FunctionFragment;
        "getNumLiveBoards()": FunctionFragment;
        "getOptionBoard(uint256)": FunctionFragment;
        "getOptionMarketParams()": FunctionFragment;
        "getSettlementParameters(uint256)": FunctionFragment;
        "getStrike(uint256)": FunctionFragment;
        "getStrikeAndBoard(uint256)": FunctionFragment;
        "getStrikeAndExpiry(uint256)": FunctionFragment;
        "init(address,address,address,address,address,address,address,address)": FunctionFragment;
        "liquidatePosition(uint256,address)": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "openPosition((uint256,uint256,uint256,uint8,uint256,uint256,uint256,uint256,address))": FunctionFragment;
        "owner()": FunctionFragment;
        "quoteAsset()": FunctionFragment;
        "recoverFunds(address,address)": FunctionFragment;
        "scaledLongsForBoard(uint256)": FunctionFragment;
        "setBaseLimit(uint256)": FunctionFragment;
        "setBoardBaseIv(uint256,uint256)": FunctionFragment;
        "setBoardFrozen(uint256,bool)": FunctionFragment;
        "setOptionMarketParams((uint256,address,uint256,uint256))": FunctionFragment;
        "setStrikeSkew(uint256,uint256)": FunctionFragment;
        "settleExpiredBoard(uint256)": FunctionFragment;
        "smClaim()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "addCollateral" | "addStrikeToBoard" | "baseAsset" | "baseLimit" | "boardToPriceAtExpiry" | "closePosition" | "createOptionBoard" | "forceClosePosition" | "forceSettleBoard" | "getBoardAndStrikeDetails" | "getBoardStrikes" | "getLiveBoards" | "getNumLiveBoards" | "getOptionBoard" | "getOptionMarketParams" | "getSettlementParameters" | "getStrike" | "getStrikeAndBoard" | "getStrikeAndExpiry" | "init" | "liquidatePosition" | "nominateNewOwner" | "nominatedOwner" | "openPosition" | "owner" | "quoteAsset" | "recoverFunds" | "scaledLongsForBoard" | "setBaseLimit" | "setBoardBaseIv" | "setBoardFrozen" | "setOptionMarketParams" | "setStrikeSkew" | "settleExpiredBoard" | "smClaim"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "addCollateral", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "addStrikeToBoard", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "baseAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "boardToPriceAtExpiry", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "closePosition", values: [OptionMarket.TradeInputParametersStruct]): string;
    encodeFunctionData(functionFragment: "createOptionBoard", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "forceClosePosition", values: [OptionMarket.TradeInputParametersStruct]): string;
    encodeFunctionData(functionFragment: "forceSettleBoard", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getBoardAndStrikeDetails", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getBoardStrikes", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getLiveBoards", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNumLiveBoards", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOptionBoard", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getOptionMarketParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSettlementParameters", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getStrike", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getStrikeAndBoard", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getStrikeAndExpiry", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "init", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "liquidatePosition", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "openPosition", values: [OptionMarket.TradeInputParametersStruct]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteAsset", values?: undefined): string;
    encodeFunctionData(functionFragment: "recoverFunds", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "scaledLongsForBoard", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setBaseLimit", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setBoardBaseIv", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setBoardFrozen", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setOptionMarketParams", values: [OptionMarket.OptionMarketParametersStruct]): string;
    encodeFunctionData(functionFragment: "setStrikeSkew", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "settleExpiredBoard", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "smClaim", values?: undefined): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addStrikeToBoard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "boardToPriceAtExpiry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createOptionBoard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceClosePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forceSettleBoard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBoardAndStrikeDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBoardStrikes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiveBoards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumLiveBoards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOptionBoard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOptionMarketParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSettlementParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStrike", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStrikeAndBoard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStrikeAndExpiry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidatePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scaledLongsForBoard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBaseLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBoardBaseIv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBoardFrozen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOptionMarketParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStrikeSkew", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleExpiredBoard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "smClaim", data: BytesLike): Result;
    events: {
        "BaseLimitSet(uint256)": EventFragment;
        "BoardBaseIvSet(uint256,uint256)": EventFragment;
        "BoardCreated(uint256,uint256,uint256,bool)": EventFragment;
        "BoardFrozen(uint256,bool)": EventFragment;
        "BoardSettled(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "OptionMarketParamsSet(tuple)": EventFragment;
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
        "SMClaimed(address,uint256)": EventFragment;
        "StrikeAdded(uint256,uint256,uint256,uint256)": EventFragment;
        "StrikeSkewSet(uint256,uint256)": EventFragment;
        "Trade(address,uint256,address,tuple,tuple[],tuple,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BaseLimitSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BoardBaseIvSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BoardCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BoardFrozen"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BoardSettled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OptionMarketParamsSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SMClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrikeAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrikeSkewSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Trade"): EventFragment;
}
export interface BaseLimitSetEventObject {
    baseLimit: BigNumber;
}
export type BaseLimitSetEvent = TypedEvent<[
    BigNumber
], BaseLimitSetEventObject>;
export type BaseLimitSetEventFilter = TypedEventFilter<BaseLimitSetEvent>;
export interface BoardBaseIvSetEventObject {
    boardId: BigNumber;
    baseIv: BigNumber;
}
export type BoardBaseIvSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], BoardBaseIvSetEventObject>;
export type BoardBaseIvSetEventFilter = TypedEventFilter<BoardBaseIvSetEvent>;
export interface BoardCreatedEventObject {
    boardId: BigNumber;
    expiry: BigNumber;
    baseIv: BigNumber;
    frozen: boolean;
}
export type BoardCreatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
], BoardCreatedEventObject>;
export type BoardCreatedEventFilter = TypedEventFilter<BoardCreatedEvent>;
export interface BoardFrozenEventObject {
    boardId: BigNumber;
    frozen: boolean;
}
export type BoardFrozenEvent = TypedEvent<[
    BigNumber,
    boolean
], BoardFrozenEventObject>;
export type BoardFrozenEventFilter = TypedEventFilter<BoardFrozenEvent>;
export interface BoardSettledEventObject {
    boardId: BigNumber;
    spotPriceAtExpiry: BigNumber;
    totalUserLongProfitQuote: BigNumber;
    totalBoardLongCallCollateral: BigNumber;
    totalBoardLongPutCollateral: BigNumber;
    totalAMMShortCallProfitBase: BigNumber;
    totalAMMShortCallProfitQuote: BigNumber;
    totalAMMShortPutProfitQuote: BigNumber;
    longScaleFactor: BigNumber;
}
export type BoardSettledEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], BoardSettledEventObject>;
export type BoardSettledEventFilter = TypedEventFilter<BoardSettledEvent>;
export interface OptionMarketParamsSetEventObject {
    optionMarketParams: OptionMarket.OptionMarketParametersStructOutput;
}
export type OptionMarketParamsSetEvent = TypedEvent<[
    OptionMarket.OptionMarketParametersStructOutput
], OptionMarketParamsSetEventObject>;
export type OptionMarketParamsSetEventFilter = TypedEventFilter<OptionMarketParamsSetEvent>;
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
export interface SMClaimedEventObject {
    securityModule: string;
    quoteAmount: BigNumber;
}
export type SMClaimedEvent = TypedEvent<[
    string,
    BigNumber
], SMClaimedEventObject>;
export type SMClaimedEventFilter = TypedEventFilter<SMClaimedEvent>;
export interface StrikeAddedEventObject {
    boardId: BigNumber;
    strikeId: BigNumber;
    strikePrice: BigNumber;
    skew: BigNumber;
}
export type StrikeAddedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], StrikeAddedEventObject>;
export type StrikeAddedEventFilter = TypedEventFilter<StrikeAddedEvent>;
export interface StrikeSkewSetEventObject {
    strikeId: BigNumber;
    skew: BigNumber;
}
export type StrikeSkewSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], StrikeSkewSetEventObject>;
export type StrikeSkewSetEventFilter = TypedEventFilter<StrikeSkewSetEvent>;
export interface TradeEventObject {
    trader: string;
    positionId: BigNumber;
    referrer: string;
    trade: OptionMarket.TradeEventDataStructOutput;
    tradeResults: OptionMarketPricer.TradeResultStructOutput[];
    liquidation: OptionMarket.LiquidationEventDataStructOutput;
    longScaleFactor: BigNumber;
    timestamp: BigNumber;
}
export type TradeEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    OptionMarket.TradeEventDataStructOutput,
    OptionMarketPricer.TradeResultStructOutput[],
    OptionMarket.LiquidationEventDataStructOutput,
    BigNumber,
    BigNumber
], TradeEventObject>;
export type TradeEventFilter = TypedEventFilter<TradeEvent>;
export interface NewportOptionMarket extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NewportOptionMarketInterface;
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
        addCollateral(positionId: PromiseOrValue<BigNumberish>, amountCollateral: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addStrikeToBoard(boardId: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        baseAsset(overrides?: CallOverrides): Promise<[string]>;
        baseLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        boardToPriceAtExpiry(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        closePosition(params: OptionMarket.TradeInputParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createOptionBoard(expiry: PromiseOrValue<BigNumberish>, baseIV: PromiseOrValue<BigNumberish>, strikePrices: PromiseOrValue<BigNumberish>[], skews: PromiseOrValue<BigNumberish>[], frozen: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        forceClosePosition(params: OptionMarket.TradeInputParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        forceSettleBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getBoardAndStrikeDetails(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            OptionMarket.OptionBoardStructOutput,
            OptionMarket.StrikeStructOutput[],
            BigNumber[],
            BigNumber,
            BigNumber
        ]>;
        getBoardStrikes(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            strikeIds: BigNumber[];
        }>;
        getLiveBoards(overrides?: CallOverrides): Promise<[BigNumber[]] & {
            _liveBoards: BigNumber[];
        }>;
        getNumLiveBoards(overrides?: CallOverrides): Promise<[BigNumber] & {
            numLiveBoards: BigNumber;
        }>;
        getOptionBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OptionMarket.OptionBoardStructOutput]>;
        getOptionMarketParams(overrides?: CallOverrides): Promise<[OptionMarket.OptionMarketParametersStructOutput]>;
        getSettlementParameters(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            strikePrice: BigNumber;
            priceAtExpiry: BigNumber;
            strikeToBaseReturned: BigNumber;
            longScaleFactor: BigNumber;
        }>;
        getStrike(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OptionMarket.StrikeStructOutput]>;
        getStrikeAndBoard(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            OptionMarket.StrikeStructOutput,
            OptionMarket.OptionBoardStructOutput
        ]>;
        getStrikeAndExpiry(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            strikePrice: BigNumber;
            expiry: BigNumber;
        }>;
        init(_exchangeAdapter: PromiseOrValue<string>, _liquidityPool: PromiseOrValue<string>, _optionPricer: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, _shortCollateral: PromiseOrValue<string>, _optionToken: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        liquidatePosition(positionId: PromiseOrValue<BigNumberish>, rewardBeneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<[string]>;
        openPosition(params: OptionMarket.TradeInputParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        quoteAsset(overrides?: CallOverrides): Promise<[string]>;
        recoverFunds(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scaledLongsForBoard(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        setBaseLimit(_baseLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBoardBaseIv(boardId: PromiseOrValue<BigNumberish>, baseIv: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBoardFrozen(boardId: PromiseOrValue<BigNumberish>, frozen: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOptionMarketParams(_optionMarketParams: OptionMarket.OptionMarketParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setStrikeSkew(strikeId: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        settleExpiredBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        smClaim(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addCollateral(positionId: PromiseOrValue<BigNumberish>, amountCollateral: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addStrikeToBoard(boardId: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    baseAsset(overrides?: CallOverrides): Promise<string>;
    baseLimit(overrides?: CallOverrides): Promise<BigNumber>;
    boardToPriceAtExpiry(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    closePosition(params: OptionMarket.TradeInputParametersStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createOptionBoard(expiry: PromiseOrValue<BigNumberish>, baseIV: PromiseOrValue<BigNumberish>, strikePrices: PromiseOrValue<BigNumberish>[], skews: PromiseOrValue<BigNumberish>[], frozen: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    forceClosePosition(params: OptionMarket.TradeInputParametersStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    forceSettleBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getBoardAndStrikeDetails(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        OptionMarket.OptionBoardStructOutput,
        OptionMarket.StrikeStructOutput[],
        BigNumber[],
        BigNumber,
        BigNumber
    ]>;
    getBoardStrikes(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    getLiveBoards(overrides?: CallOverrides): Promise<BigNumber[]>;
    getNumLiveBoards(overrides?: CallOverrides): Promise<BigNumber>;
    getOptionBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarket.OptionBoardStructOutput>;
    getOptionMarketParams(overrides?: CallOverrides): Promise<OptionMarket.OptionMarketParametersStructOutput>;
    getSettlementParameters(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        strikePrice: BigNumber;
        priceAtExpiry: BigNumber;
        strikeToBaseReturned: BigNumber;
        longScaleFactor: BigNumber;
    }>;
    getStrike(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarket.StrikeStructOutput>;
    getStrikeAndBoard(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        OptionMarket.StrikeStructOutput,
        OptionMarket.OptionBoardStructOutput
    ]>;
    getStrikeAndExpiry(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        strikePrice: BigNumber;
        expiry: BigNumber;
    }>;
    init(_exchangeAdapter: PromiseOrValue<string>, _liquidityPool: PromiseOrValue<string>, _optionPricer: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, _shortCollateral: PromiseOrValue<string>, _optionToken: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    liquidatePosition(positionId: PromiseOrValue<BigNumberish>, rewardBeneficiary: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    nominatedOwner(overrides?: CallOverrides): Promise<string>;
    openPosition(params: OptionMarket.TradeInputParametersStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    quoteAsset(overrides?: CallOverrides): Promise<string>;
    recoverFunds(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scaledLongsForBoard(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    setBaseLimit(_baseLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBoardBaseIv(boardId: PromiseOrValue<BigNumberish>, baseIv: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBoardFrozen(boardId: PromiseOrValue<BigNumberish>, frozen: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOptionMarketParams(_optionMarketParams: OptionMarket.OptionMarketParametersStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setStrikeSkew(strikeId: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    settleExpiredBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    smClaim(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        addCollateral(positionId: PromiseOrValue<BigNumberish>, amountCollateral: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        addStrikeToBoard(boardId: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        baseAsset(overrides?: CallOverrides): Promise<string>;
        baseLimit(overrides?: CallOverrides): Promise<BigNumber>;
        boardToPriceAtExpiry(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        closePosition(params: OptionMarket.TradeInputParametersStruct, overrides?: CallOverrides): Promise<OptionMarket.ResultStructOutput>;
        createOptionBoard(expiry: PromiseOrValue<BigNumberish>, baseIV: PromiseOrValue<BigNumberish>, strikePrices: PromiseOrValue<BigNumberish>[], skews: PromiseOrValue<BigNumberish>[], frozen: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        forceClosePosition(params: OptionMarket.TradeInputParametersStruct, overrides?: CallOverrides): Promise<OptionMarket.ResultStructOutput>;
        forceSettleBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getBoardAndStrikeDetails(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            OptionMarket.OptionBoardStructOutput,
            OptionMarket.StrikeStructOutput[],
            BigNumber[],
            BigNumber,
            BigNumber
        ]>;
        getBoardStrikes(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        getLiveBoards(overrides?: CallOverrides): Promise<BigNumber[]>;
        getNumLiveBoards(overrides?: CallOverrides): Promise<BigNumber>;
        getOptionBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarket.OptionBoardStructOutput>;
        getOptionMarketParams(overrides?: CallOverrides): Promise<OptionMarket.OptionMarketParametersStructOutput>;
        getSettlementParameters(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            strikePrice: BigNumber;
            priceAtExpiry: BigNumber;
            strikeToBaseReturned: BigNumber;
            longScaleFactor: BigNumber;
        }>;
        getStrike(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarket.StrikeStructOutput>;
        getStrikeAndBoard(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            OptionMarket.StrikeStructOutput,
            OptionMarket.OptionBoardStructOutput
        ]>;
        getStrikeAndExpiry(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            strikePrice: BigNumber;
            expiry: BigNumber;
        }>;
        init(_exchangeAdapter: PromiseOrValue<string>, _liquidityPool: PromiseOrValue<string>, _optionPricer: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, _shortCollateral: PromiseOrValue<string>, _optionToken: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        liquidatePosition(positionId: PromiseOrValue<BigNumberish>, rewardBeneficiary: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        openPosition(params: OptionMarket.TradeInputParametersStruct, overrides?: CallOverrides): Promise<OptionMarket.ResultStructOutput>;
        owner(overrides?: CallOverrides): Promise<string>;
        quoteAsset(overrides?: CallOverrides): Promise<string>;
        recoverFunds(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        scaledLongsForBoard(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setBaseLimit(_baseLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setBoardBaseIv(boardId: PromiseOrValue<BigNumberish>, baseIv: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setBoardFrozen(boardId: PromiseOrValue<BigNumberish>, frozen: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setOptionMarketParams(_optionMarketParams: OptionMarket.OptionMarketParametersStruct, overrides?: CallOverrides): Promise<void>;
        setStrikeSkew(strikeId: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        settleExpiredBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        smClaim(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "BaseLimitSet(uint256)"(baseLimit?: null): BaseLimitSetEventFilter;
        BaseLimitSet(baseLimit?: null): BaseLimitSetEventFilter;
        "BoardBaseIvSet(uint256,uint256)"(boardId?: PromiseOrValue<BigNumberish> | null, baseIv?: null): BoardBaseIvSetEventFilter;
        BoardBaseIvSet(boardId?: PromiseOrValue<BigNumberish> | null, baseIv?: null): BoardBaseIvSetEventFilter;
        "BoardCreated(uint256,uint256,uint256,bool)"(boardId?: PromiseOrValue<BigNumberish> | null, expiry?: null, baseIv?: null, frozen?: null): BoardCreatedEventFilter;
        BoardCreated(boardId?: PromiseOrValue<BigNumberish> | null, expiry?: null, baseIv?: null, frozen?: null): BoardCreatedEventFilter;
        "BoardFrozen(uint256,bool)"(boardId?: PromiseOrValue<BigNumberish> | null, frozen?: null): BoardFrozenEventFilter;
        BoardFrozen(boardId?: PromiseOrValue<BigNumberish> | null, frozen?: null): BoardFrozenEventFilter;
        "BoardSettled(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)"(boardId?: PromiseOrValue<BigNumberish> | null, spotPriceAtExpiry?: null, totalUserLongProfitQuote?: null, totalBoardLongCallCollateral?: null, totalBoardLongPutCollateral?: null, totalAMMShortCallProfitBase?: null, totalAMMShortCallProfitQuote?: null, totalAMMShortPutProfitQuote?: null, longScaleFactor?: null): BoardSettledEventFilter;
        BoardSettled(boardId?: PromiseOrValue<BigNumberish> | null, spotPriceAtExpiry?: null, totalUserLongProfitQuote?: null, totalBoardLongCallCollateral?: null, totalBoardLongPutCollateral?: null, totalAMMShortCallProfitBase?: null, totalAMMShortCallProfitQuote?: null, totalAMMShortPutProfitQuote?: null, longScaleFactor?: null): BoardSettledEventFilter;
        "OptionMarketParamsSet(tuple)"(optionMarketParams?: null): OptionMarketParamsSetEventFilter;
        OptionMarketParamsSet(optionMarketParams?: null): OptionMarketParamsSetEventFilter;
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
        "SMClaimed(address,uint256)"(securityModule?: null, quoteAmount?: null): SMClaimedEventFilter;
        SMClaimed(securityModule?: null, quoteAmount?: null): SMClaimedEventFilter;
        "StrikeAdded(uint256,uint256,uint256,uint256)"(boardId?: PromiseOrValue<BigNumberish> | null, strikeId?: PromiseOrValue<BigNumberish> | null, strikePrice?: null, skew?: null): StrikeAddedEventFilter;
        StrikeAdded(boardId?: PromiseOrValue<BigNumberish> | null, strikeId?: PromiseOrValue<BigNumberish> | null, strikePrice?: null, skew?: null): StrikeAddedEventFilter;
        "StrikeSkewSet(uint256,uint256)"(strikeId?: PromiseOrValue<BigNumberish> | null, skew?: null): StrikeSkewSetEventFilter;
        StrikeSkewSet(strikeId?: PromiseOrValue<BigNumberish> | null, skew?: null): StrikeSkewSetEventFilter;
        "Trade(address,uint256,address,tuple,tuple[],tuple,uint256,uint256)"(trader?: PromiseOrValue<string> | null, positionId?: PromiseOrValue<BigNumberish> | null, referrer?: PromiseOrValue<string> | null, trade?: null, tradeResults?: null, liquidation?: null, longScaleFactor?: null, timestamp?: null): TradeEventFilter;
        Trade(trader?: PromiseOrValue<string> | null, positionId?: PromiseOrValue<BigNumberish> | null, referrer?: PromiseOrValue<string> | null, trade?: null, tradeResults?: null, liquidation?: null, longScaleFactor?: null, timestamp?: null): TradeEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addCollateral(positionId: PromiseOrValue<BigNumberish>, amountCollateral: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addStrikeToBoard(boardId: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        baseAsset(overrides?: CallOverrides): Promise<BigNumber>;
        baseLimit(overrides?: CallOverrides): Promise<BigNumber>;
        boardToPriceAtExpiry(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        closePosition(params: OptionMarket.TradeInputParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createOptionBoard(expiry: PromiseOrValue<BigNumberish>, baseIV: PromiseOrValue<BigNumberish>, strikePrices: PromiseOrValue<BigNumberish>[], skews: PromiseOrValue<BigNumberish>[], frozen: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        forceClosePosition(params: OptionMarket.TradeInputParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        forceSettleBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getBoardAndStrikeDetails(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getBoardStrikes(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getLiveBoards(overrides?: CallOverrides): Promise<BigNumber>;
        getNumLiveBoards(overrides?: CallOverrides): Promise<BigNumber>;
        getOptionBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getOptionMarketParams(overrides?: CallOverrides): Promise<BigNumber>;
        getSettlementParameters(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getStrike(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getStrikeAndBoard(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getStrikeAndExpiry(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        init(_exchangeAdapter: PromiseOrValue<string>, _liquidityPool: PromiseOrValue<string>, _optionPricer: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, _shortCollateral: PromiseOrValue<string>, _optionToken: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        liquidatePosition(positionId: PromiseOrValue<BigNumberish>, rewardBeneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;
        openPosition(params: OptionMarket.TradeInputParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        quoteAsset(overrides?: CallOverrides): Promise<BigNumber>;
        recoverFunds(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scaledLongsForBoard(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setBaseLimit(_baseLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBoardBaseIv(boardId: PromiseOrValue<BigNumberish>, baseIv: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBoardFrozen(boardId: PromiseOrValue<BigNumberish>, frozen: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOptionMarketParams(_optionMarketParams: OptionMarket.OptionMarketParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setStrikeSkew(strikeId: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        settleExpiredBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        smClaim(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addCollateral(positionId: PromiseOrValue<BigNumberish>, amountCollateral: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addStrikeToBoard(boardId: PromiseOrValue<BigNumberish>, strikePrice: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        baseAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        boardToPriceAtExpiry(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        closePosition(params: OptionMarket.TradeInputParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createOptionBoard(expiry: PromiseOrValue<BigNumberish>, baseIV: PromiseOrValue<BigNumberish>, strikePrices: PromiseOrValue<BigNumberish>[], skews: PromiseOrValue<BigNumberish>[], frozen: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        forceClosePosition(params: OptionMarket.TradeInputParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        forceSettleBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getBoardAndStrikeDetails(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBoardStrikes(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiveBoards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNumLiveBoards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOptionBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOptionMarketParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSettlementParameters(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStrike(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStrikeAndBoard(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStrikeAndExpiry(strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(_exchangeAdapter: PromiseOrValue<string>, _liquidityPool: PromiseOrValue<string>, _optionPricer: PromiseOrValue<string>, _greekCache: PromiseOrValue<string>, _shortCollateral: PromiseOrValue<string>, _optionToken: PromiseOrValue<string>, _quoteAsset: PromiseOrValue<string>, _baseAsset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        liquidatePosition(positionId: PromiseOrValue<BigNumberish>, rewardBeneficiary: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openPosition(params: OptionMarket.TradeInputParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recoverFunds(token: PromiseOrValue<string>, recipient: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scaledLongsForBoard(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setBaseLimit(_baseLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBoardBaseIv(boardId: PromiseOrValue<BigNumberish>, baseIv: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBoardFrozen(boardId: PromiseOrValue<BigNumberish>, frozen: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOptionMarketParams(_optionMarketParams: OptionMarket.OptionMarketParametersStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setStrikeSkew(strikeId: PromiseOrValue<BigNumberish>, skew: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        settleExpiredBoard(boardId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        smClaim(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
