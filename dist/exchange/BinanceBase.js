"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinanceBase = void 0;
const crypto_1 = __importDefault(require("crypto"));
const querystring_1 = __importDefault(require("querystring"));
const SecurityType_1 = require("./enums/SecurityType");
const axios_1 = __importDefault(require("axios"));
const BinanceError_1 = require("./errors/BinanceError");
class BinanceBase {
    constructor(API_KEY, API_SECRET) {
        this.API_KEY = null;
        this.API_SECRET = null;
        this.request = (root, url, securityType, httpMethod, data = {}) => __awaiter(this, void 0, void 0, function* () {
            let headers = {
                'User-Agent': 'Mozilla/4.0 (compatible; CB)',
                'Content-type': 'application/x-www-form-urlencoded',
                'X-MBX-APIKEY': this.API_KEY,
            };
            data['timestamp'] = new Date().getTime();
            let queryText = querystring_1.default.encode(data);
            url = `${root}${url}?${queryText}`;
            switch (securityType) {
                case SecurityType_1.SecurityType.NONE:
                    // Endpoint can be accessed freely.
                    break;
                case SecurityType_1.SecurityType.TRADE:
                case SecurityType_1.SecurityType.USER_DATA:
                    // Endpoint requires sending a valid API-Key and signature.
                    let signature = crypto_1.default.createHmac('sha256', this.API_SECRET).update(queryText).digest('hex');
                    url = `${url}&signature=${signature}`;
                    break;
                case SecurityType_1.SecurityType.USER_STREAM:
                case SecurityType_1.SecurityType.MARKET_DATA:
                    // Endpoint requires sending a valid API-Key.
                    break;
            }
            try {
                let result = yield axios_1.default({
                    headers: headers,
                    url: url,
                    method: httpMethod,
                });
                let usedWright = result.headers['x-mbx-used-weight-1m'];
                console.log('headers', result.headers['x-mbx-used-weight-1m']);
                return result.data;
            }
            catch (e) {
                if (e.response && e.response.data) {
                    throw new BinanceError_1.BinanceError(e.response.data.code, e.response.data.msg, true);
                }
                throw new BinanceError_1.BinanceError(e.code, e.message, false);
            }
        });
        this.API_KEY = API_KEY;
        this.API_SECRET = API_SECRET;
    }
}
exports.BinanceBase = BinanceBase;
//# sourceMappingURL=BinanceBase.js.map