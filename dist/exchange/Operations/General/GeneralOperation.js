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
exports.GeneralOperation = void 0;
const BinanceOperation_1 = require("../BinanceOperation");
const Binance_1 = require("../../Binance");
const SecurityType_1 = require("../../Enums/SecurityType");
const HttpMethod_1 = require("../../Enums/HttpMethod");
class GeneralOperation extends BinanceOperation_1.BinanceOperation {
    exchangeInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.binance.request(Binance_1.Binance.FAPI, '/fapi/v1/exchangeInfo', SecurityType_1.SecurityType.NONE, HttpMethod_1.HttpMethod.GET);
        });
    }
}
exports.GeneralOperation = GeneralOperation;
//# sourceMappingURL=GeneralOperation.js.map