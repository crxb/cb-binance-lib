import { BinanceOperation } from "../BinanceOperation";
declare enum TransferType {
    SPOT_TO_USDT_M_FUTURES = 1,
    USDT_M_FUTURES_TO_SPOT = 2,
    SPOT_TO_COIN_M_FUTURES = 3,
    COIN_M_FUTURES_TO_SPOT = 4
}
export declare class AccountOperation extends BinanceOperation {
    balance(): Promise<any>;
    info(): Promise<any>;
    transfer(asset: string, amount: string, type: TransferType): Promise<any>;
    depositAddress(coin: string, network?: string): Promise<any>;
    coinConfig(): Promise<any>;
}
export {};
