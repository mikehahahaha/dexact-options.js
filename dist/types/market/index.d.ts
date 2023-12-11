import { BigNumber } from '@ethersproject/bignumber';
import { PopulatedTransaction } from '@ethersproject/contracts';
import { Block } from '@ethersproject/providers';
import { PoolHedgerParams } from '../admin';
import { Board, BoardQuotes } from '../board';
import { DataSource, LyraMarketContractId } from '../constants/contracts';
import { LyraMarketContractMap } from '../constants/mappings';
import { SnapshotOptions } from '../constants/snapshots';
import { MarketViewWithBoardsStructOutput } from '../constants/views';
import { GMXAdapter } from '../contracts/newport/typechain/NewportGMXAdapter';
import { GMXFuturesPoolHedger } from '../contracts/newport/typechain/NewportGMXFuturesPoolHedger';
import { SNXPerpsV2PoolHedger } from '../contracts/newport/typechain/NewportSNXPerpsV2PoolHedger';
import { SNXPerpV2Adapter } from '../contracts/newport/typechain/NewportSNXPerpV2Adapter';
import { LiquidityDeposit } from '../liquidity_deposit';
import { LiquidityWithdrawal } from '../liquidity_withdrawal';
import Lyra, { Version } from '../lyra';
import { Option } from '../option';
import { Quote, QuoteOptions } from '../quote';
import { Strike } from '../strike';
import { Trade, TradeOptions } from '../trade';
export type MarketToken = {
    address: string;
    symbol: string;
    decimals: number;
};
export type MarketContractAddresses = {
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
export type MarketLiquiditySnapshot = {
    tvl: BigNumber;
    freeLiquidity: BigNumber;
    burnableLiquidity: BigNumber;
    utilization: number;
    reservedCollatLiquidity: BigNumber;
    pendingDeltaLiquidity: BigNumber;
    usedDeltaLiquidity: BigNumber;
    tokenPrice: BigNumber;
    pendingDeposits: BigNumber;
    pendingWithdrawals: BigNumber;
    timestamp: number;
};
export type MarketNetGreeksSnapshot = {
    poolNetDelta: BigNumber;
    hedgerNetDelta: BigNumber;
    netDelta: BigNumber;
    netStdVega: BigNumber;
    timestamp: number;
};
export type MarketTradingVolumeSnapshot = {
    premiumVolume: BigNumber;
    notionalVolume: BigNumber;
    totalShortOpenInterestUSD: BigNumber;
    vaultFees: BigNumber;
    vaultFeeComponents: {
        spotPriceFees: BigNumber;
        optionPriceFees: BigNumber;
        vegaUtilFees: BigNumber;
        varianceFees: BigNumber;
        forceCloseFees: BigNumber;
        liquidationFees: BigNumber;
    };
    totalPremiumVolume: BigNumber;
    totalNotionalVolume: BigNumber;
    liquidatorFees: BigNumber;
    smLiquidationFees: BigNumber;
    startTimestamp: number;
    endTimestamp: number;
};
export type MarketSpotCandle = {
    period: number;
    open: BigNumber;
    high: BigNumber;
    low: BigNumber;
    close: BigNumber;
    startTimestamp: number;
    startBlockNumber: number;
    endTimestamp: number;
};
export type PoolHedgerView = GMXFuturesPoolHedger.GMXFuturesPoolHedgerViewStructOutput | SNXPerpsV2PoolHedger.HedgerStateStructOutput;
export type ExchangeAdapterView = GMXAdapter.GMXAdapterStateStructOutput | SNXPerpV2Adapter.MarketAdapterStateStructOutput;
export type MarketQuotes = {
    boards: BoardQuotes[];
    market: Market;
};
export type MarketTradeOptions = Omit<TradeOptions, 'minOrMaxPremium' | 'slippage'>;
export type MarketParameters = {
    rateAndCarry: BigNumber;
    optionPriceFee1xPoint: number;
    optionPriceFee2xPoint: number;
    optionPriceFeeCoefficient: BigNumber;
    spotPriceFee1xPoint: number;
    spotPriceFee2xPoint: number;
    spotPriceFeeCoefficient: BigNumber;
    vegaFeeCoefficient: BigNumber;
    minDelta: BigNumber;
    shockVolA: BigNumber;
    shockVolB: BigNumber;
    shockVolPointA: BigNumber;
    shockVolPointB: BigNumber;
    minStaticQuoteCollateral: BigNumber;
    minStaticBaseCollateral: BigNumber;
    callSpotPriceShock: BigNumber;
    putSpotPriceShock: BigNumber;
    standardSize: BigNumber;
    skewAdjustmentFactor: BigNumber;
    minForceCloseDelta: BigNumber;
    shortPostCutoffVolShock: BigNumber;
    shortVolShock: BigNumber;
    longPostCutoffVolShock: BigNumber;
    longVolShock: BigNumber;
    shortSpotMin: BigNumber;
    absMinSkew: BigNumber;
    absMaxSkew: BigNumber;
    minSkew: BigNumber;
    maxSkew: BigNumber;
    maxBaseIv: BigNumber;
    maxVol: BigNumber;
    minBaseIv: BigNumber;
    minVol: BigNumber;
    forceCloseVarianceFeeCoefficient: BigNumber;
    defaultVarianceFeeCoefficient: BigNumber;
    minimumStaticVega: BigNumber;
    vegaCoefficient: BigNumber;
    referenceSkew: BigNumber;
    minimumStaticSkewAdjustment: BigNumber;
    skewAdjustmentCoefficient: BigNumber;
    minimumStaticIvVariance: BigNumber;
    ivVarianceCoefficient: BigNumber;
    withdrawalFee: BigNumber;
    depositDelay: number;
    withdrawalDelay: number;
    tradingCutoff: number;
    freeLiquidity: BigNumber;
    NAV: BigNumber;
    tokenPrice: BigNumber;
    netStdVega: BigNumber;
    netDelta: BigNumber;
    hedgerView: PoolHedgerView | null;
    adapterView: ExchangeAdapterView | null;
    isMarketPaused: boolean;
    isGlobalPaused: boolean;
    owner: string;
    referenceSpotPrice: BigNumber;
    poolHedgerParams: PoolHedgerParams | null;
};
export declare class Market {
    private liveBoardsMap;
    __source: DataSource;
    __data: MarketViewWithBoardsStructOutput;
    lyra: Lyra;
    block: Block;
    address: string;
    name: string;
    quoteToken: MarketToken;
    baseToken: MarketToken;
    liquidityToken: MarketToken;
    isPaused: boolean;
    openInterest: BigNumber;
    spotPrice: BigNumber;
    contractAddresses: MarketContractAddresses;
    params: MarketParameters;
    isBaseCollateralEnabled: boolean;
    constructor(lyra: Lyra, marketView: MarketViewWithBoardsStructOutput, isGlobalPaused: boolean, owner: string, tokenPrice: BigNumber, block: Block, hedgerView?: PoolHedgerView, adapterView?: ExchangeAdapterView, poolHedgerParams?: PoolHedgerParams, baseLimit?: BigNumber | null);
    private static getFields;
    static get(lyra: Lyra, marketAddressOrName: string): Promise<Market>;
    static getMany(lyra: Lyra, marketAddresses: string[]): Promise<Market[]>;
    static getAll(lyra: Lyra): Promise<Market[]>;
    static find(markets: Market[], marketAddressOrName: string): Market | null;
    refresh(): Promise<Market>;
    isEqual(marketAddressOrName: string): boolean;
    liveBoards(): Board[];
    liveBoard(boardId: number): Board;
    board(boardId: number): Promise<Board>;
    liveStrike(strikeId: number): Strike;
    strike(strikeId: number): Promise<Strike>;
    liveOption(strikeId: number, isCall: boolean): Option;
    option(strikeId: number, isCall: boolean): Promise<Option>;
    quote(strikeId: number, isCall: boolean, isBuy: boolean, size: BigNumber, options?: QuoteOptions): Promise<Quote>;
    quoteSync(strikeId: number, isCall: boolean, isBuy: boolean, size: BigNumber, options?: QuoteOptions): Quote;
    quoteAll(size: BigNumber, options?: QuoteOptions): Promise<MarketQuotes>;
    quoteAllSync(size: BigNumber, options?: QuoteOptions): MarketQuotes;
    contract<C extends LyraMarketContractId, V extends Version>(contractId: C): LyraMarketContractMap<V, C>;
    trade(owner: string, strikeId: number, isCall: boolean, isBuy: boolean, size: BigNumber, slippage: number, options?: MarketTradeOptions): Promise<Trade>;
    approveDeposit(owner: string, amountQuote: BigNumber): PopulatedTransaction;
    initiateDeposit(beneficiary: string, amountQuote: BigNumber): PopulatedTransaction;
    initiateWithdraw(beneficiary: string, amountLiquidityTokens: BigNumber): PopulatedTransaction;
    approveTradeQuote(owner: string, amountQuote: BigNumber): PopulatedTransaction;
    approveTradeBase(owner: string, amountBase: BigNumber): PopulatedTransaction;
    liquidity(): Promise<MarketLiquiditySnapshot>;
    netGreeks(): Promise<MarketNetGreeksSnapshot>;
    liquidityHistory(options?: SnapshotOptions): Promise<MarketLiquiditySnapshot[]>;
    netGreeksHistory(options?: SnapshotOptions): Promise<MarketNetGreeksSnapshot[]>;
    tradingVolumeHistory(options?: SnapshotOptions): Promise<MarketTradingVolumeSnapshot[]>;
    spotPriceHistory(options?: SnapshotOptions): Promise<MarketSpotCandle[]>;
    owner(): Promise<string>;
    deposits(owner: string): Promise<LiquidityDeposit[]>;
    withdrawals(owner: string): Promise<LiquidityWithdrawal[]>;
}