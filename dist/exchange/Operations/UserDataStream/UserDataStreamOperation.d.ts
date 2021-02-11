import { BinanceOperation } from "../BinanceOperation";
export default class UserDataStreamOperation extends BinanceOperation {
    private sockets;
    subscribe(): Promise<void>;
    getListenKey(): Promise<string>;
    updateListenKey(): Promise<void>;
    deleteListenKey(): Promise<void>;
}
