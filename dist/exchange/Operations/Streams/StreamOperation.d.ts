import { BinanceSocket } from "../../Sockets/BinanceSocket";
import { BinanceOperation } from "../BinanceOperation";
interface SubscribeParams {
    onData: Function;
    onConnect?: Function;
    stream?: string;
}
export declare class StreamOperation extends BinanceOperation {
    private sockets;
    subscribe(params: SubscribeParams): BinanceSocket;
    unsubscribe(socket: BinanceSocket): void;
    destroy(): void;
}
export {};
