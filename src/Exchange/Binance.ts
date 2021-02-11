import {BinanceBase} from "./BinanceBase";
import UserDataStreamOperation from "./Operations/UserDataStream/UserDataStreamOperation";

export class Binance extends BinanceBase {
    static FAPI = 'https://fapi.binance.com';
    static WSS_FAPI = 'wss://fstream.binance.com';

    UserDataStream: UserDataStreamOperation = new UserDataStreamOperation(this);
}
