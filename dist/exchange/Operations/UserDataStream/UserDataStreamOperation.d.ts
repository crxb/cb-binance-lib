import { BinanceOperation } from "../BinanceOperation";
import { FuturesEvent } from "./Events/FuturesEvent";
export declare type CallbackFunction = (event: FuturesEvent) => void;
export default class UserDataStreamOperation extends BinanceOperation {
    private socket;
    private callbacks;
    private renewListenKeyInterval;
    subscribe(callback: CallbackFunction): Promise<void>;
    unsubscribe(callback: CallbackFunction): Promise<void>;
    private onSocketData;
    getListenKey(): Promise<string>;
    updateListenKey(): Promise<void>;
    deleteListenKey(): Promise<void>;
}
