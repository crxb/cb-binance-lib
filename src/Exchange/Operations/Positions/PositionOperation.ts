import {BinanceOperation} from "../BinanceOperation";
import {Binance} from "../../Binance";
import {SecurityType} from "../../Enums/SecurityType";
import {HttpMethod} from "../../Enums/HttpMethod";
import {MarginType, PositionMarginType, PositionSide} from "../../Enums/FuturesEnums";

interface ChangeMarginParams {
    positionSide?: PositionSide,
}

interface RiskParams {
    symbol?: string,
}

export class PositionOperation extends BinanceOperation {
    /**
     *
     * @param symbol
     * @param leverage - 1 to 125
     */
    public async changeLeverage(symbol: string, leverage: number) {
        let params = {symbol: symbol, leverage: leverage};
        // @ts-ignore
        return this.binance.request(Binance.FAPI, '/fapi/v1/leverage', SecurityType.TRADE, HttpMethod.POST, params);
    }

    public async changeMarginType(symbol: string, marginType: MarginType) {
        let params = {symbol: symbol, marginType: marginType};
        // @ts-ignore
        return this.binance.request(Binance.FAPI, '/fapi/v1/marginType', SecurityType.TRADE, HttpMethod.POST, params);
    }

    public async changeMargin(symbol: string, type: PositionMarginType, amount: string, optional: ChangeMarginParams = {}) {
        let params = {symbol: symbol, type: type, amount: amount, ...optional};
        // @ts-ignore
        return this.binance.request(Binance.FAPI, '/fapi/v1/positionMargin', SecurityType.TRADE, HttpMethod.POST, params);
    }

    // todo: /fapi/v1/positionMargin/history

    public async risk(params: RiskParams = {}) {
        // @ts-ignore
        return this.binance.request(Binance.FAPI, '/fapi/v2/positionRisk', SecurityType.USER_DATA, HttpMethod.GET, params);
    }

    // todo: /fapi/v1/userTrades
    // todo: /fapi/v1/income
    // todo: /fapi/v1/leverageBracket
    // todo: /fapi/v1/adlQuantile
    // todo: /fapi/v1/forceOrders
}
