"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuturesEvent = void 0;
class FuturesEvent {
    constructor(data) {
        this.eventType = data.e;
        this.eventTime = data.E;
        this.transactionTime = data.T;
    }
}
exports.FuturesEvent = FuturesEvent;
//# sourceMappingURL=FuturesEvent.js.map