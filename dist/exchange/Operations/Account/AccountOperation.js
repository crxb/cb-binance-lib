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
exports.AccountOperation = void 0;
const BinanceOperation_1 = require("../BinanceOperation");
const Binance_1 = require("../../Binance");
const SecurityType_1 = require("../../Enums/SecurityType");
const HttpMethod_1 = require("../../Enums/HttpMethod");
var TransferType;
(function (TransferType) {
    TransferType[TransferType["SPOT_TO_USDT_M_FUTURES"] = 1] = "SPOT_TO_USDT_M_FUTURES";
    TransferType[TransferType["USDT_M_FUTURES_TO_SPOT"] = 2] = "USDT_M_FUTURES_TO_SPOT";
    TransferType[TransferType["SPOT_TO_COIN_M_FUTURES"] = 3] = "SPOT_TO_COIN_M_FUTURES";
    TransferType[TransferType["COIN_M_FUTURES_TO_SPOT"] = 4] = "COIN_M_FUTURES_TO_SPOT";
})(TransferType || (TransferType = {}));
class AccountOperation extends BinanceOperation_1.BinanceOperation {
    balance() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.binance.request(Binance_1.Binance.FAPI, '/fapi/v2/balance', SecurityType_1.SecurityType.USER_DATA, HttpMethod_1.HttpMethod.GET);
        });
    }
    info() {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            return this.binance.request(Binance_1.Binance.FAPI, '/fapi/v2/account', SecurityType_1.SecurityType.USER_DATA, HttpMethod_1.HttpMethod.GET);
        });
    }
    transfer(asset, amount, type) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { asset: asset, amount: amount, type: type };
            // @ts-ignore
            return this.binance.request(Binance_1.Binance.API, '/sapi/v1/futures/transfer', SecurityType_1.SecurityType.USER_DATA, HttpMethod_1.HttpMethod.POST, params);
        });
    }
    depositAddress(coin, network = null) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { coin: coin };
            if (network !== null) {
                // @ts-ignore
                params.network = network;
            }
            // @ts-ignore
            return this.binance.request(Binance_1.Binance.API, '/sapi/v1/capital/deposit/address', SecurityType_1.SecurityType.USER_DATA, HttpMethod_1.HttpMethod.GET, params);
        });
    }
    coinConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.binance.request(Binance_1.Binance.API, '/sapi/v1/capital/config/getall', SecurityType_1.SecurityType.USER_DATA, HttpMethod_1.HttpMethod.GET);
        });
    }
}
exports.AccountOperation = AccountOperation;
//# sourceMappingURL=AccountOperation.js.map