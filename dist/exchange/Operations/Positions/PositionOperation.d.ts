import { BinanceOperation } from "../BinanceOperation";
import { MarginType, PositionMarginType, PositionSide } from "../../Enums/FuturesEnums";
interface ChangeMarginParams {
    positionSide?: PositionSide;
}
interface RiskParams {
    symbol?: string;
}
export declare class PositionOperation extends BinanceOperation {
    /**
     *
     * @param symbol
     * @param leverage - 1 to 125
     */
    changeLeverage(symbol: string, leverage: number): Promise<any>;
    changeMarginType(symbol: string, marginType: MarginType): Promise<any>;
    changeMargin(symbol: string, type: PositionMarginType, amount: string, optional?: ChangeMarginParams): Promise<any>;
    risk(params?: RiskParams): Promise<any>;
}
export {};
