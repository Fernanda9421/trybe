import ICharacter from "../interfaces/ICharacter";
import { IDbCharacter } from "../interfaces/IDbCharacter";
import IModel from "../interfaces/IModel";

export default class MockedDbModel implements IModel {
  findIndexById = () => {
    return 1;
  }
  
  getAll = async () => {
    return [
      { id: 1, name: 'name1', specialMove: 'move1' },
      { id: 2, name: 'name2', specialMove: 'move2' }
    ]
  }

  getById = async (id:number) => {
    return { id: 1, name: 'name3', specialMove: 'move3' };
  }

  create = async (character: ICharacter) => {
    return { id: 1, name: 'name4', specialMove: 'move4' };
  };

  update = async (id: number, character: ICharacter) => {
    return { id: 1, name: 'name5', specialMove: 'move5' };
  };

  delete = async (id: number) => {
    return true;
  };
}