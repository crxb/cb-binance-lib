import { FuturesEvent } from "./FuturesEvent";
declare class BalanceUpdate {
    asset: string;
    walletBalance: string;
    crossWalletBalance: string;
    constructor(data: any);
}
declare class PositionUpdate {
    symbol: string;
    positionAmount: string;
    entryPrice: string;
    accumulatedRealized: string;
    unrealizedPnL: string;
    marginType: string;
    isolatedWallet: string;
    positionSide: string;
    constructor(data: any);
}
export declare class AccountUpdateEvent extends FuturesEvent {
    eventReasonType: string;
    balanceUpdates: BalanceUpdate[];
    positionUpdates: PositionUpdate[];
    constructor(data: any);
}
export {};
