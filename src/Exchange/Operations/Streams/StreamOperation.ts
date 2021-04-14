import { BinanceSocket } from "../../Sockets/BinanceSocket";
import { Binance } from "../../Binance";
import { BinanceOperation } from "../BinanceOperation";

interface SubscribeParams {
  onData: Function;
  onConnect?: Function;
  stream?: string;
}

export class StreamOperation extends BinanceOperation {
  private sockets: BinanceSocket[] = [];

  public subscribe(params: SubscribeParams) {
    let socket = new BinanceSocket(
      Binance.WSS_FAPI,
      `/ws/${params.stream ? params.stream : ""}`
    );
    socket.onData(params.onData);
    if (params.onConnect) {
      socket.onConnect(params.onConnect);
    }
    this.sockets.push(socket);
    return socket;
  }

  public unsubscribe(socket: BinanceSocket) {
    socket.destroy();
    this.sockets = this.sockets.filter((s) => s !== socket);
  }

  public destroy() {
    for (let socket of this.sockets) {
      socket.destroy();
    }
  }
}
