import WebSocket from "ws";

export class BinanceSocket {
  url: string;
  socket: WebSocket = null;
  onDataCallback: Function = null;
  onConnectCallback: Function = null;
  callbackCounter: number = 0;
  callbacks: Map<number, Function> = new Map<number, Function>();
  shouldReconnect: boolean = false;
  retryCount: number = 5;

  constructor(root: string, path: string = "/ws") {
    this.url = root + path;
    this.socket = new WebSocket(`${root}${path}`);
    this.socket.on("open", this.onOpen.bind(this));
    this.socket.on("error", this.onError.bind(this));
    this.socket.on("message", this.onMessage.bind(this));
    this.socket.on("close", this.onClose.bind(this));
    this.socket.on("unexpected-response", this.onUnexpectedResponse.bind(this));
  }

  private connect() {
    this.socket = new WebSocket(this.url);
    this.socket.on("open", this.onOpen.bind(this));
    this.socket.on("error", this.onError.bind(this));
    this.socket.on("message", this.onMessage.bind(this));
    this.socket.on("close", this.onClose.bind(this));
    this.socket.on("unexpected-response", this.onUnexpectedResponse.bind(this));
  }

  public onData(callback: Function) {
    this.onDataCallback = callback;
  }

  public onConnect(callback: Function) {
    this.onConnectCallback = callback;
  }

  public send(data: string) {
    this.socket.send(data);
  }

  public subscribe(streams: string | string[], callback: Function = null) {
    if (!Array.isArray(streams)) {
      streams = [streams];
    }
    this.callbackCounter++;
    if (callback) {
      this.callbacks.set(this.callbackCounter, callback);
    }
    this.send(
      JSON.stringify({
        method: "SUBSCRIBE",
        params: streams,
        id: this.callbackCounter,
      })
    );
  }

  public unsubscribe(streams: string | string[], callback: Function = null) {
    if (!Array.isArray(streams)) {
      streams = [streams];
    }
    this.callbackCounter++;
    if (callback) {
      this.callbacks.set(this.callbackCounter, callback);
    }
    this.send(
      JSON.stringify({
        method: "UNSUBSCRIBE",
        params: streams,
        id: this.callbackCounter,
      })
    );
  }

  public listSubscriptions(callback: Function = null) {
    this.callbackCounter++;
    if (callback) {
      this.callbacks.set(this.callbackCounter, callback);
    }
    this.send(
      JSON.stringify({
        method: "LIST_SUBSCRIPTIONS",
        id: this.callbackCounter,
      })
    );
  }

  private onOpen() {
    console.log("onOpen");
    if (this.onConnectCallback !== null) {
      this.onConnectCallback(this);
    }
  }

  private onMessage(message: string) {
    let data = JSON.parse(message);

    if (typeof data.id !== "undefined" && typeof data.result !== "undefined") {
      if (this.callbacks.get(data.id)) {
        this.callbacks.get(data.id)(data.result);
        this.callbacks.delete(data.id);
      }
      return;
    }

    if (data?.code && data?.msg) {
      console.error("error", data);
      return;
    }

    if (this.onDataCallback !== null) {
      this.onDataCallback(data);
    }
  }

  private onClose() {
    console.log("Trying to reconnect");
    setTimeout(() => this.connect(), 1000);
  }

  private onError(e: any) {
    console.log("onError", e);
  }

  private onUnexpectedResponse(p1: string, p2: string) {
    console.log("onUnexpectedResponse", p1, p2);
  }

  public destroy() {
    this.socket.close();
    this.shouldReconnect = false;
  }
}
