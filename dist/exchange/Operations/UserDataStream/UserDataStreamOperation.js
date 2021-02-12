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
const MarginCallEvent_1 = require("./Events/MarginCallEvent");
const AccountUpdateEvent_1 = require("./Events/AccountUpdateEvent");
const OrderTradeUpdateEvent_1 = require("./Events/OrderTradeUpdateEvent");
const AccountConfigUpdateEvent_1 = require("./Events/AccountConfigUpdateEvent");
class UserDataStreamOperation extends BinanceOperation_1.BinanceOperation {
    constructor() {
        super(...arguments);
        this.socket = null;
        this.callbacks = [];
        this.renewListenKeyInterval = null;
    }
    subscribe(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this.callbacks.push(callback);
            if (this.socket == null) {
                let listenKey = yield this.getListenKey();
                this.socket = new BinanceSocket_1.BinanceSocket(Binance_1.Binance.WSS_FAPI, `/ws/${listenKey}`);
                this.socket.onData(this.onSocketData.bind(this));
                if (this.renewListenKeyInterval === null) {
                    this.renewListenKeyInterval = setInterval(() => {
                        this.updateListenKey();
                    }, 1000 * 60 * 30);
                }
            }
        });
    }
    unsubscribe(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this.callbacks = this.callbacks.filter(x => x !== callback);
            if (this.callbacks.length <= 0) {
                this.socket.destroy();
                this.socket = null;
                yield this.deleteListenKey();
                clearInterval(this.renewListenKeyInterval);
            }
        });
    }
    onSocketData(data) {
        let event = null;
        switch (data.e) {
            case 'listenKeyExpired':
                break;
            case 'MARGIN_CALL':
                event = new MarginCallEvent_1.MarginCallEvent(data);
                break;
            case 'ACCOUNT_UPDATE':
                event = new AccountUpdateEvent_1.AccountUpdateEvent(data);
                break;
            case 'ORDER_TRADE_UPDATE':
                event = new OrderTradeUpdateEvent_1.OrderTradeUpdateEvent(data);
                break;
            case 'ACCOUNT_CONFIG_UPDATE':
                event = new AccountConfigUpdateEvent_1.AccountConfigUpdateEvent(data);
                break;
        }
        for (let i = 0; i < this.callbacks.length; i++) {
            this.callbacks[i](event);
        }
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