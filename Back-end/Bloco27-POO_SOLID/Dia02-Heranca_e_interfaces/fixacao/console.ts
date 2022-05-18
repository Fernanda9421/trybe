import ILogger from "./interfaces/logger";

export class ConsoleLogger implements ILogger {
  log(param: string): void {
    console.log(`Logger1: ${param}`);
  }
}

export class ConsoleLogger2 implements ILogger {
  log(param: string): void {
    console.log(`Logger2: ${param}`);
  }
}

export const logger1 = new ConsoleLogger();
export const logger2 = new ConsoleLogger2();