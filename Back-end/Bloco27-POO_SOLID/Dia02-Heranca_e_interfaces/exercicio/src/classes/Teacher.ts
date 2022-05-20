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

import Person from "./Person";
import IEmployee from "../interfaces/IEmployee";
import { v4 as uuidv4 } from 'uuid';
import Subject from "./Subject";

export default class Teacher extends Person implements IEmployee {
  private _subject:Subject;
  private _registration = String();
  private _admissionDate:Date;

  constructor(name:string, birthDate:Date, private _salary:number, subject:Subject) {
    super(name, birthDate);

    this._subject = subject;
    this.salary = _salary;
    this.registration = this.generateRegistration();
    this._admissionDate = new Date();
  }
  
  get subject():Subject { return this._subject; };

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string { return this._registration; };

  set registration(value:string) {
    if (value.length < 16) {
      throw new Error('Registration must be at least 16 characters long');
    }
    this._registration = value;
  }

  get admissionDate():Date { return this._admissionDate; };

  set admissionDate(value:Date) {
    if (value.getTime() > new Date().getTime()) throw new Error (`Admission date is invalid!`);
    this._admissionDate = value;
  }

  get salary():number { return this._salary };

  set salary(value:number) {
    if (value < 0) throw new Error('Salary cannot be negative');
    this._salary = value;
  }

  generateRegistration() {
    return uuidv4();
  }
}