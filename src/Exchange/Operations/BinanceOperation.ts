import {Binance} from "../Binance";

export class BinanceOperation {
    protected binance: Binance = null;

    constructor(binance: Binance) {
        this.binance = binance;
    }
}
