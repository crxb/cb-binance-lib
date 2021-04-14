import { FuturesEvent } from "./FuturesEvent";

class BalanceUpdate {
  asset: string;
  walletBalance: string;
  crossWalletBalance: string;

  constructor(data: any) {
    this.asset = data.a;
    this.walletBalance = data.wb;
    this.crossWalletBalance = data.cw;
  }
}

class PositionUpdate {
  symbol: string;
  positionAmount: string;
  entryPrice: string;
  accumulatedRealized: string;
  unrealizedPnL: string;
  marginType: string;
  isolatedWallet: string;
  positionSide: string;

  constructor(data: any) {
    this.symbol = data.s;
    this.positionAmount = data.pa;
    this.entryPrice = data.ep;
    this.accumulatedRealized = data.cr;
    this.unrealizedPnL = data.up;
    this.marginType = data.mt;
    this.isolatedWallet = data.iw;
    this.positionSide = data.ps;
  }
}

export class AccountUpdateEvent extends FuturesEvent {
  eventReasonType: string;
  balanceUpdates: BalanceUpdate[] = [];
  positionUpdates: PositionUpdate[] = [];

  constructor(data: any) {
    super(data);
    this.eventReasonType = data.a.m;

    if (data.a.B) {
      for (let balanceUpdate of data.a.B) {
        this.balanceUpdates.push(new BalanceUpdate(balanceUpdate));
      }
    }

    if (data.a.P) {
      for (let positionUpdate of data.a.P) {
        this.positionUpdates.push(new PositionUpdate(positionUpdate));
      }
    }
  }
}
