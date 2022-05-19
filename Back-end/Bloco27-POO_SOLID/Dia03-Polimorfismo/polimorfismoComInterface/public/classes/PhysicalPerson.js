"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhysicalPerson {
    constructor(name, cpf) {
        this._id = PhysicalPerson.newId();
        this._name = name;
        this._cpf = cpf;
    }
    static newId() { return this.lastId += 1; }
    ;
    get id() { return this._id; }
    ;
    get name() { return this._name; }
    ;
    get cpf() { return this._cpf; }
    ;
    showIdentification() {
        console.log(`id: ${this.id}, cpf: ${this._cpf}`);
    }
}
exports.default = PhysicalPerson;
PhysicalPerson.lastId = 0;
