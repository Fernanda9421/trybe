import Character from './Character';

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }
  talk(): void { console.log(`Hi, my name is ${this._name}`); }
  specialMove(): void { console.log(`${this._specialMoveName}`); }
}

export default LongRangeCharacter;