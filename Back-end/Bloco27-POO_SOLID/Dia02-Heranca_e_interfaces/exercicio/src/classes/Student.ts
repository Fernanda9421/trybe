// `Class`: Student
// `Extends`: Person
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - worksGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e
//       preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada
//       como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 notas de trabalhos

import Person from "./Person";
import { v4 as uuidv4 } from 'uuid';

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name:string, birthDate:Date) {
    super(name, birthDate);

    this._enrollment = this.generateEnrollment();
  }

  get enrollment():string { return this._enrollment; };

  set enrollment(value:string) {
    if (value.length < 16) {
      throw new Error('Enrollment must be at least 16 characters long')
    }
    this._enrollment = value;
  }

  get examsGrades() { return this._examsGrades; };

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('Maximun 4 exams grades')
    }
    this._examsGrades = value;
  }

  get worksGrades() { return this._worksGrades; };

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('Maximun 2 works grades')
    }
    this._worksGrades = value;
  }

  sumGrades():number {
    const sum = this._examsGrades.reduce((acc, crr) => acc + crr);
    return sum;
  }

  sumAverageGrade():number {
    const items = this._examsGrades.length;
    return this.sumGrades() / items;
  }

  generateEnrollment():string {
    return uuidv4();
  }
}