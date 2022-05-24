"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const uuid_1 = require("uuid");
class Teacher extends Person_1.default {
    constructor(name, birthDate, salary, subject) {
        super(name, birthDate);
        this._registration = this.generateRegistration();
        this._salary = salary;
        this._admissionDate = new Date();
        this._subject = subject;
        this.salary = salary;
        this.registration = this._registration;
    }
    get registration() { return this._registration; }
    ;
    set registration(value) {
        if (value.length < 16)
            throw new Error('O registro deve possuir no mínimo 16 caracteres');
        this._registration = value;
    }
    get salary() { return this._salary; }
    ;
    set salary(value) {
        if (value < 0)
            throw new Error('O salário não pode ser negativo');
        this._salary = value;
    }
    get admissionDate() { return this._admissionDate; }
    ;
    set admissionDate(value) {
        this.validAdmissionDate(value);
        this._admissionDate = value;
    }
    get subject() { return this._subject; }
    ;
    generateRegistration() {
        return (0, uuid_1.v4)();
    }
    validAdmissionDate(value) {
        const actualDate = new Date().getTime();
        const admissionDate = value.getTime();
        if (admissionDate > actualDate)
            throw new Error('A data de admissão não pode ser no futuro');
        return value;
    }
}
exports.default = Teacher;
