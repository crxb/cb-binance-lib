import {BinanceBase} from "./BinanceBase";
import UserDataStreamOperation from "./Operations/UserDataStream/UserDataStreamOperation";
import {OrderOperation} from "./Operations/Orders/OrderOperation";
import {AccountOperation} from "./Operations/Account/AccountOperation";
import {PositionOperation} from "./Operations/Positions/PositionOperation";
import {GeneralOperation} from "./Operations/General/GeneralOperation";
import {StreamOperation} from "./Operations/Streams/StreamOperation";

export class Binance extends BinanceBase {
    static FAPI = 'https://fapi.binance.com';
    static API = 'https://api.binance.com';
    static WSS_FAPI = 'wss://fstream.binance.com';

    userDataStream: UserDataStreamOperation = new UserDataStreamOperation(this);
    order: OrderOperation = new OrderOperation(this);
    account: AccountOperation = new AccountOperation(this);
    positions: PositionOperation = new PositionOperation(this);
    streams: StreamOperation = new StreamOperation(this);
    general: GeneralOperation = new GeneralOperation(this);
}
