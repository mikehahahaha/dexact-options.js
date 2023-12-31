function erf(x) {
    // constants
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;
    // Save the sign of x
    let sign = 1;
    if (x < 0) {
        sign = -1;
    }
    x = Math.abs(x);
    // A&S formula 7.1.26
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
}
export function stdNormalCDF(x) {
    return (1.0 - erf(-x / Math.sqrt(2))) / 2.0;
}
export function stdNormal(x) {
    return Math.exp((-x * x) / 2.0) / Math.sqrt(2.0 * Math.PI);
}
export function d1(tAnnualised, vol, spot, strikePrice, rate) {
    return (Math.log(spot / strikePrice) + (rate + (vol * vol) / 2.0) * tAnnualised) / (vol * Math.sqrt(tAnnualised));
}
export function d2(tAnnualised, vol, spot, strikePrice, rate) {
    return d1(tAnnualised, vol, spot, strikePrice, rate) - vol * Math.sqrt(tAnnualised);
}
export function PV(value, rate, tAnnualised) {
    return value * Math.exp(-rate * tAnnualised);
}
export function callPrice(tAnnualised, vol, spot, strikePrice, rate) {
    return (stdNormalCDF(d1(tAnnualised, vol, spot, strikePrice, rate)) * spot -
        stdNormalCDF(d2(tAnnualised, vol, spot, strikePrice, rate)) * PV(strikePrice, rate, tAnnualised));
}
export function putPrice(tAnnualised, vol, spot, strikePrice, rate) {
    return (stdNormalCDF(-d2(tAnnualised, vol, spot, strikePrice, rate)) * PV(strikePrice, rate, tAnnualised) -
        stdNormalCDF(-d1(tAnnualised, vol, spot, strikePrice, rate)) * spot);
}
export function getBlackScholesPrice(tAnnualised, vol, spot, strikePrice, rate, isCall) {
    return isCall
        ? callPrice(tAnnualised, vol, spot, strikePrice, rate)
        : putPrice(tAnnualised, vol, spot, strikePrice, rate);
}
function callDelta(tAnnualised, vol, spot, strikePrice, rate) {
    return stdNormalCDF(d1(tAnnualised, vol, spot, strikePrice, rate));
}
function putDelta(tAnnualised, vol, spot, strikePrice, rate) {
    return callDelta(tAnnualised, vol, spot, strikePrice, rate) - 1.0;
}
export function getDelta(tAnnualised, vol, spot, strikePrice, rate, isCall) {
    return isCall
        ? callDelta(tAnnualised, vol, spot, strikePrice, rate)
        : putDelta(tAnnualised, vol, spot, strikePrice, rate);
}
export function getVega(tAnnualised, vol, spot, strikePrice, rate) {
    return (spot * stdNormal(d1(tAnnualised, vol, spot, strikePrice, rate)) * Math.sqrt(tAnnualised)) / 100;
}
export function getGamma(tAnnualised, vol, spot, strikePrice, rate) {
    return stdNormal(d1(tAnnualised, vol, spot, strikePrice, rate)) / (spot * vol * Math.sqrt(tAnnualised));
}
export function getTheta(tAnnualized, vol, spot, strikePrice, rate, isCall) {
    if (isCall) {
        return (((-spot * stdNormal(d1(tAnnualized, vol, spot, strikePrice, rate)) * vol) / (2 * Math.sqrt(tAnnualized)) -
            rate *
                strikePrice *
                Math.exp(-rate * tAnnualized) *
                stdNormalCDF(d2(tAnnualized, vol, spot, strikePrice, rate))) /
            365);
    }
    else {
        return (((-spot * stdNormal(d1(tAnnualized, vol, spot, strikePrice, rate)) * vol) / (2 * Math.sqrt(tAnnualized)) +
            rate *
                strikePrice *
                Math.exp(-rate * tAnnualized) *
                stdNormalCDF(-d2(tAnnualized, vol, spot, strikePrice, rate))) /
            365);
    }
}
export function getRho(tAnnualised, vol, spot, strikePrice, rate, isCall) {
    if (isCall) {
        return ((strikePrice *
            tAnnualised *
            Math.exp(-rate * tAnnualised) *
            stdNormalCDF(d2(tAnnualised, vol, spot, strikePrice, rate))) /
            100);
    }
    else {
        return ((-strikePrice *
            tAnnualised *
            Math.exp(-rate * tAnnualised) *
            stdNormalCDF(-d2(tAnnualised, vol, spot, strikePrice, rate))) /
            100);
    }
}
//# sourceMappingURL=blackScholes.js.map