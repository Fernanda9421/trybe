"use strict";
class Student {
    constructor(registration, name, tests, works) {
        this._registration = registration;
        this._name = name;
        this._tests = tests;
        this._works = works;
    }
    sumGrads() {
        const sumTests = this._tests.reduce((acc, crr) => acc + crr);
        const sumWorks = this._works.reduce((acc, crr) => acc + crr);
        return sumTests + sumWorks;
    }
    get name() {
        return this._name;
    }
    averageGrades() {
        return this.sumGrads() / 6;
    }
}
const student1 = new Student('123456', 'Fernanda', [5, 10, 8, 4], [8, 3]);
console.log(`A estudante ${student1.name} possui nota final: ${student1.sumGrads()},
com média ${student1.averageGrades()}`);
