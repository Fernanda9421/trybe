class Student {
  private _registration: string;
  private _name: string;
  private _tests: number[];
  private _works: number[];

  constructor(
    registration:string, name:string, tests:number[], works:number[]
  ) {
    this._registration = registration;
    this._name = name;
    this._tests = tests;
    this._works = works;
  }

  sumGrads():number {
    const sumTests = this._tests.reduce((acc, crr) => acc + crr);
    const sumWorks = this._works.reduce((acc, crr) => acc + crr);
    return sumTests + sumWorks;
  }

  get name() {
    return this._name;
  }

  averageGrades():number {
    return this.sumGrads() / 6;
  }
}

const student1 = new Student('123456', 'Fernanda', [5,10,8,4], [8,3]);
console.log(`A estudante ${student1.name} possui nota final: ${student1.sumGrads()},
com média ${student1.averageGrades()}`);
