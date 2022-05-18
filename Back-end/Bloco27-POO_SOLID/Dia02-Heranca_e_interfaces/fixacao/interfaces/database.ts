import Logger from './logger';

interface Database {
  logger: Logger;

  save(key:string, value:string):void;
}

export default Database;