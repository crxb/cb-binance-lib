import { ParsedUrlQueryInput } from 'querystring';
import { SecurityType } from "./enums/SecurityType";
import { HttpMethod } from "./enums/HttpMethod";
export declare class BinanceBase {
    API_KEY: string;
    API_SECRET: string;
    constructor(API_KEY: string, API_SECRET: string);
    request: (root: string, url: string, securityType: SecurityType, httpMethod: HttpMethod, data?: ParsedUrlQueryInput) => Promise<any>;
}
