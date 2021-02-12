import {BinanceOperation} from "../BinanceOperation";
import {Binance} from "../../Binance";
import {SecurityType} from "../../Enums/SecurityType";
import {HttpMethod} from "../../Enums/HttpMethod";

export class GeneralOperation extends BinanceOperation {

    public async exchangeInfo() {
        return this.binance.request(Binance.FAPI, '/fapi/v1/exchangeInfo', SecurityType.NONE, HttpMethod.GET);
    }

    // todo: /fapi/v1/depth
    // todo: /fapi/v1/trades
    // todo: /fapi/v1/historicalTrades
    // todo: /fapi/v1/aggTrades
    // todo: /fapi/v1/klines
    // todo: /fapi/v1/continuousKlines
    // todo: /fapi/v1/premiumIndex
    // todo: /fapi/v1/fundingRate
    // todo: /fapi/v1/ticker/24hr
    // todo: /fapi/v1/ticker/price
    // todo: /fapi/v1/ticker/bookTicker
    // todo: /fapi/v1/allForceOrders
    // todo: /fapi/v1/openInterest
    // todo: /futures/data/openInterestHist
    // todo: /futures/data/topLongShortAccountRatio
    // todo: /futures/data/topLongShortPositionRatio
    // todo: /futures/data/globalLongShortAccountRatio
    // todo: /futures/data/takerlongshortRatio
    // todo: /fapi/v1/lvtKlines
    // todo: /fapi/v1/indexInfo
    // todo: xxxxxxx
    // todo: xxxxxxx
}
