// `Class`: Teacher
// `Extends`: Person
// `Implements`: Employee
// `Attributes`:
//     - subject: a disciplina lecionada pela pessoa professora
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome, data de nascimento, salário
//       e a disciplina
// `Validations`:
//     - O registro deve possuir no mínimo 16 caracteres
//     - O salário não pode ser negativo.
//     - A data de admissão não pode ser no futuro

import IEmployee from "./IEmployee";
import Person from "./Person";
import Subject from "./Subject";
import { v4 as uuidv4 } from "uuid";

export default class Teacher extends Person implements IEmployee {
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;
  private _subject: Subject;

  constructor(name:string, birthDate:Date, salary:number, subject:Subject) {
    super(name, birthDate);

    this._registration = this.generateRegistration();
    this._salary = salary;
    this._admissionDate = new Date();
    this._subject = subject;

    this.salary = salary;
    this.registration = this._registration;
  }

  get registration() { return this._registration };

  set registration(value:string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres');

    this._registration = value;
  }

  get salary() { return this._salary };

  set salary(value:number) {
    if (value < 0) throw new Error('O salário não pode ser negativo');

    this._salary = value;
  }

  get admissionDate() { return this._admissionDate };

  set admissionDate(value:Date) {
    this.validAdmissionDate(value);
    
    this._admissionDate = value;
  }

  get subject() { return this._subject };
  
  generateRegistration(): string {
    return uuidv4();
  }

  private validAdmissionDate(value:Date) {
    const actualDate = new Date().getTime();
    const admissionDate = value.getTime();

    if (admissionDate > actualDate) throw new Error('A data de admissão não pode ser no futuro');

    return value;
  }
}