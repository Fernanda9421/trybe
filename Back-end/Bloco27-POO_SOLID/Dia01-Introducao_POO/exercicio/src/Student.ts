import IStudent from "./IStudent";

export default class Student implements IStudent {
  private _name: string;
  private _registration: string;
  private _tests: number[];
  private _works: number[];

  constructor(
    name: string, registration: string, tests:number[], works:number[]
  ) {
    this._name = name;
    this._registration = registration;
    this._tests = tests;
    this._works = works;

    this.name = name;
  }

  get name() { return this._name };

  set name(value:string) {
    if (value.length < 3) throw new Error('O nome precisa ter pelo menos 3 caracteres');

    this._name = value;
  }

  get registration() { return this._registration };

  set registration(value:string) {
    this._registration = value;
  }

  get tests() { return this._tests };

  set tests(value:number[]) {
    if (value.length !== 4) throw new Error('O estudante precisa de 4 notas de provas registrada');

    this._tests = value;
  }

  get works() { return this._works };

  set works(value:number[]) {
    if (value.length !== 2) throw new Error('O estudante precisa de 2 notas de trabalhos registrado');

    this._works = value;
  }

  sumGrades() {
    const grades = [...this._tests, ...this._works];

    return grades.reduce((acc, crr) => acc + crr, 0);
  }

  averageGrades() {
    const grades = this.sumGrades();
    const gradesLength = this._tests.length + this._works.length;

    return grades / gradesLength;
  }
}