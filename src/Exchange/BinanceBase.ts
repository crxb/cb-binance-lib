import crypto from "crypto";
import querystring, { ParsedUrlQueryInput } from "querystring";
import { SecurityType } from "./Enums/SecurityType";
import { HttpMethod } from "./Enums/HttpMethod";
import axios from "axios";
import { BinanceError } from "./Errors/BinanceError";

export class BinanceBase {
  API_KEY: string = null;
  API_SECRET: string = null;

  constructor(API_KEY: string, API_SECRET: string) {
    this.API_KEY = API_KEY;
    this.API_SECRET = API_SECRET;
  }

  request = async (
    root: string,
    url: string,
    securityType: SecurityType,
    httpMethod: HttpMethod,
    data: ParsedUrlQueryInput = {}
  ) => {
    let headers = {
      "User-Agent": "Mozilla/4.0 (compatible; CB)",
      "Content-type": "application/x-www-form-urlencoded",
      "X-MBX-APIKEY": this.API_KEY,
    };

    data["timestamp"] = new Date().getTime();

    let queryText = querystring.encode(data);

    url = `${root}${url}?${queryText}`;

    switch (securityType) {
      case SecurityType.NONE:
        // Endpoint can be accessed freely.
        break;
      case SecurityType.TRADE:
      case SecurityType.USER_DATA:
        // Endpoint requires sending a valid API-Key and signature.
        let signature = crypto
          .createHmac("sha256", this.API_SECRET)
          .update(queryText)
          .digest("hex");
        url = `${url}&signature=${signature}`;
        break;
      case SecurityType.USER_STREAM:
      case SecurityType.MARKET_DATA:
        // Endpoint requires sending a valid API-Key.
        break;
    }

    try {
      let result = await axios({
        headers: headers,
        url: url,
        method: httpMethod,
      });

      //   let usedWright = result.headers["x-mbx-used-weight-1m"];

      console.log("headers", result.headers["x-mbx-used-weight-1m"]);

      return result.data;
    } catch (e) {
      if (e.response && e.response.data) {
        throw new BinanceError(e.response.data.code, e.response.data.msg, true);
      }
      throw new BinanceError(e.code, e.message, false);
    }
  };
}
