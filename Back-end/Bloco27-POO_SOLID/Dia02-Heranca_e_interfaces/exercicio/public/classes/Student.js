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
        this._examsGrades = [];
        this._worksGrades = [];
        this._enrollment = this.generateEnrollment();
    }
    get enrollment() { return this._enrollment; }
    ;
    set enrollment(value) {
        if (value.length < 16) {
            throw new Error('Enrollment must be at least 16 characters long');
        }
        this._enrollment = value;
    }
    get examsGrades() { return this._examsGrades; }
    ;
    set examsGrades(value) {
        if (value.length > 4) {
            throw new Error('Maximun 4 exams grades');
        }
        this._examsGrades = value;
    }
    get worksGrades() { return this._worksGrades; }
    ;
    set worksGrades(value) {
        if (value.length > 2) {
            throw new Error('Maximun 2 works grades');
        }
        this._worksGrades = value;
    }
    sumGrades() {
        const sum = this._examsGrades.reduce((acc, crr) => acc + crr);
        return sum;
    }
    sumAverageGrade() {
        const items = this._examsGrades.length;
        return this.sumGrades() / items;
    }
    generateEnrollment() {
        return (0, uuid_1.v4)();
    }
}
exports.default = Student;
