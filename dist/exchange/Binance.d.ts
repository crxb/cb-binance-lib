import { BinanceBase } from "./BinanceBase";
import UserDataStreamOperation from "./Operations/UserDataStream/UserDataStreamOperation";
export declare class Binance extends BinanceBase {
    static FAPI: string;
    static WSS_FAPI: string;
    UserDataStream: UserDataStreamOperation;
}
