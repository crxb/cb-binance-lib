import {BinanceOperation} from "../BinanceOperation";
import {Binance} from "../../Binance";
import {SecurityType} from "../../enums/SecurityType";
import {HttpMethod} from "../../enums/HttpMethod";
import {BinanceSocket} from "../../Sockets/BinanceSocket";

export default class UserDataStreamOperation extends BinanceOperation {
    private sockets: BinanceSocket[] = [];

    public async subscribe() {
        let listenKey = await this.getListenKey();

        let socket = new BinanceSocket(Binance.WSS_FAPI, `/ws/${listenKey}`);

        this.sockets.push(socket);
    }

    public async getListenKey(): Promise<string> {
        let data = await this.binance.request(Binance.FAPI, '/fapi/v1/listenKey', SecurityType.USER_STREAM, HttpMethod.POST);
        return data.listenKey;
    }

    public async updateListenKey(): Promise<void> {
        await this.binance.request(Binance.FAPI, '/fapi/v1/listenKey', SecurityType.USER_STREAM, HttpMethod.PUT);
    }

    public async deleteListenKey(): Promise<void> {
        await this.binance.request(Binance.FAPI, '/fapi/v1/listenKey', SecurityType.USER_STREAM, HttpMethod.DELETE);
    }
}
