"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionMarginType = exports.MarginType = exports.RateLimitInterval = exports.RateLimiter = exports.KlineInterval = exports.ResponseType = exports.WorkingType = exports.TimeInForce = exports.PositionSide = exports.OrderSide = exports.OrderType = exports.OrderStatus = exports.ContractStatus = exports.ContractType = exports.SymbolType = exports.TextBool = void 0;
var TextBool;
(function (TextBool) {
    TextBool["TRUE"] = "true";
    TextBool["FALSE"] = "false";
})(TextBool = exports.TextBool || (exports.TextBool = {}));
var SymbolType;
(function (SymbolType) {
    SymbolType["FUTURE"] = "FUTURE";
})(SymbolType = exports.SymbolType || (exports.SymbolType = {}));
/**
 * contractType
 */
var ContractType;
(function (ContractType) {
    ContractType["PERPETUAL"] = "PERPETUAL";
    ContractType["CURRENT_MONTH"] = "CURRENT_MONTH";
    ContractType["NEXT_MONTH"] = "NEXT_MONTH";
    /**
     * Invalid type, only used for DELIVERING status
     */
    ContractType["CURRENT_MONTH_DELIVERING"] = "CURRENT_MONTH_DELIVERING";
    /**
     * Invalid type, only used for DELIVERING status
     */
    ContractType["NEXT_MONTH_DELIVERING"] = "NEXT_MONTH_DELIVERING";
})(ContractType = exports.ContractType || (exports.ContractType = {}));
/**
 * contractStatus, status
 */
var ContractStatus;
(function (ContractStatus) {
    ContractStatus["PENDING_TRADING"] = "PENDING_TRADING";
    ContractStatus["TRADING"] = "TRADING";
    ContractStatus["PRE_DELIVERING"] = "PRE_DELIVERING";
    ContractStatus["DELIVERING"] = "DELIVERING";
    ContractStatus["DELIVERED"] = "DELIVERED";
    ContractStatus["PRE_SETTLE"] = "PRE_SETTLE";
    ContractStatus["SETTLING"] = "SETTLING";
    ContractStatus["CLOSE"] = "CLOSE";
})(ContractStatus = exports.ContractStatus || (exports.ContractStatus = {}));
/**
 * status
 */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["NEW"] = "NEW";
    OrderStatus["PARTIALLY_FILLED"] = "PARTIALLY_FILLED";
    OrderStatus["FILLED"] = "FILLED";
    OrderStatus["CANCELED"] = "CANCELED";
    OrderStatus["REJECTED"] = "REJECTED";
    OrderStatus["EXPIRED"] = "EXPIRED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
/**
 * orderTypes, type
 */
var OrderType;
(function (OrderType) {
    OrderType["LIMIT"] = "LIMIT";
    OrderType["MARKET"] = "MARKET";
    OrderType["STOP"] = "STOP";
    OrderType["STOP_MARKET"] = "STOP_MARKET";
    OrderType["TAKE_PROFIT"] = "TAKE_PROFIT";
    OrderType["TAKE_PROFIT_MARKET"] = "TAKE_PROFIT_MARKET";
    OrderType["TRAILING_STOP_MARKET"] = "TRAILING_STOP_MARKET";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
/**
 * side
 */
var OrderSide;
(function (OrderSide) {
    OrderSide["BUY"] = "BUY";
    OrderSide["SELL"] = "SELL";
})(OrderSide = exports.OrderSide || (exports.OrderSide = {}));
/**
 * positionSide
 */
var PositionSide;
(function (PositionSide) {
    PositionSide["BOTH"] = "BOTH";
    PositionSide["LONG"] = "LONG";
    PositionSide["SHORT"] = "SHORT";
})(PositionSide = exports.PositionSide || (exports.PositionSide = {}));
/**
 * timeInForce
 */
var TimeInForce;
(function (TimeInForce) {
    /**
     * Good Till Cancel
     */
    TimeInForce["GTC"] = "GTC";
    /**
     * Immediate or Cancel
     */
    TimeInForce["IOC"] = "IOC";
    /**
     * Fill or Kill
     */
    TimeInForce["FOK"] = "FOK";
    /**
     * Good Till Crossing (Post Only)
     */
    TimeInForce["GTX"] = "GTX";
})(TimeInForce = exports.TimeInForce || (exports.TimeInForce = {}));
/**
 * workingType
 */
var WorkingType;
(function (WorkingType) {
    WorkingType["MARK_PRICE"] = "MARK_PRICE";
    WorkingType["CONTRACT_PRICE"] = "CONTRACT_PRICE";
})(WorkingType = exports.WorkingType || (exports.WorkingType = {}));
/**
 * newOrderRespType
 */
var ResponseType;
(function (ResponseType) {
    ResponseType["ACK"] = "ACK";
    ResponseType["RESULT"] = "RESULT";
})(ResponseType = exports.ResponseType || (exports.ResponseType = {}));
var KlineInterval;
(function (KlineInterval) {
    KlineInterval["i1m"] = "1m";
    KlineInterval["i3m"] = "3m";
    KlineInterval["i5m"] = "5m";
    KlineInterval["i15m"] = "15m";
    KlineInterval["i30m"] = "30m";
    KlineInterval["i1h"] = "1h";
    KlineInterval["i2h"] = "2h";
    KlineInterval["i4h"] = "4h";
    KlineInterval["i6h"] = "6h";
    KlineInterval["i8h"] = "8h";
    KlineInterval["i12h"] = "12h";
    KlineInterval["i1d"] = "1d";
    KlineInterval["i3d"] = "3d";
    KlineInterval["i1w"] = "1w";
    KlineInterval["i1M"] = "1M";
})(KlineInterval = exports.KlineInterval || (exports.KlineInterval = {}));
/**
 * rateLimitType
 */
var RateLimiter;
(function (RateLimiter) {
    RateLimiter["REQUEST_WEIGHT"] = "REQUEST_WEIGHT";
    RateLimiter["ORDERS"] = "ORDERS";
})(RateLimiter = exports.RateLimiter || (exports.RateLimiter = {}));
/**
 * interval
 */
var RateLimitInterval;
(function (RateLimitInterval) {
    RateLimitInterval["MINUTE"] = "MINUTE";
})(RateLimitInterval = exports.RateLimitInterval || (exports.RateLimitInterval = {}));
/**
 * marginType
 */
var MarginType;
(function (MarginType) {
    MarginType["ISOLATED"] = "ISOLATED";
    MarginType["CROSSED"] = "CROSSED";
})(MarginType = exports.MarginType || (exports.MarginType = {}));
/**
 * positionMargin
 */
var PositionMarginType;
(function (PositionMarginType) {
    PositionMarginType[PositionMarginType["ADD"] = 1] = "ADD";
    PositionMarginType[PositionMarginType["REDUCE"] = 2] = "REDUCE";
})(PositionMarginType = exports.PositionMarginType || (exports.PositionMarginType = {}));
//# sourceMappingURL=FuturesEnums.js.map