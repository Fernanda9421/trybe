import IPerson from "../interfaces/Person";

export default class LegalPerson implements IPerson {
  private static lastId = 0;
  private _name:string;
  private _id:number;
  private _cnpj:string;

  constructor(name: string, cnpj: string) {
    this._id = LegalPerson.newId();
    this._name = name;
    this._cnpj = cnpj;
  }

  private static newId() { return this.lastId += 1; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cnpj() { return this._cnpj; }
  showIdentification() {
    console.log(`id: ${this.id}, cnpj: ${this._cnpj}`);
    console.log(this._id, 'teste');
    
  }
}
