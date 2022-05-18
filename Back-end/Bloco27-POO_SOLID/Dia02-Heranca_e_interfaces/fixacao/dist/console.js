"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger2 = exports.logger1 = exports.ConsoleLogger2 = exports.ConsoleLogger = void 0;
class ConsoleLogger {
    log(param) {
        console.log(`Logger1: ${param}`);
    }
}
exports.ConsoleLogger = ConsoleLogger;
class ConsoleLogger2 {
    log(param) {
        console.log(`Logger2: ${param}`);
    }
}
exports.ConsoleLogger2 = ConsoleLogger2;
exports.logger1 = new ConsoleLogger();
exports.logger2 = new ConsoleLogger2();
