import { UNIT, ZERO_BN } from '../constants/bn';
import getForceClosePrice from './getForceClosePrice';
import getIVImpactForTrade from './getIVImpactForTrade';
import getOptionPriceFee from './getOptionPriceFee';
import getPrice from './getPrice';
import getSpotPriceFee from './getSpotPriceFee';
import getVarianceFee from './getVarianceFee';
import getVegaUtilFee from './getVegaUtilFee';
export default function getQuoteIteration({ option, isBuy, size, spotPrice, baseIv, skew, netStdVega, preTradeAmmNetStdVega, isForceClose, }) {
    // Post-impact iv and skew
    const { newBaseIv: proposedNewBaseIv, newSkew } = getIVImpactForTrade(option, baseIv, skew, size, isBuy);
    // Calculate (force close) base bsc price per option
    const basePriceData = getPrice(option, spotPrice, proposedNewBaseIv, newSkew);
    const { price, volTraded } = isForceClose
        ? getForceClosePrice(option, isBuy, spotPrice, proposedNewBaseIv, newSkew)
        : basePriceData;
    const basePrice = basePriceData.price;
    // Penalty
    const forceClosePenalty = price
        .sub(basePrice)
        .mul(size)
        .div(UNIT)
        .mul(isBuy ? 1 : -1);
    // Option fee
    const optionPriceFee = getOptionPriceFee(option.board(), price, size);
    // Spot fee
    const spotPriceFee = getSpotPriceFee(option.board(), size, spotPrice);
    // Update AMM net standard vega
    const netStdVegaDiff = netStdVega
        .mul(size)
        .mul(isBuy ? 1 : -1)
        .div(UNIT);
    const postTradeAmmNetStdVega = preTradeAmmNetStdVega.add(netStdVegaDiff);
    // Vega util fee
    const vegaUtilFee = getVegaUtilFee(option.market(), preTradeAmmNetStdVega, postTradeAmmNetStdVega, volTraded, size);
    // Skip baseIv update on force close
    const newBaseIv = isForceClose ? baseIv : proposedNewBaseIv;
    // Variance fee
    const varianceFee = getVarianceFee(option, spotPrice, volTraded, newSkew, newBaseIv, size, isForceClose);
    // Total fees
    const fees = optionPriceFee.add(spotPriceFee).add(vegaUtilFee.vegaUtilFee).add(varianceFee.varianceFee);
    // Add fees for buys, subtract fees for sells
    const base = price.mul(size).div(UNIT);
    const premium = isBuy ? base.add(fees) : fees.lt(base) ? base.sub(fees) : ZERO_BN;
    return {
        premium,
        optionPriceFee,
        spotPriceFee,
        vegaUtilFee,
        varianceFee,
        forceClosePenalty,
        postTradeAmmNetStdVega,
        volTraded,
        newSkew,
        newBaseIv,
        spotPrice,
    };
}
//# sourceMappingURL=getQuoteIteration.js.map