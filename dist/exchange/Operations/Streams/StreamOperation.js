"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamOperation = void 0;
const BinanceSocket_1 = require("../../Sockets/BinanceSocket");
const Binance_1 = require("../../Binance");
const BinanceOperation_1 = require("../BinanceOperation");
class StreamOperation extends BinanceOperation_1.BinanceOperation {
    constructor() {
        super(...arguments);
        this.sockets = [];
    }
    subscribe(params) {
        let socket = new BinanceSocket_1.BinanceSocket(Binance_1.Binance.WSS_FAPI, `/ws/${params.stream ? params.stream : ''}`);
        socket.onData(params.onData);
        if (params.onConnect) {
            socket.onConnect(params.onConnect);
        }
        this.sockets.push(socket);
        return socket;
    }
    unsubscribe(socket) {
        socket.destroy();
        this.sockets = this.sockets.filter(s => s !== socket);
    }
    destroy() {
        for (let socket of this.sockets) {
            socket.destroy();
        }
    }
}
exports.StreamOperation = StreamOperation;
//# sourceMappingURL=StreamOperation.js.map