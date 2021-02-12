import { BinanceBase } from "./BinanceBase";
import UserDataStreamOperation from "./Operations/UserDataStream/UserDataStreamOperation";
import { OrderOperation } from "./Operations/Orders/OrderOperation";
import { AccountOperation } from "./Operations/Account/AccountOperation";
import { PositionOperation } from "./Operations/Positions/PositionOperation";
import { GeneralOperation } from "./Operations/General/GeneralOperation";
import { StreamOperation } from "./Operations/Streams/StreamOperation";
export declare class Binance extends BinanceBase {
    static FAPI: string;
    static API: string;
    static WSS_FAPI: string;
    userDataStream: UserDataStreamOperation;
    order: OrderOperation;
    account: AccountOperation;
    positions: PositionOperation;
    streams: StreamOperation;
    general: GeneralOperation;
}
