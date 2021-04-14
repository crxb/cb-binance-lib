import { BinanceOperation } from "../BinanceOperation";
import { Binance } from "../../Binance";
import { SecurityType } from "../../Enums/SecurityType";
import { HttpMethod } from "../../Enums/HttpMethod";

enum TransferType {
  SPOT_TO_USDT_M_FUTURES = 1,
  USDT_M_FUTURES_TO_SPOT = 2,
  SPOT_TO_COIN_M_FUTURES = 3,
  COIN_M_FUTURES_TO_SPOT = 4,
}

export class AccountOperation extends BinanceOperation {
  public async balance() {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v2/balance",
      SecurityType.USER_DATA,
      HttpMethod.GET
    );
  }

  public async info() {
    return this.binance.request(
      Binance.FAPI,
      "/fapi/v2/account",
      SecurityType.USER_DATA,
      HttpMethod.GET
    );
  }

  public async transfer(asset: string, amount: string, type: TransferType) {
    let params = { asset, amount, type };
    return this.binance.request(
      Binance.API,
      "/sapi/v1/futures/transfer",
      SecurityType.USER_DATA,
      HttpMethod.POST,
      params
    );
  }

  public async depositAddress(coin: string, network: string = null) {
    let params = { coin };
    if (network !== null) {
      // @ts-ignore
      params.network = network;
    }
    // @ts-ignore
    return this.binance.request(
      Binance.API,
      "/sapi/v1/capital/deposit/address",
      SecurityType.USER_DATA,
      HttpMethod.GET,
      params
    );
  }

  public async coinConfig() {
    return this.binance.request(
      Binance.API,
      "/sapi/v1/capital/config/getall",
      SecurityType.USER_DATA,
      HttpMethod.GET
    );
  }

  // todo: /sapi/v1/asset/dust
  // todo: /fapi/v1/apiTradingStatus
  // todo: /fapi/v1/commissionRate
}
