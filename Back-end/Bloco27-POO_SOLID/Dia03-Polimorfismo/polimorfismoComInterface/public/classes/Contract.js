"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contract {
    constructor(broker) {
        this.broker = broker;
    }
    static get number() { return this._number; }
}
exports.default = Contract;
Contract._number = 0;
