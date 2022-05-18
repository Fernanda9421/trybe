import Database from "./interfaces/database";
import ILogger from "./interfaces/logger";
import { ConsoleLogger, logger1, logger2 } from './console';

class ExampleDatabase implements Database {
  constructor(public logger: ILogger = new ConsoleLogger()) {};

  save(key: string, value: string): void {
    this.logger.log(`key: ${key}, value: ${value}`); 
  }
}

const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

db1.save('chave1', 'valor1');
db2.save('chave2', 'valor2');
db3.save('chave3', 'valor3');