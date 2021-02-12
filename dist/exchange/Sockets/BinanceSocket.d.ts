import WebSocket from "ws";
export declare class BinanceSocket {
    socket: WebSocket;
    onDataCallback: Function;
    onConnectCallback: Function;
    callbackCounter: number;
    callbacks: Map<number, Function>;
    constructor(root: string, path?: string);
    onData(callback: Function): void;
    onConnect(callback: Function): void;
    send(data: string): void;
    subscribe(streams: string | string[], callback?: Function): void;
    unsubscribe(streams: string | string[], callback?: Function): void;
    listSubscriptions(callback?: Function): void;
    private onOpen;
    private onMessage;
    private onClose;
    private onError;
    private onUnexpectedResponse;
    destroy(): void;
}
