"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarginCallEvent = void 0;
const FuturesEvent_1 = require("./FuturesEvent");
class MarginCallEvent extends FuturesEvent_1.FuturesEvent {
    constructor(data) {
        super(data);
        this.symbol = data.p.s;
        this.positionSide = data.p.ps;
        this.positionAmount = data.p.pa;
        this.marginType = data.p.mt;
        this.isolatedWallet = data.p.iw;
        this.markPrice = data.p.mp;
        this.unrealizedPnL = data.p.up;
        this.maintenanceMarginRequired = data.p.mm;
    }
}
exports.MarginCallEvent = MarginCallEvent;
//# sourceMappingURL=MarginCallEvent.js.map