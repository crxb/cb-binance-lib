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
const BinanceOperation_1 = require("../BinanceOperation");
const Binance_1 = require("../../Binance");
const SecurityType_1 = require("../../enums/SecurityType");
const HttpMethod_1 = require("../../enums/HttpMethod");
const BinanceSocket_1 = require("../../Sockets/BinanceSocket");
class UserDataStreamOperation extends BinanceOperation_1.BinanceOperation {
    constructor() {
        super(...arguments);
        this.sockets = [];
    }
    subscribe() {
        return __awaiter(this, void 0, void 0, function* () {
            let listenKey = yield this.getListenKey();
            let socket = new BinanceSocket_1.BinanceSocket(Binance_1.Binance.WSS_FAPI, `/ws/${listenKey}`);
            this.sockets.push(socket);
        });
    }
    getListenKey() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield this.binance.request(Binance_1.Binance.FAPI, '/fapi/v1/listenKey', SecurityType_1.SecurityType.USER_STREAM, HttpMethod_1.HttpMethod.POST);
            return data.listenKey;
        });
    }
    updateListenKey() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.binance.request(Binance_1.Binance.FAPI, '/fapi/v1/listenKey', SecurityType_1.SecurityType.USER_STREAM, HttpMethod_1.HttpMethod.PUT);
        });
    }
    deleteListenKey() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.binance.request(Binance_1.Binance.FAPI, '/fapi/v1/listenKey', SecurityType_1.SecurityType.USER_STREAM, HttpMethod_1.HttpMethod.DELETE);
        });
    }
}
exports.default = UserDataStreamOperation;
//# sourceMappingURL=UserDataStreamOperation.js.map