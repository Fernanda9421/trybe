import IModel from "../interfaces/IModel";
import ICharacter from "../interfaces/ICharacter";
import { IDbCharacter, db } from "../interfaces/IDbCharacter";

export default class LocalDbModel implements IModel {
  findIndexById = (id:number) => {
    const index = db.findIndex((character) => character.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  }

  getAll = async () => db;

  getById = async (id: number) => {
    const index = this.findIndexById(id);
    return db[index];
  }

  create = async (character: ICharacter) => {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  }

  update = async (id:number, character: ICharacter) => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...character };
    return db[indexToUpdate];
  }

  delete = async (id: number) => {
    const indexToDestroy = this.findIndexById(id);
    const deletedItem = db.splice(indexToDestroy, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };
}