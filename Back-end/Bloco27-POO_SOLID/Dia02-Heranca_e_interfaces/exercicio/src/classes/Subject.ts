// `Class`: Subject
// `Attributes`:
//     - name: nome da disciplina
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome
// `Validations`:
//     - O nome tem que possuir no mínimo 3 caracteres

export default class Subject {
  private _name: string;

  constructor(name:string) {
    this._name = name;
  }

  get name() { return this._name; };

  set name(value:string) {
    if (value.length < 3) throw new Error('name must be at least 3 characters long');
    this._name = value;
  }
}