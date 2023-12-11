"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bn_1 = require("../constants/bn");
function getMaxLoss(trade) {
    if (trade.isCall && trade.isBuy) {
        return trade.premium;
    }
    else if (trade.isCall && !trade.isBuy) {
        return bn_1.MAX_BN;
    }
    else if (!trade.isCall && trade.isBuy) {
        return trade.premium;
    }
    else {
        return trade.strikePrice.sub(trade.pricePerOption).mul(trade.size).div(bn_1.UNIT);
    }
}
exports.default = getMaxLoss;
//# sourceMappingURL=getMaxLoss.js.map