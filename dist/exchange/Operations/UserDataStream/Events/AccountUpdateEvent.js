"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateEvent = void 0;
const FuturesEvent_1 = require("./FuturesEvent");
class BalanceUpdate {
    constructor(data) {
        this.asset = data.a;
        this.walletBalance = data.wb;
        this.crossWalletBalance = data.cw;
    }
}
class PositionUpdate {
    constructor(data) {
        this.symbol = data.s;
        this.positionAmount = data.pa;
        this.entryPrice = data.ep;
        this.accumulatedRealized = data.cr;
        this.unrealizedPnL = data.up;
        this.marginType = data.mt;
        this.isolatedWallet = data.iw;
        this.positionSide = data.ps;
    }
}
class AccountUpdateEvent extends FuturesEvent_1.FuturesEvent {
    constructor(data) {
        super(data);
        this.balanceUpdates = [];
        this.positionUpdates = [];
        this.eventReasonType = data.a.m;
        if (data.a.B) {
            for (let balanceUpdate of data.a.B) {
                this.balanceUpdates.push(new BalanceUpdate(balanceUpdate));
            }
        }
        if (data.a.P) {
            for (let positionUpdate of data.a.P) {
                this.positionUpdates.push(new PositionUpdate(positionUpdate));
            }
        }
    }
}
exports.AccountUpdateEvent = AccountUpdateEvent;
//# sourceMappingURL=AccountUpdateEvent.js.map