import {FuturesEvent} from "./FuturesEvent";

export class MarginCallEvent extends FuturesEvent {

    symbol: string;
    positionSide: string;
    positionAmount: string;
    marginType: string;
    isolatedWallet: string;
    markPrice: string;
    unrealizedPnL: string;
    maintenanceMarginRequired: string;

    constructor(data: any) {
        super(data);

        this.symbol = data.p.s;
        this.positionSide = data.p.ps;
        this.positionAmount = data.p.pa;
        this.marginType = data.p.mt;
        this.isolatedWallet = data.p.iw;
        this.markPrice = data.p.mp;
        this.unrealizedPnL = data.p.up;
        this.maintenanceMarginRequired = data.p.mm;
    }

}
