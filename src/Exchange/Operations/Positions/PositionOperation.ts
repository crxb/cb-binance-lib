import { BinanceOperation } from "../BinanceOperation";
import { Binance } from "../../Binance";
import { SecurityType } from "../../Enums/SecurityType";
import { autoCloseType } from "../../Enums/FuturesEnums";

import { HttpMethod } from "../../Enums/HttpMethod";
import {
  MarginType,
  PositionMarginType,
  PositionSide,
} from "../../Enums/FuturesEnums";

interface ChangeMarginParams {
  positionSide?: PositionSide;
}

type RiskParams = {
  symbol?: string;
};

export class PositionOperation extends BinanceOperation {
  /**
   *
   * @param symbol
   * @param leverage - 1 to 125
   */
  public async changeLeverage(symbol: string, leverage: number) {
    let params = { symbol: symbol, leverage: leverage };
    // @ts-ignore
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/leverage",
      SecurityType.TRADE,
      HttpMethod.POST,
      params
    );
  }

  public async changeMarginType(symbol: string, marginType: MarginType) {
    let params = { symbol: symbol, marginType: marginType };
    // @ts-ignore
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/marginType",
      SecurityType.TRADE,
      HttpMethod.POST,
      params
    );
  }

  public async changeMargin(
    symbol: string,
    type: PositionMarginType,
    amount: string,
    optional: ChangeMarginParams = {}
  ) {
    let params = { symbol: symbol, type: type, amount: amount, ...optional };
    // @ts-ignore
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/positionMargin",
      SecurityType.TRADE,
      HttpMethod.POST,
      params
    );
  }

  // todo: /fapi/v1/positionMargin/history

  public async risk(params: RiskParams = {}) {
    // @ts-ignore
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v2/positionRisk",
      SecurityType.USER_DATA,
      HttpMethod.GET,
      params
    );
  }

  public async userTrades(params: {
    symbol: string;
    startTime?: number;
    endTime?: number;
    fromId?: number;
    limit?: number;
    recvWindow?: number;
    timestamp: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/userTrades",
      SecurityType.USER_DATA,
      HttpMethod.GET,
      params
    );
  }

  public async income(params: {
    symbol?: string;
    incomeType?: string;
    endTime?: number;
    fromId?: number;
    limit?: number;
    recvWindow?: number;
    timestamp: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/income",
      SecurityType.USER_DATA,
      HttpMethod.GET,
      params
    );
  }

  public async leverageBracket(params: {
    symbol?: string;
    recvWindow?: number;
    timestamp: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/leverageBracket",
      SecurityType.USER_DATA,
      HttpMethod.GET,
      params
    );
  }

  public async adlQuantile(params: {
    symbol?: string;
    recvWindow?: number;
    timestamp: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/adlQuantile",
      SecurityType.USER_DATA,
      HttpMethod.GET,
      params
    );
  }

  public async forceOrders(params: {
    symbol?: string;
    autoCloseType?: autoCloseType;
    endTime?: number;
    fromId?: number;
    limit?: number;
    recvWindow?: number;
    timestamp: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/forceOrders",
      SecurityType.USER_DATA,
      HttpMethod.GET,
      params
    );
  }
}
