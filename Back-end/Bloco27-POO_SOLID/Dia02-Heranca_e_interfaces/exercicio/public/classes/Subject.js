"use strict";
// `Class`: Subject
// `Attributes`:
//     - name: nome da disciplina
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome
// `Validations`:
//     - O nome tem que possuir no mínimo 3 caracteres
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(_name) {
        this._name = _name;
        this.setName = _name;
    }
    get getName() { return this._name; }
    ;
    set setName(value) {
        this.validationName(value);
        this._name = value;
    }
    validationName(value) {
        if (value.length < 3)
            throw new Error('name must be at least 3 characters long');
    }
}
exports.default = Subject;
