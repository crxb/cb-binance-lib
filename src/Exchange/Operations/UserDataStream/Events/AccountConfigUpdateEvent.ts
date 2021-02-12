import {FuturesEvent} from "./FuturesEvent";

export class AccountConfigUpdateEvent extends FuturesEvent {
    symbol: string;
    leverage: number;

    constructor(data: any) {
        super(data);

        this.symbol = data.ac.s;
        this.leverage = data.ac.l;
    }

}
