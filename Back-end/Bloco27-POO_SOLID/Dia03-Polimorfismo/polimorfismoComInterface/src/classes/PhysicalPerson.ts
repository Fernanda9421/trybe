import IPerson from "../interfaces/Person";

export default class PhysicalPerson implements IPerson {
  private static lastId = 0;
  private _name:string;
  private _id:number;
  private _cpf:string;

  constructor(name:string, cpf:string) {
    this._id = PhysicalPerson.newId();
    this._name = name;
    this._cpf = cpf;
  }

  private static newId() { return this.lastId += 1};
  get id() { return this._id };
  get name() { return this._name };
  get cpf() { return this._cpf };
  showIdentification(): void {
    console.log(`id: ${this.id}, cpf: ${this._cpf}`);
  }
}