import WebSocket from "ws";

export class BinanceSocket {
    socket: WebSocket = null;

    constructor(root: string, path: string = '/ws') {
        this.socket = new WebSocket(`${root}${path}`);
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

    onMessage(data: string) {
        console.log('onMessage', data);
    }

    onClose(p1: string, p2: string) {
        console.log('onClose', p1, p2);
    }

    onError(e: any) {
        console.log('onError', e);
    }

    onUnexpectedResponse(p1: string, p2: string) {
        console.log('onUnexpectedResponse', p1, p2);
    }
}
