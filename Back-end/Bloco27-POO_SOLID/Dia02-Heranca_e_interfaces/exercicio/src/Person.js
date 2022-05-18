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
var Person = /** @class */ (function () {
    function Person(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.name = _name;
        this.birthDate = _birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this.validName(value);
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (value) {
            this.validBirthDate(value);
            this._birthDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.age = function (value) {
        var timeDiff = Math.abs(Date.now() - value.getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    };
    Person.prototype.validName = function (value) {
        if (value.length < 3)
            throw new Error('Invalid name');
    };
    Person.prototype.validBirthDate = function (value) {
        if (value.getTime() > new Date().getTime())
            throw new Error("BirthDate is invalid!");
        if (this.age(value) > 120)
            throw new Error("Maximun age allowed is 120 years old!");
    };
    return Person;
}());
exports.default = Person;
