import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace OptionMarketViewer {
    type OptionMarketAddressesStruct = {
        liquidityPool: PromiseOrValue<string>;
        liquidityToken: PromiseOrValue<string>;
        greekCache: PromiseOrValue<string>;
        optionMarket: PromiseOrValue<string>;
        optionMarketPricer: PromiseOrValue<string>;
        optionToken: PromiseOrValue<string>;
        shortCollateral: PromiseOrValue<string>;
        poolHedger: PromiseOrValue<string>;
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
        string
    ] & {
        liquidityPool: string;
        liquidityToken: string;
        greekCache: string;
        optionMarket: string;
        optionMarketPricer: string;
        optionToken: string;
        shortCollateral: string;
        poolHedger: string;
        quoteAsset: string;
        baseAsset: string;
    };
    type StrikeViewStruct = {
        strikeId: PromiseOrValue<BigNumberish>;
        boardId: PromiseOrValue<BigNumberish>;
        strikePrice: PromiseOrValue<BigNumberish>;
        skew: PromiseOrValue<BigNumberish>;
        forceCloseSkew: PromiseOrValue<BigNumberish>;
        cachedGreeks: OptionGreekCache.StrikeGreeksStruct;
        baseReturnedRatio: PromiseOrValue<BigNumberish>;
        longCallOpenInterest: PromiseOrValue<BigNumberish>;
        longPutOpenInterest: PromiseOrValue<BigNumberish>;
        shortCallBaseOpenInterest: PromiseOrValue<BigNumberish>;
        shortCallQuoteOpenInterest: PromiseOrValue<BigNumberish>;
        shortPutOpenInterest: PromiseOrValue<BigNumberish>;
    };
    type StrikeViewStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        OptionGreekCache.StrikeGreeksStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        strikeId: BigNumber;
        boardId: BigNumber;
        strikePrice: BigNumber;
        skew: BigNumber;
        forceCloseSkew: BigNumber;
        cachedGreeks: OptionGreekCache.StrikeGreeksStructOutput;
        baseReturnedRatio: BigNumber;
        longCallOpenInterest: BigNumber;
        longPutOpenInterest: BigNumber;
        shortCallBaseOpenInterest: BigNumber;
        shortCallQuoteOpenInterest: BigNumber;
        shortPutOpenInterest: BigNumber;
    };
    type BoardViewStruct = {
        market: PromiseOrValue<string>;
        boardId: PromiseOrValue<BigNumberish>;
        expiry: PromiseOrValue<BigNumberish>;
        baseIv: PromiseOrValue<BigNumberish>;
        priceAtExpiry: PromiseOrValue<BigNumberish>;
        isPaused: PromiseOrValue<boolean>;
        forceCloseGwavIV: PromiseOrValue<BigNumberish>;
        netGreeks: OptionGreekCache.NetGreeksStruct;
        strikes: OptionMarketViewer.StrikeViewStruct[];
    };
    type BoardViewStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        OptionGreekCache.NetGreeksStructOutput,
        OptionMarketViewer.StrikeViewStructOutput[]
    ] & {
        market: string;
        boardId: BigNumber;
        expiry: BigNumber;
        baseIv: BigNumber;
        priceAtExpiry: BigNumber;
        isPaused: boolean;
        forceCloseGwavIV: BigNumber;
        netGreeks: OptionGreekCache.NetGreeksStructOutput;
        strikes: OptionMarketViewer.StrikeViewStructOutput[];
    };
    type LiquidityBalanceAndAllowanceStruct = {
        token: PromiseOrValue<string>;
        balance: PromiseOrValue<BigNumberish>;
        allowance: PromiseOrValue<BigNumberish>;
    };
    type LiquidityBalanceAndAllowanceStructOutput = [
        string,
        BigNumber,
        BigNumber
    ] & {
        token: string;
        balance: BigNumber;
        allowance: BigNumber;
    };
    type MarketParametersStruct = {
        optionMarketParams: OptionMarket.OptionMarketParametersStruct;
        lpParams: LiquidityPool.LiquidityPoolParametersStruct;
        greekCacheParams: OptionGreekCache.GreekCacheParametersStruct;
        forceCloseParams: OptionGreekCache.ForceCloseParametersStruct;
        minCollatParams: OptionGreekCache.MinCollateralParametersStruct;
        pricingParams: OptionMarketPricer.PricingParametersStruct;
        tradeLimitParams: OptionMarketPricer.TradeLimitParametersStruct;
        varianceFeeParams: OptionMarketPricer.VarianceFeeParametersStruct;
        partialCollatParams: OptionToken.PartialCollateralParametersStruct;
        poolHedgerParams: PoolHedger.PoolHedgerParametersStruct;
    };
    type MarketParametersStructOutput = [
        OptionMarket.OptionMarketParametersStructOutput,
        LiquidityPool.LiquidityPoolParametersStructOutput,
        OptionGreekCache.GreekCacheParametersStructOutput,
        OptionGreekCache.ForceCloseParametersStructOutput,
        OptionGreekCache.MinCollateralParametersStructOutput,
        OptionMarketPricer.PricingParametersStructOutput,
        OptionMarketPricer.TradeLimitParametersStructOutput,
        OptionMarketPricer.VarianceFeeParametersStructOutput,
        OptionToken.PartialCollateralParametersStructOutput,
        PoolHedger.PoolHedgerParametersStructOutput
    ] & {
        optionMarketParams: OptionMarket.OptionMarketParametersStructOutput;
        lpParams: LiquidityPool.LiquidityPoolParametersStructOutput;
        greekCacheParams: OptionGreekCache.GreekCacheParametersStructOutput;
        forceCloseParams: OptionGreekCache.ForceCloseParametersStructOutput;
        minCollatParams: OptionGreekCache.MinCollateralParametersStructOutput;
        pricingParams: OptionMarketPricer.PricingParametersStructOutput;
        tradeLimitParams: OptionMarketPricer.TradeLimitParametersStructOutput;
        varianceFeeParams: OptionMarketPricer.VarianceFeeParametersStructOutput;
        partialCollatParams: OptionToken.PartialCollateralParametersStructOutput;
        poolHedgerParams: PoolHedger.PoolHedgerParametersStructOutput;
    };
    type MarketViewWithBoardsStruct = {
        isPaused: PromiseOrValue<boolean>;
        totalQueuedDeposits: PromiseOrValue<BigNumberish>;
        totalQueuedWithdrawals: PromiseOrValue<BigNumberish>;
        tokenPrice: PromiseOrValue<BigNumberish>;
        marketAddresses: OptionMarketViewer.OptionMarketAddressesStruct;
        marketParameters: OptionMarketViewer.MarketParametersStruct;
        liquidity: LiquidityPool.LiquidityStruct;
        globalNetGreeks: OptionGreekCache.NetGreeksStruct;
        liveBoards: OptionMarketViewer.BoardViewStruct[];
        exchangeParams: SynthetixAdapter.ExchangeParamsStruct;
    };
    type MarketViewWithBoardsStructOutput = [
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        OptionMarketViewer.OptionMarketAddressesStructOutput,
        OptionMarketViewer.MarketParametersStructOutput,
        LiquidityPool.LiquidityStructOutput,
        OptionGreekCache.NetGreeksStructOutput,
        OptionMarketViewer.BoardViewStructOutput[],
        SynthetixAdapter.ExchangeParamsStructOutput
    ] & {
        isPaused: boolean;
        totalQueuedDeposits: BigNumber;
        totalQueuedWithdrawals: BigNumber;
        tokenPrice: BigNumber;
        marketAddresses: OptionMarketViewer.OptionMarketAddressesStructOutput;
        marketParameters: OptionMarketViewer.MarketParametersStructOutput;
        liquidity: LiquidityPool.LiquidityStructOutput;
        globalNetGreeks: OptionGreekCache.NetGreeksStructOutput;
        liveBoards: OptionMarketViewer.BoardViewStructOutput[];
        exchangeParams: SynthetixAdapter.ExchangeParamsStructOutput;
    };
    type MarketViewStruct = {
        isPaused: PromiseOrValue<boolean>;
        totalQueuedDeposits: PromiseOrValue<BigNumberish>;
        totalQueuedWithdrawals: PromiseOrValue<BigNumberish>;
        tokenPrice: PromiseOrValue<BigNumberish>;
        marketAddresses: OptionMarketViewer.OptionMarketAddressesStruct;
        marketParameters: OptionMarketViewer.MarketParametersStruct;
        liquidity: LiquidityPool.LiquidityStruct;
        globalNetGreeks: OptionGreekCache.NetGreeksStruct;
        exchangeParams: SynthetixAdapter.ExchangeParamsStruct;
    };
    type MarketViewStructOutput = [
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        OptionMarketViewer.OptionMarketAddressesStructOutput,
        OptionMarketViewer.MarketParametersStructOutput,
        LiquidityPool.LiquidityStructOutput,
        OptionGreekCache.NetGreeksStructOutput,
        SynthetixAdapter.ExchangeParamsStructOutput
    ] & {
        isPaused: boolean;
        totalQueuedDeposits: BigNumber;
        totalQueuedWithdrawals: BigNumber;
        tokenPrice: BigNumber;
        marketAddresses: OptionMarketViewer.OptionMarketAddressesStructOutput;
        marketParameters: OptionMarketViewer.MarketParametersStructOutput;
        liquidity: LiquidityPool.LiquidityStructOutput;
        globalNetGreeks: OptionGreekCache.NetGreeksStructOutput;
        exchangeParams: SynthetixAdapter.ExchangeParamsStructOutput;
    };
    type MarketsViewStruct = {
        addressResolver: PromiseOrValue<string>;
        isPaused: PromiseOrValue<boolean>;
        markets: OptionMarketViewer.MarketViewStruct[];
    };
    type MarketsViewStructOutput = [
        string,
        boolean,
        OptionMarketViewer.MarketViewStructOutput[]
    ] & {
        addressResolver: string;
        isPaused: boolean;
        markets: OptionMarketViewer.MarketViewStructOutput[];
    };
    type MarketOptionPositionsStruct = {
        market: PromiseOrValue<string>;
        positions: OptionToken.OptionPositionStruct[];
    };
    type MarketOptionPositionsStructOutput = [
        string,
        OptionToken.OptionPositionStructOutput[]
    ] & {
        market: string;
        positions: OptionToken.OptionPositionStructOutput[];
    };
}
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
        rateAndCarry: PromiseOrValue<BigNumberish>;
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
        rateAndCarry: BigNumber;
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
}
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
}
export declare namespace LiquidityPool {
    type LiquidityPoolParametersStruct = {
        minDepositWithdraw: PromiseOrValue<BigNumberish>;
        depositDelay: PromiseOrValue<BigNumberish>;
        withdrawalDelay: PromiseOrValue<BigNumberish>;
        withdrawalFee: PromiseOrValue<BigNumberish>;
        liquidityCBThreshold: PromiseOrValue<BigNumberish>;
        liquidityCBTimeout: PromiseOrValue<BigNumberish>;
        ivVarianceCBThreshold: PromiseOrValue<BigNumberish>;
        skewVarianceCBThreshold: PromiseOrValue<BigNumberish>;
        ivVarianceCBTimeout: PromiseOrValue<BigNumberish>;
        skewVarianceCBTimeout: PromiseOrValue<BigNumberish>;
        guardianMultisig: PromiseOrValue<string>;
        guardianDelay: PromiseOrValue<BigNumberish>;
        boardSettlementCBTimeout: PromiseOrValue<BigNumberish>;
        maxFeePaid: PromiseOrValue<BigNumberish>;
    };
    type LiquidityPoolParametersStructOutput = [
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
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        minDepositWithdraw: BigNumber;
        depositDelay: BigNumber;
        withdrawalDelay: BigNumber;
        withdrawalFee: BigNumber;
        liquidityCBThreshold: BigNumber;
        liquidityCBTimeout: BigNumber;
        ivVarianceCBThreshold: BigNumber;
        skewVarianceCBThreshold: BigNumber;
        ivVarianceCBTimeout: BigNumber;
        skewVarianceCBTimeout: BigNumber;
        guardianMultisig: string;
        guardianDelay: BigNumber;
        boardSettlementCBTimeout: BigNumber;
        maxFeePaid: BigNumber;
    };
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
}
export declare namespace OptionToken {
    type PartialCollateralParametersStruct = {
        penaltyRatio: PromiseOrValue<BigNumberish>;
        liquidatorFeeRatio: PromiseOrValue<BigNumberish>;
        smFeeRatio: PromiseOrValue<BigNumberish>;
        minLiquidationFee: PromiseOrValue<BigNumberish>;
    };
    type PartialCollateralParametersStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        penaltyRatio: BigNumber;
        liquidatorFeeRatio: BigNumber;
        smFeeRatio: BigNumber;
        minLiquidationFee: BigNumber;
    };
    type OptionPositionStruct = {
        positionId: PromiseOrValue<BigNumberish>;
        strikeId: PromiseOrValue<BigNumberish>;
        optionType: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
        collateral: PromiseOrValue<BigNumberish>;
        state: PromiseOrValue<BigNumberish>;
    };
    type OptionPositionStructOutput = [
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        number
    ] & {
        positionId: BigNumber;
        strikeId: BigNumber;
        optionType: number;
        amount: BigNumber;
        collateral: BigNumber;
        state: number;
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
export interface AvalonOptionMarketViewerInterface extends utils.Interface {
    functions: {
        "acceptOwnership()": FunctionFragment;
        "addMarket((address,address,address,address,address,address,address,address,address,address))": FunctionFragment;
        "getBoard(address,uint256)": FunctionFragment;
        "getBoardForBaseKey(bytes32,uint256)": FunctionFragment;
        "getBoardForStrikeId(address,uint256)": FunctionFragment;
        "getLiquidityBalancesAndAllowances(address[],address)": FunctionFragment;
        "getLiveBoards(address)": FunctionFragment;
        "getMarket(address)": FunctionFragment;
        "getMarketAddresses()": FunctionFragment;
        "getMarketForBaseKey(bytes32)": FunctionFragment;
        "getMarkets(address[])": FunctionFragment;
        "getOwnerPositions(address)": FunctionFragment;
        "getOwnerPositionsInRange(address,address,uint256,uint256)": FunctionFragment;
        "init(address)": FunctionFragment;
        "initialized()": FunctionFragment;
        "marketAddresses(address)": FunctionFragment;
        "nominateNewOwner(address)": FunctionFragment;
        "nominatedOwner()": FunctionFragment;
        "optionMarkets(uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "removeMarket(address)": FunctionFragment;
        "synthetixAdapter()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptOwnership" | "addMarket" | "getBoard" | "getBoardForBaseKey" | "getBoardForStrikeId" | "getLiquidityBalancesAndAllowances" | "getLiveBoards" | "getMarket" | "getMarketAddresses" | "getMarketForBaseKey" | "getMarkets" | "getOwnerPositions" | "getOwnerPositionsInRange" | "init" | "initialized" | "marketAddresses" | "nominateNewOwner" | "nominatedOwner" | "optionMarkets" | "owner" | "removeMarket" | "synthetixAdapter"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "addMarket", values: [OptionMarketViewer.OptionMarketAddressesStruct]): string;
    encodeFunctionData(functionFragment: "getBoard", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getBoardForBaseKey", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getBoardForStrikeId", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getLiquidityBalancesAndAllowances", values: [PromiseOrValue<string>[], PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getLiveBoards", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getMarket", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getMarketAddresses", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMarketForBaseKey", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getMarkets", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "getOwnerPositions", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getOwnerPositionsInRange", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "init", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "marketAddresses", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominateNewOwner", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nominatedOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "optionMarkets", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeMarket", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "synthetixAdapter", values?: undefined): string;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBoard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBoardForBaseKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBoardForStrikeId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidityBalancesAndAllowances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiveBoards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMarketAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMarketForBaseKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOwnerPositions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOwnerPositionsInRange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominateNewOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nominatedOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "optionMarkets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeMarket", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "synthetixAdapter", data: BytesLike): Result;
    events: {
        "MarketAdded(tuple)": EventFragment;
        "MarketRemoved(address)": EventFragment;
        "OwnerChanged(address,address)": EventFragment;
        "OwnerNominated(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MarketAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MarketRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
}
export interface MarketAddedEventObject {
    market: OptionMarketViewer.OptionMarketAddressesStructOutput;
}
export type MarketAddedEvent = TypedEvent<[
    OptionMarketViewer.OptionMarketAddressesStructOutput
], MarketAddedEventObject>;
export type MarketAddedEventFilter = TypedEventFilter<MarketAddedEvent>;
export interface MarketRemovedEventObject {
    market: string;
}
export type MarketRemovedEvent = TypedEvent<[string], MarketRemovedEventObject>;
export type MarketRemovedEventFilter = TypedEventFilter<MarketRemovedEvent>;
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
export interface AvalonOptionMarketViewer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AvalonOptionMarketViewerInterface;
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
        addMarket(newMarketAddresses: OptionMarketViewer.OptionMarketAddressesStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getBoard(market: PromiseOrValue<string>, boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OptionMarketViewer.BoardViewStructOutput]>;
        getBoardForBaseKey(baseKey: PromiseOrValue<BytesLike>, boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OptionMarketViewer.BoardViewStructOutput]>;
        getBoardForStrikeId(market: PromiseOrValue<string>, strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OptionMarketViewer.BoardViewStructOutput]>;
        getLiquidityBalancesAndAllowances(markets: PromiseOrValue<string>[], account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[OptionMarketViewer.LiquidityBalanceAndAllowanceStructOutput[]]>;
        getLiveBoards(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            OptionMarketViewer.BoardViewStructOutput[]
        ] & {
            marketBoards: OptionMarketViewer.BoardViewStructOutput[];
        }>;
        getMarket(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[OptionMarketViewer.MarketViewWithBoardsStructOutput]>;
        getMarketAddresses(overrides?: CallOverrides): Promise<[OptionMarketViewer.OptionMarketAddressesStructOutput[]]>;
        getMarketForBaseKey(baseKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            OptionMarketViewer.MarketViewWithBoardsStructOutput
        ] & {
            market: OptionMarketViewer.MarketViewWithBoardsStructOutput;
        }>;
        getMarkets(markets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[
            OptionMarketViewer.MarketsViewStructOutput
        ] & {
            marketsView: OptionMarketViewer.MarketsViewStructOutput;
        }>;
        getOwnerPositions(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[OptionMarketViewer.MarketOptionPositionsStructOutput[]]>;
        getOwnerPositionsInRange(market: PromiseOrValue<string>, account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, limit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[OptionToken.OptionPositionStructOutput[]]>;
        init(_synthetixAdapter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialized(overrides?: CallOverrides): Promise<[boolean]>;
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
            string
        ] & {
            liquidityPool: string;
            liquidityToken: string;
            greekCache: string;
            optionMarket: string;
            optionMarketPricer: string;
            optionToken: string;
            shortCollateral: string;
            poolHedger: string;
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
        synthetixAdapter(overrides?: CallOverrides): Promise<[string]>;
    };
    acceptOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addMarket(newMarketAddresses: OptionMarketViewer.OptionMarketAddressesStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getBoard(market: PromiseOrValue<string>, boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarketViewer.BoardViewStructOutput>;
    getBoardForBaseKey(baseKey: PromiseOrValue<BytesLike>, boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarketViewer.BoardViewStructOutput>;
    getBoardForStrikeId(market: PromiseOrValue<string>, strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarketViewer.BoardViewStructOutput>;
    getLiquidityBalancesAndAllowances(markets: PromiseOrValue<string>[], account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<OptionMarketViewer.LiquidityBalanceAndAllowanceStructOutput[]>;
    getLiveBoards(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<OptionMarketViewer.BoardViewStructOutput[]>;
    getMarket(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<OptionMarketViewer.MarketViewWithBoardsStructOutput>;
    getMarketAddresses(overrides?: CallOverrides): Promise<OptionMarketViewer.OptionMarketAddressesStructOutput[]>;
    getMarketForBaseKey(baseKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<OptionMarketViewer.MarketViewWithBoardsStructOutput>;
    getMarkets(markets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<OptionMarketViewer.MarketsViewStructOutput>;
    getOwnerPositions(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<OptionMarketViewer.MarketOptionPositionsStructOutput[]>;
    getOwnerPositionsInRange(market: PromiseOrValue<string>, account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, limit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionToken.OptionPositionStructOutput[]>;
    init(_synthetixAdapter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialized(overrides?: CallOverrides): Promise<boolean>;
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
        string
    ] & {
        liquidityPool: string;
        liquidityToken: string;
        greekCache: string;
        optionMarket: string;
        optionMarketPricer: string;
        optionToken: string;
        shortCollateral: string;
        poolHedger: string;
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
    synthetixAdapter(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        acceptOwnership(overrides?: CallOverrides): Promise<void>;
        addMarket(newMarketAddresses: OptionMarketViewer.OptionMarketAddressesStruct, overrides?: CallOverrides): Promise<void>;
        getBoard(market: PromiseOrValue<string>, boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarketViewer.BoardViewStructOutput>;
        getBoardForBaseKey(baseKey: PromiseOrValue<BytesLike>, boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarketViewer.BoardViewStructOutput>;
        getBoardForStrikeId(market: PromiseOrValue<string>, strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionMarketViewer.BoardViewStructOutput>;
        getLiquidityBalancesAndAllowances(markets: PromiseOrValue<string>[], account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<OptionMarketViewer.LiquidityBalanceAndAllowanceStructOutput[]>;
        getLiveBoards(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<OptionMarketViewer.BoardViewStructOutput[]>;
        getMarket(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<OptionMarketViewer.MarketViewWithBoardsStructOutput>;
        getMarketAddresses(overrides?: CallOverrides): Promise<OptionMarketViewer.OptionMarketAddressesStructOutput[]>;
        getMarketForBaseKey(baseKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<OptionMarketViewer.MarketViewWithBoardsStructOutput>;
        getMarkets(markets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<OptionMarketViewer.MarketsViewStructOutput>;
        getOwnerPositions(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<OptionMarketViewer.MarketOptionPositionsStructOutput[]>;
        getOwnerPositionsInRange(market: PromiseOrValue<string>, account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, limit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<OptionToken.OptionPositionStructOutput[]>;
        init(_synthetixAdapter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        initialized(overrides?: CallOverrides): Promise<boolean>;
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
            string
        ] & {
            liquidityPool: string;
            liquidityToken: string;
            greekCache: string;
            optionMarket: string;
            optionMarketPricer: string;
            optionToken: string;
            shortCollateral: string;
            poolHedger: string;
            quoteAsset: string;
            baseAsset: string;
        }>;
        nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        nominatedOwner(overrides?: CallOverrides): Promise<string>;
        optionMarkets(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        removeMarket(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        synthetixAdapter(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "MarketAdded(tuple)"(market?: null): MarketAddedEventFilter;
        MarketAdded(market?: null): MarketAddedEventFilter;
        "MarketRemoved(address)"(market?: null): MarketRemovedEventFilter;
        MarketRemoved(market?: null): MarketRemovedEventFilter;
        "OwnerChanged(address,address)"(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
        "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
        OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
    };
    estimateGas: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addMarket(newMarketAddresses: OptionMarketViewer.OptionMarketAddressesStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getBoard(market: PromiseOrValue<string>, boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getBoardForBaseKey(baseKey: PromiseOrValue<BytesLike>, boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getBoardForStrikeId(market: PromiseOrValue<string>, strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidityBalancesAndAllowances(markets: PromiseOrValue<string>[], account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLiveBoards(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getMarket(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getMarketAddresses(overrides?: CallOverrides): Promise<BigNumber>;
        getMarketForBaseKey(baseKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getMarkets(markets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        getOwnerPositions(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getOwnerPositionsInRange(market: PromiseOrValue<string>, account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, limit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        init(_synthetixAdapter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialized(overrides?: CallOverrides): Promise<BigNumber>;
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
        synthetixAdapter(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addMarket(newMarketAddresses: OptionMarketViewer.OptionMarketAddressesStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getBoard(market: PromiseOrValue<string>, boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBoardForBaseKey(baseKey: PromiseOrValue<BytesLike>, boardId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBoardForStrikeId(market: PromiseOrValue<string>, strikeId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidityBalancesAndAllowances(markets: PromiseOrValue<string>[], account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiveBoards(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMarket(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMarketAddresses(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMarketForBaseKey(baseKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMarkets(markets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOwnerPositions(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOwnerPositionsInRange(market: PromiseOrValue<string>, account: PromiseOrValue<string>, start: PromiseOrValue<BigNumberish>, limit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        init(_synthetixAdapter: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        synthetixAdapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
