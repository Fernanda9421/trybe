// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

class Person {
  constructor(private _name:string, private _birthDate:Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name():string {
    return this._name;
  }

  set name(value: string) {
    this.validName(value);
    this._name = value;
  }

  get birthDate():Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validBirthDate(value);
    this._birthDate = value;
  }

  private age(value: Date):number {
    const timeDiff = Math.abs(Date.now() - value.getTime());
    return Math.floor(timeDiff/(1000 * 3600 * 24)/365.25);
  }

  private validName(value: string):void {
    if (value.length < 3) throw new Error('Invalid name');
  }

  private validBirthDate(value: Date):void {
    if (value.getTime() > new Date().getTime()) throw new Error (`BirthDate is invalid!`);
    if (this.age(value) > 120) throw new Error(`Maximun age allowed is 120 years old!`);
  }
}

export default Person;
