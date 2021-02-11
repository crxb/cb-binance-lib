"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Binance = void 0;
const BinanceBase_1 = require("./BinanceBase");
const UserDataStreamOperation_1 = __importDefault(require("./Operations/UserDataStream/UserDataStreamOperation"));
class Binance extends BinanceBase_1.BinanceBase {
    constructor() {
        super(...arguments);
        this.UserDataStream = new UserDataStreamOperation_1.default(this);
    }
}
exports.Binance = Binance;
Binance.FAPI = 'https://fapi.binance.com';
Binance.WSS_FAPI = 'wss://fstream.binance.com';
//# sourceMappingURL=Binance.js.map