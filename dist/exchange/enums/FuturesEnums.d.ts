export declare enum TextBool {
    TRUE = "true",
    FALSE = "false"
}
export declare enum SymbolType {
    FUTURE = "FUTURE"
}
/**
 * contractType
 */
export declare enum ContractType {
    PERPETUAL = "PERPETUAL",
    CURRENT_MONTH = "CURRENT_MONTH",
    NEXT_MONTH = "NEXT_MONTH",
    /**
     * Invalid type, only used for DELIVERING status
     */
    CURRENT_MONTH_DELIVERING = "CURRENT_MONTH_DELIVERING",
    /**
     * Invalid type, only used for DELIVERING status
     */
    NEXT_MONTH_DELIVERING = "NEXT_MONTH_DELIVERING"
}
/**
 * contractStatus, status
 */
export declare enum ContractStatus {
    PENDING_TRADING = "PENDING_TRADING",
    TRADING = "TRADING",
    PRE_DELIVERING = "PRE_DELIVERING",
    DELIVERING = "DELIVERING",
    DELIVERED = "DELIVERED",
    PRE_SETTLE = "PRE_SETTLE",
    SETTLING = "SETTLING",
    CLOSE = "CLOSE"
}
/**
 * status
 */
export declare enum OrderStatus {
    NEW = "NEW",
    PARTIALLY_FILLED = "PARTIALLY_FILLED",
    FILLED = "FILLED",
    CANCELED = "CANCELED",
    REJECTED = "REJECTED",
    EXPIRED = "EXPIRED"
}
/**
 * orderTypes, type
 */
export declare enum OrderType {
    LIMIT = "LIMIT",
    MARKET = "MARKET",
    STOP = "STOP",
    STOP_MARKET = "STOP_MARKET",
    TAKE_PROFIT = "TAKE_PROFIT",
    TAKE_PROFIT_MARKET = "TAKE_PROFIT_MARKET",
    TRAILING_STOP_MARKET = "TRAILING_STOP_MARKET"
}
/**
 * side
 */
export declare enum OrderSide {
    BUY = "BUY",
    SELL = "SELL"
}
/**
 * positionSide
 */
export declare enum PositionSide {
    BOTH = "BOTH",
    LONG = "LONG",
    SHORT = "SHORT"
}
/**
 * timeInForce
 */
export declare enum TimeInForce {
    /**
     * Good Till Cancel
     */
    GTC = "GTC",
    /**
     * Immediate or Cancel
     */
    IOC = "IOC",
    /**
     * Fill or Kill
     */
    FOK = "FOK",
    /**
     * Good Till Crossing (Post Only)
     */
    GTX = "GTX"
}
/**
 * workingType
 */
export declare enum WorkingType {
    MARK_PRICE = "MARK_PRICE",
    CONTRACT_PRICE = "CONTRACT_PRICE"
}
/**
 * newOrderRespType
 */
export declare enum ResponseType {
    ACK = "ACK",
    RESULT = "RESULT"
}
export declare enum KlineInterval {
    i1m = "1m",
    i3m = "3m",
    i5m = "5m",
    i15m = "15m",
    i30m = "30m",
    i1h = "1h",
    i2h = "2h",
    i4h = "4h",
    i6h = "6h",
    i8h = "8h",
    i12h = "12h",
    i1d = "1d",
    i3d = "3d",
    i1w = "1w",
    i1M = "1M"
}
/**
 * rateLimitType
 */
export declare enum RateLimiter {
    REQUEST_WEIGHT = "REQUEST_WEIGHT",
    ORDERS = "ORDERS"
}
/**
 * interval
 */
export declare enum RateLimitInterval {
    MINUTE = "MINUTE"
}
/**
 * marginType
 */
export declare enum MarginType {
    ISOLATED = "ISOLATED",
    CROSSED = "CROSSED"
}
/**
 * positionMargin
 */
export declare enum PositionMarginType {
    ADD = 1,
    REDUCE = 2
}
