import WebSocket from "ws";
export declare class BinanceSocket {
    socket: WebSocket;
    constructor(root: string, path?: string);
    onOpen(): void;
    onMessage(data: string): void;
    onClose(p1: string, p2: string): void;
    onError(e: any): void;
    onUnexpectedResponse(p1: string, p2: string): void;
}
