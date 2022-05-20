// `Class`: Subject
// `Attributes`:
//     - name: nome da disciplina
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome
// `Validations`:
//     - O nome tem que possuir no mínimo 3 caracteres

export default class Subject {
  constructor(private _name:string) {
    this.setName = _name;
  }

  get getName():string { return this._name; };

  set setName(value:string) {   
    this.validationName(value);
    this._name = value;
  }

  validationName(value:string):void {
    if (value.length < 3) throw new Error('name must be at least 3 characters long');
  }
}