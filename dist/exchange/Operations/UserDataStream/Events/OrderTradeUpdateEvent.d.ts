import { FuturesEvent } from "./FuturesEvent";
export declare class OrderTradeUpdateEvent extends FuturesEvent {
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
    constructor(data: any);
}
