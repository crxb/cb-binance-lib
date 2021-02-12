"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTradeUpdateEvent = void 0;
const FuturesEvent_1 = require("./FuturesEvent");
class OrderTradeUpdateEvent extends FuturesEvent_1.FuturesEvent {
    constructor(data) {
        super(data);
        this.symbol = data.o.s;
        this.clientOrderId = data.o.c;
        this.side = data.o.S;
        this.orderType = data.o.o;
        this.timeInForce = data.o.f;
        this.originalQuantity = data.o.q;
        this.originalPrice = data.o.p;
        this.averagePrice = data.o.ap;
        this.stopPrice = data.o.sp;
        this.executionType = data.o.x;
        this.orderStatus = data.o.X;
        this.orderId = data.o.i;
        this.orderLastFilledQuantity = data.o.l;
        this.orderFilledAccumulatedQuantity = data.o.z;
        this.lastFilledPrice = data.o.L;
        this.commissionAsset = data.o.N;
        this.commission = data.o.n;
        this.orderTradeTime = data.o.T;
        this.tradeId = data.o.t;
        this.bidsNotional = data.o.b;
        this.askNotional = data.o.a;
        this.isMaker = data.o.m;
        this.isReduceOnly = data.o.R;
        this.workingType = data.o.wt;
        this.originalOrderType = data.o.ot;
        this.positionSide = data.o.ps;
        this.isCloseAll = data.o.cp;
        this.activationPrice = data.o.AP;
        this.callbackRate = data.o.cr;
        this.realizedProfit = data.o.rp;
    }
}
exports.OrderTradeUpdateEvent = OrderTradeUpdateEvent;
//# sourceMappingURL=OrderTradeUpdateEvent.js.map