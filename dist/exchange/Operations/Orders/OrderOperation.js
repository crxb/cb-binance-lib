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
exports.OrderOperation = void 0;
const BinanceOperation_1 = require("../BinanceOperation");
const Binance_1 = require("../../Binance");
const SecurityType_1 = require("../../Enums/SecurityType");
const HttpMethod_1 = require("../../Enums/HttpMethod");
class OrderOperation extends BinanceOperation_1.BinanceOperation {
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return this.binance.request(Binance_1.Binance.FAPI, '/fapi/v1/order', SecurityType_1.SecurityType.TRADE, HttpMethod_1.HttpMethod.POST, params);
        });
    }
    query(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return this.binance.request(Binance_1.Binance.FAPI, '/fapi/v1/order', SecurityType_1.SecurityType.USER_DATA, HttpMethod_1.HttpMethod.GET, params);
        });
    }
    cancel(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return this.binance.request(Binance_1.Binance.FAPI, '/fapi/v1/order', SecurityType_1.SecurityType.TRADE, HttpMethod_1.HttpMethod.DELETE, params);
        });
    }
    cancelAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return this.binance.request(Binance_1.Binance.FAPI, '/fapi/v1/allOpenOrders', SecurityType_1.SecurityType.TRADE, HttpMethod_1.HttpMethod.DELETE, params);
        });
    }
    queryOpens(params = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return this.binance.request(Binance_1.Binance.FAPI, '/fapi/v1/openOrders', SecurityType_1.SecurityType.USER_DATA, HttpMethod_1.HttpMethod.GET, params);
        });
    }
    /**
     * If orderId is set, it will get orders >= that orderId. Otherwise most recent orders are returned.
     * @param params
     */
    queryAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return this.binance.request(Binance_1.Binance.FAPI, '/fapi/v1/openOrders', SecurityType_1.SecurityType.USER_DATA, HttpMethod_1.HttpMethod.GET, params);
        });
    }
}
exports.OrderOperation = OrderOperation;
//# sourceMappingURL=OrderOperation.js.map