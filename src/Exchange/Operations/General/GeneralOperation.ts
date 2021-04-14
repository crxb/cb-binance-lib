import { BinanceOperation } from "../BinanceOperation";
import { Binance } from "../../Binance";
import { SecurityType } from "../../Enums/SecurityType";
import { HttpMethod } from "../../Enums/HttpMethod";
import {
  ContractType,
  KlineInterval,
  periodType,
} from "../../Enums/FuturesEnums";

type generalRequest = {
  symbol: string;
  limit?: number;
};

type historicalTrade = {
  symbol: string;
  fromId?: number;
  limit?: number;
};

export class GeneralOperation extends BinanceOperation {
  // Current exchange trading rules and symbol information
  public async exchangeInfo() {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/exchangeInfo",
      SecurityType.NONE,
      HttpMethod.GET
    );
  }
  // Order book
  public async orderBook(params: generalRequest) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/depth",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }
  // Get recent trades
  public async recentTrades(params: generalRequest) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/trades",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }
  // Get older market historical trades.
  public async historicalTrades(params: historicalTrade) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/historicalTrades",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }
  // Get compressed, aggregate trades. 
  // Trades that fill at the time, from the same order, with the same price will have the quantity aggregated.
  public async aggTrades(params: {
    symbol: string;
    limit?: number;
    startTime?: number;
    endTime?: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/historicalTrades",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }
  // Kline/candlestick bars for a symbol. 
  // Klines are uniquely identified by their open time.
  public async klines(params: {
    symbol: string;
    interval: KlineInterval;
    startTime?: number;
    endTime?: number;
    limit?: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/klines",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }

  // Kline/candlestick bars for a specific contract type.
  // Klines are uniquely identified by their open time.
  public async continuousKlines(params: {
    pair: string;
    contractType: ContractType;
    interval: KlineInterval;
    startTime?: number;
    endTime?: number;
    limit?: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/continuousKlines",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }
  // Mark Price and Funding Rate
  public async premiumIndex(params?: { symbol?: string }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/premiumIndex",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }

  public async fundingRate(params?: {
    symbol?: string;
    startTime?: number;
    endTime?: number;
    limit?: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/fundingRate",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }

  // 24 hour rolling window price change statistics.
  // Careful when accessing this with no symbol.
  public async tickerDay(params?: { symbol?: string }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/ticker/24hr",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }

  public async tickerPrice(params?: { symbol?: string }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/ticker/price",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }

  public async bookTicker(params?: { symbol?: string }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/ticker/bookTicker",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }

  public async allForceOrders(params?: {
    symbol?: string;
    limit?: number;
    startTime?: number;
    endTime?: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/allForceOrders",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }

  public async openInterest(params?: { symbol?: string }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/openInterest",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }

  public async openInterestHist(params: {
    symbol: string;
    period: periodType;
    limit?: number;
    startTime?: number;
    endTime?: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/openInterestHist",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }

  public async topLongShortAccountRatio(params: {
    symbol: string;
    period: periodType;
    limit?: number;
    startTime?: number;
    endTime?: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/futures/data/topLongShortAccountRatio",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }
  public async topLongShortPositionRatio(params: {
    symbol: string;
    period: periodType;
    limit?: number;
    startTime?: number;
    endTime?: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/futures/data/topLongShortPositionRatio",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }

  public async globalLongShortAccountRatio(params: {
    symbol: string;
    period: periodType;
    limit?: number;
    startTime?: number;
    endTime?: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/futures/data/globalLongShortAccountRatio",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }

  public async takerlongshortRatio(params: {
    symbol: string;
    period: periodType;
    limit?: number;
    startTime?: number;
    endTime?: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/futures/data/takerlongshortRatio",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }

  public async lvtKlines(params: {
    symbol: string;
    interval: KlineInterval;
    startTime?: number;
    endTime?: number;
    limit?: number;
  }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/lvtKlines",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }

  public async indexInfo(params?: { symbol?: string }) {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v1/indexInfo",
      SecurityType.NONE,
      HttpMethod.GET,
      params
    );
  }
}
