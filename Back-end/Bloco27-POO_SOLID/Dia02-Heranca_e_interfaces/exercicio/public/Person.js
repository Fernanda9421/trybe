"use strict";
// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, birthDate) {
        this._name = name;
        this._birthDate = birthDate;
        this.name = name;
        this.birthDate = birthDate;
    }
    get name() { return this._name; }
    ;
    set name(value) {
        if (value.length < 3)
            throw new Error('Nome deve possuir pelo menos 3 caracteres.');
        this._name = value;
    }
    get birthDate() { return this._birthDate; }
    ;
    set birthDate(value) {
        this.validBirthDate();
        this._birthDate = value;
    }
    validBirthDate() {
        const currentDate = new Date().getTime();
        const birthDate = this._birthDate.getTime();
        if (birthDate > currentDate)
            throw new Error('Data inválida');
        return this._birthDate;
    }
}
exports.default = Person;
