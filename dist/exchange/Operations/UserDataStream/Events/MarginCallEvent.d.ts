import { FuturesEvent } from "./FuturesEvent";
export declare class MarginCallEvent extends FuturesEvent {
    symbol: string;
    positionSide: string;
    positionAmount: string;
    marginType: string;
    isolatedWallet: string;
    markPrice: string;
    unrealizedPnL: string;
    maintenanceMarginRequired: string;
    constructor(data: any);
}
