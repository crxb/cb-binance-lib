import {FuturesEvent} from "./FuturesEvent";

export class OrderTradeUpdateEvent extends FuturesEvent {
    symbol: string;
    clientOrderId: string;
    side: string;
    orderType: string;
    timeInForce: string;
    originalQuantity: string;
    originalPrice: string;
    averagePrice: string;
    stopPrice: string;
    executionType: string;
    orderStatus: string;
    orderId: number;
    orderLastFilledQuantity: string;
    orderFilledAccumulatedQuantity: string;
    lastFilledPrice: string;
    commissionAsset: string;
    commission: string;
    orderTradeTime: number;
    tradeId: number;
    bidsNotional: string;
    askNotional: string;
    isMaker: boolean;
    isReduceOnly: boolean;
    workingType: string;
    originalOrderType: string;
    positionSide: string;
    isCloseAll: boolean;
    activationPrice: string;
    callbackRate: string;
    realizedProfit: string;

    constructor(data: any) {
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
