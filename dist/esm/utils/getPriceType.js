import { PriceType } from './getQuoteSpotPrice';
export default function getPriceType(isCall, isForceClose, isLong, isOpen) {
    // LONG_CALL or SHORT_PUT
    if ((isLong && isCall) || (!isLong && !isCall)) {
        return isOpen ? PriceType.MAX_PRICE : isForceClose ? PriceType.FORCE_MIN : PriceType.MIN_PRICE;
    }
    else {
        return isOpen ? PriceType.MIN_PRICE : isForceClose ? PriceType.FORCE_MAX : PriceType.MAX_PRICE;
    }
}
//# sourceMappingURL=getPriceType.js.map