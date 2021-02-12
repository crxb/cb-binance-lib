import { FuturesEvent } from "./FuturesEvent";
export declare class AccountConfigUpdateEvent extends FuturesEvent {
    symbol: string;
    leverage: number;
    constructor(data: any);
}
