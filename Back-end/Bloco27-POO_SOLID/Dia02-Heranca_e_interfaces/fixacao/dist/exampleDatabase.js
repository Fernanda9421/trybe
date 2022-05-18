"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("./console");
class ExampleDatabase {
    constructor(logger = new console_1.ConsoleLogger()) {
        this.logger = logger;
    }
    ;
    save(key, value) {
        this.logger.log(`key: ${key}, value: ${value}`);
    }
}
const db1 = new ExampleDatabase(console_1.logger1);
const db2 = new ExampleDatabase(console_1.logger2);
const db3 = new ExampleDatabase();
db1.save('chave1', 'valor1');
db2.save('chave2', 'valor2');
db3.save('chave3', 'valor3');
