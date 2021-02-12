"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Binance = void 0;
const BinanceBase_1 = require("./BinanceBase");
const UserDataStreamOperation_1 = __importDefault(require("./Operations/UserDataStream/UserDataStreamOperation"));
const OrderOperation_1 = require("./Operations/Orders/OrderOperation");
const AccountOperation_1 = require("./Operations/Account/AccountOperation");
const PositionOperation_1 = require("./Operations/Positions/PositionOperation");
const GeneralOperation_1 = require("./Operations/General/GeneralOperation");
const StreamOperation_1 = require("./Operations/Streams/StreamOperation");
class Binance extends BinanceBase_1.BinanceBase {
    constructor() {
        super(...arguments);
        this.userDataStream = new UserDataStreamOperation_1.default(this);
        this.order = new OrderOperation_1.OrderOperation(this);
        this.account = new AccountOperation_1.AccountOperation(this);
        this.positions = new PositionOperation_1.PositionOperation(this);
        this.streams = new StreamOperation_1.StreamOperation(this);
        this.general = new GeneralOperation_1.GeneralOperation(this);
    }
}
exports.Binance = Binance;
Binance.FAPI = 'https://fapi.binance.com';
Binance.API = 'https://api.binance.com';
Binance.WSS_FAPI = 'wss://fstream.binance.com';
//# sourceMappingURL=Binance.js.map