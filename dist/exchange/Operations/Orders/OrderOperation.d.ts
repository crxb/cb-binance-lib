import { BinanceOperation } from "../BinanceOperation";
import { OrderSide, OrderType, PositionSide, ResponseType, TextBool, TimeInForce, WorkingType } from "../../Enums/FuturesEnums";
interface CreateParams {
    symbol: string;
    side: OrderSide;
    positionSide?: PositionSide;
    type: OrderType;
    timeInForce?: TimeInForce;
    quantity?: string;
    reduceOnly?: TextBool;
    price?: string;
    newClientOrderId?: string;
    stopPrice?: string;
    closePosition?: TextBool;
    activationPrice?: string;
    callbackRate?: string;
    workingType?: WorkingType;
    priceProtect?: TextBool;
    newOrderRespType?: ResponseType;
}
interface QueryParams {
    symbol: string;
    orderId?: number | string;
    origClientOrderId?: string;
}
interface CancelParams {
    symbol: string;
    orderId?: number | string;
    origClientOrderId?: string;
}
interface CancelAllParams {
    symbol: string;
}
interface QueryOpensParams {
    symbol?: string;
}
interface QueryAllParams {
    symbol: string;
    orderId?: number | string;
    startTime?: number;
    endTime?: number;
    /**
     * Default 500; max 1000.
     */
    limit?: number;
}
export declare class OrderOperation extends BinanceOperation {
    create(params: CreateParams): Promise<any>;
    query(params: QueryParams): Promise<any>;
    cancel(params: CancelParams): Promise<any>;
    cancelAll(params: CancelAllParams): Promise<any>;
    queryOpens(params?: QueryOpensParams): Promise<any>;
    /**
     * If orderId is set, it will get orders >= that orderId. Otherwise most recent orders are returned.
     * @param params
     */
    queryAll(params: QueryAllParams): Promise<any>;
}
export {};
