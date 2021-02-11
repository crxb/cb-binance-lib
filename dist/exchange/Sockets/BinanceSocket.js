"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinanceSocket = void 0;
const ws_1 = __importDefault(require("ws"));
class BinanceSocket {
    constructor(root, path = '/ws') {
        this.socket = null;
        this.socket = new ws_1.default(`${root}${path}`);
        this.socket.on('open', this.onOpen.bind(this));
        this.socket.on('error', this.onError.bind(this));
        this.socket.on('message', this.onMessage.bind(this));
        this.socket.on('close', this.onClose.bind(this));
        this.socket.on('unexpected-response', this.onUnexpectedResponse.bind(this));
        // this.socket.on('ping', this.onPing.bind(this));
        // this.socket.on('pong', this.onPong.bind(this));
    }
    onOpen() {
        console.log('onOpen');
    }
    onMessage(data) {
        console.log('onMessage', data);
    }
    onClose(p1, p2) {
        console.log('onClose', p1, p2);
    }
    onError(e) {
        console.log('onError', e);
    }
    onUnexpectedResponse(p1, p2) {
        console.log('onUnexpectedResponse', p1, p2);
    }
}
exports.BinanceSocket = BinanceSocket;
//# sourceMappingURL=BinanceSocket.js.map