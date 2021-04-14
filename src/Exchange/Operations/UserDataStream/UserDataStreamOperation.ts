import { BinanceOperation } from "../BinanceOperation";
import { Binance } from "../../Binance";
import { SecurityType } from "../../Enums/SecurityType";
import { HttpMethod } from "../../Enums/HttpMethod";
import { BinanceSocket } from "../../Sockets/BinanceSocket";
import { FuturesEvent } from "./Events/FuturesEvent";
import { MarginCallEvent } from "./Events/MarginCallEvent";
import { AccountUpdateEvent } from "./Events/AccountUpdateEvent";
import { OrderTradeUpdateEvent } from "./Events/OrderTradeUpdateEvent";
import { AccountConfigUpdateEvent } from "./Events/AccountConfigUpdateEvent";
import Timeout = NodeJS.Timeout;

export type CallbackFunction = (event: FuturesEvent) => void;

export default class UserDataStreamOperation extends BinanceOperation {
  private socket: BinanceSocket = null;
  private callbacks: CallbackFunction[] = [];
  private renewListenKeyInterval: Timeout = null;

  public async subscribe(callback: CallbackFunction) {
    this.callbacks.push(callback);

    if (this.socket == null) {
      let listenKey = await this.getListenKey();
      this.socket = new BinanceSocket(Binance.WSS_FAPI, `/ws/${listenKey}`);
      this.socket.onData(this.onSocketData.bind(this));
      if (this.renewListenKeyInterval === null) {
        this.renewListenKeyInterval = setInterval(() => {
          this.updateListenKey();
        }, 1000 * 60 * 30);
      }
    }
  }

  public async unsubscribe(callback: CallbackFunction) {
    this.callbacks = this.callbacks.filter((x) => x !== callback);
    if (this.callbacks.length <= 0) {
      this.socket.destroy();
      this.socket = null;
      await this.deleteListenKey();
      clearInterval(this.renewListenKeyInterval);
    }
  }

  private onSocketData(data: any) {
    let event: FuturesEvent = null;

    switch (data.e) {
      case "listenKeyExpired":
        break;
      case "MARGIN_CALL":
        event = new MarginCallEvent(data);
        break;
      case "ACCOUNT_UPDATE":
        event = new AccountUpdateEvent(data);
        break;
      case "ORDER_TRADE_UPDATE":
        event = new OrderTradeUpdateEvent(data);
        break;
      case "ACCOUNT_CONFIG_UPDATE":
        event = new AccountConfigUpdateEvent(data);
        break;
    }

    for (let i = 0; i < this.callbacks.length; i++) {
      this.callbacks[i](event);
    }
  }

  public async getListenKey(): Promise<string> {
    let data = await this.binance.request(
      Binance.FAPI,
      "/fapi/v1/listenKey",
      SecurityType.USER_STREAM,
      HttpMethod.POST
    );
    return data.listenKey;
  }

  public async updateListenKey(): Promise<void> {
    await this.binance.request(
      Binance.FAPI,
      "/fapi/v1/listenKey",
      SecurityType.USER_STREAM,
      HttpMethod.PUT
    );
  }

  public async deleteListenKey(): Promise<void> {
    await this.binance.request(
      Binance.FAPI,
      "/fapi/v1/listenKey",
      SecurityType.USER_STREAM,
      HttpMethod.DELETE
    );
  }
}
