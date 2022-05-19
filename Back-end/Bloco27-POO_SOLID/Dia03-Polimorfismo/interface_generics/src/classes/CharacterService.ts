import ICharacter from "../interfaces/ICharacter";
import LocalDbModel from "./LocalDbModel";

export default class CharacterService {
  constructor(readonly model: LocalDbModel) { }

  getAll = async () => {
    const allCharacters = await this.model.getAll();
    return ({ status: 200, data: allCharacters });
  }

  getById = async (id:number) => {
    const character = await this.model.getById(id);
    return ({ status: 200, data: character });
  }

  create = async (character: ICharacter) => {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  update = async (id:number, character: ICharacter) => {
    const updatedCharacter = await this.model.update(id, character);
    return ({ status: 200, data: updatedCharacter });
  }

  delete = async (id:number) => {
    const deletedCharacter = await this.model.delete(id);
    return ({ status: 200, data: deletedCharacter });
  }
}