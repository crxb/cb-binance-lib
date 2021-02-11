"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinanceError = void 0;
class BinanceError extends Error {
    constructor(code, message, isExternalError = false) {
        super(message);
        this.code = code;
        this.isExternalError = isExternalError;
        Object.setPrototypeOf(this, BinanceError.prototype);
    }
}
exports.BinanceError = BinanceError;
//# sourceMappingURL=BinanceError.js.map