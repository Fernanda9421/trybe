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
    constructor(name, birthDate, _salary, subject) {
        super(name, birthDate);
        this._salary = _salary;
        this._registration = String();
        this._subject = subject;
        this.salary = _salary;
        this.registration = this.generateRegistration();
        this._admissionDate = new Date();
    }
    get subject() { return this._subject; }
    ;
    set subject(value) {
        this._subject = value;
    }
    get registration() { return this._registration; }
    ;
    set registration(value) {
        if (value.length < 16) {
            throw new Error('Registration must be at least 16 characters long');
        }
        this._registration = value;
    }
    get admissionDate() { return this._admissionDate; }
    ;
    set admissionDate(value) {
        if (value.getTime() > new Date().getTime())
            throw new Error(`Admission date is invalid!`);
        this._admissionDate = value;
    }
    get salary() { return this._salary; }
    ;
    set salary(value) {
        if (value < 0)
            throw new Error('Salary cannot be negative');
        this._salary = value;
    }
    generateRegistration() {
        return (0, uuid_1.v4)();
    }
}
exports.default = Teacher;
