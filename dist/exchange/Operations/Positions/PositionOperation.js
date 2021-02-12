"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionOperation = void 0;
const BinanceOperation_1 = require("../BinanceOperation");
const Binance_1 = require("../../Binance");
const SecurityType_1 = require("../../Enums/SecurityType");
const HttpMethod_1 = require("../../Enums/HttpMethod");
class PositionOperation extends BinanceOperation_1.BinanceOperation {
    /**
     *
     * @param symbol
     * @param leverage - 1 to 125
     */
    changeLeverage(symbol, leverage) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { symbol: symbol, leverage: leverage };
            // @ts-ignore
            return this.binance.request(Binance_1.Binance.FAPI, '/fapi/v1/leverage', SecurityType_1.SecurityType.TRADE, HttpMethod_1.HttpMethod.POST, params);
        });
    }
    changeMarginType(symbol, marginType) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { symbol: symbol, marginType: marginType };
            // @ts-ignore
            return this.binance.request(Binance_1.Binance.FAPI, '/fapi/v1/marginType', SecurityType_1.SecurityType.TRADE, HttpMethod_1.HttpMethod.POST, params);
        });
    }
    changeMargin(symbol, type, amount, optional = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = Object.assign({ symbol: symbol, type: type, amount: amount }, optional);
            // @ts-ignore
            return this.binance.request(Binance_1.Binance.FAPI, '/fapi/v1/positionMargin', SecurityType_1.SecurityType.TRADE, HttpMethod_1.HttpMethod.POST, params);
        });
    }
    // todo: /fapi/v1/positionMargin/history
    risk(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return this.binance.request(Binance_1.Binance.FAPI, '/fapi/v2/positionRisk', SecurityType_1.SecurityType.USER_DATA, HttpMethod_1.HttpMethod.GET, params);
        });
    }
}
exports.PositionOperation = PositionOperation;
//# sourceMappingURL=PositionOperation.js.map