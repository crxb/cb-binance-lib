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
        this.onDataCallback = null;
        this.onConnectCallback = null;
        this.callbackCounter = 0;
        this.callbacks = new Map();
        this.socket = new ws_1.default(`${root}${path}`);
        this.socket.on('open', this.onOpen.bind(this));
        this.socket.on('error', this.onError.bind(this));
        this.socket.on('message', this.onMessage.bind(this));
        this.socket.on('close', this.onClose.bind(this));
        this.socket.on('unexpected-response', this.onUnexpectedResponse.bind(this));
        // this.socket.on('ping', this.onPing.bind(this));
        // this.socket.on('pong', this.onPong.bind(this));
    }
    onData(callback) {
        this.onDataCallback = callback;
    }
    onConnect(callback) {
        this.onConnectCallback = callback;
    }
    send(data) {
        this.socket.send(data);
    }
    subscribe(streams, callback = null) {
        if (!Array.isArray(streams)) {
            streams = [streams];
        }
        this.callbackCounter++;
        if (callback) {
            this.callbacks.set(this.callbackCounter, callback);
        }
        this.send(JSON.stringify({
            "method": "SUBSCRIBE",
            "params": streams,
            "id": this.callbackCounter,
        }));
    }
    unsubscribe(streams, callback = null) {
        if (!Array.isArray(streams)) {
            streams = [streams];
        }
        this.callbackCounter++;
        if (callback) {
            this.callbacks.set(this.callbackCounter, callback);
        }
        this.send(JSON.stringify({
            "method": "UNSUBSCRIBE",
            "params": streams,
            "id": this.callbackCounter,
        }));
    }
    listSubscriptions(callback = null) {
        this.callbackCounter++;
        if (callback) {
            this.callbacks.set(this.callbackCounter, callback);
        }
        this.send(JSON.stringify({
            "method": "LIST_SUBSCRIPTIONS",
            "id": this.callbackCounter,
        }));
    }
    onOpen() {
        console.log('onOpen');
        if (this.onConnectCallback !== null) {
            this.onConnectCallback(this);
        }
    }
    onMessage(message) {
        let data = JSON.parse(message);
        if (typeof data.id !== "undefined" && typeof data.result !== "undefined") {
            if (this.callbacks.get(data.id)) {
                this.callbacks.get(data.id)(data.result);
                this.callbacks.delete(data.id);
            }
            return;
        }
        if (typeof data.code !== "undefined" && typeof data.msg !== "undefined") {
            console.error('error', data);
            // handle error
            return;
        }
        if (this.onDataCallback !== null) {
            this.onDataCallback(data);
        }
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
    destroy() {
        this.socket.close();
    }
}
exports.BinanceSocket = BinanceSocket;
//# sourceMappingURL=BinanceSocket.js.map