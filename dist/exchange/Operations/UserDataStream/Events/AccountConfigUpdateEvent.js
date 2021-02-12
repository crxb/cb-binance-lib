"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountConfigUpdateEvent = void 0;
const FuturesEvent_1 = require("./FuturesEvent");
class AccountConfigUpdateEvent extends FuturesEvent_1.FuturesEvent {
    constructor(data) {
        super(data);
        this.symbol = data.ac.s;
        this.leverage = data.ac.l;
    }
}
exports.AccountConfigUpdateEvent = AccountConfigUpdateEvent;
//# sourceMappingURL=AccountConfigUpdateEvent.js.map