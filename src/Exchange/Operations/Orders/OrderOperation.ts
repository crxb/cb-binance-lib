import { BinanceOperation } from "../BinanceOperation";
import { Binance } from "../../Binance";
import { SecurityType } from "../../Enums/SecurityType";
import { HttpMethod } from "../../Enums/HttpMethod";
import {
  OrderSide,
  OrderType,
  PositionSide,
  ResponseType,
  TextBool,
  TimeInForce,
  WorkingType,
} from "../../Enums/FuturesEnums";

type CreateParams = {
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
};

type QueryParams = {
  symbol: string;
  orderId?: number | string;
  origClientOrderId?: string;
};

type CancelParams = {
  symbol: string;
  orderId?: number | string;
  origClientOrderId?: string;
};

type CancelAllParams = {
  symbol: string;
};

type QueryOpensParams = {
  symbol?: string;
};

type QueryAllParams = {
  symbol: string;
  orderId?: number | string;
  startTime?: number;
  endTime?: number;
  /**
   * Default 500; max 1000.
   */
  limit?: number;
};

export class OrderOperation extends BinanceOperation {
  public async create(params: CreateParams) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/order",
      SecurityType.TRADE,
      HttpMethod.POST,
      params
    );
  }

  public async query(params: QueryParams) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/order",
      SecurityType.USER_DATA,
      HttpMethod.GET,
      params
    );
  }

  public async cancel(params: CancelParams) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/order",
      SecurityType.TRADE,
      HttpMethod.DELETE,
      params
    );
  }

  public async cancelAll(params: CancelAllParams) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/allOpenOrders",
      SecurityType.TRADE,
      HttpMethod.DELETE,
      params
    );
  }

  public async queryOpens(params: QueryOpensParams = {}) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/openOrders",
      SecurityType.USER_DATA,
      HttpMethod.GET,
      params
    );
  }

  /**
   * If orderId is set, it will get orders >= that orderId. Otherwise most recent orders are returned.
   * @param params
   */
  public async queryAll(params: QueryAllParams) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/openOrders",
      SecurityType.USER_DATA,
      HttpMethod.GET,
      params
    );
  }
}
