"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const uuid_1 = require("uuid");
class Student extends Person_1.default {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
        this._examsGrades = [];
        this._worksGrades = [];
    }
    get enrollment() { return this._enrollment; }
    ;
    set enrollment(value) {
        if (value.length < 16)
            throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
        this._enrollment = value;
    }
    get examsGrades() { return this._examsGrades; }
    ;
    set examsGrades(value) {
        if (value.length > 4)
            throw new Error('O estudante deve possuir no máximo 4 notas de provas');
        this._examsGrades = value;
    }
    get worksGrades() { return this._worksGrades; }
    ;
    set worksGrades(value) {
        if (value.length > 2)
            throw new Error('O estudante deve possuir no máximo 2 notas de trabalhos');
        this._worksGrades = value;
    }
    generateEnrollment() {
        const enrollment = (0, uuid_1.v4)();
        return enrollment;
    }
    sumGrades() {
        const grades = [...this._examsGrades, ...this._worksGrades];
        return grades.reduce((acc, crr) => acc + crr, 0);
    }
    sumAverageGrade() {
        const gradesLength = this._examsGrades.length + this._worksGrades.length;
        const sumGrades = this.sumGrades();
        return sumGrades / gradesLength;
    }
}
exports.default = Student;
