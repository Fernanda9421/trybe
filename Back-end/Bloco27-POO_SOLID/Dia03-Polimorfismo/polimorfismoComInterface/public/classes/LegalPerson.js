"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LegalPerson {
    constructor(name, cnpj) {
        this._id = LegalPerson.newId();
        this._name = name;
        this._cnpj = cnpj;
    }
    static newId() { return this.lastId += 1; }
    get id() { return this._id; }
    get name() { return this._name; }
    get cnpj() { return this._cnpj; }
    showIdentification() {
        console.log(`id: ${this.id}, cnpj: ${this._cnpj}`);
        console.log(this._id, 'teste');
    }
}
exports.default = LegalPerson;
LegalPerson.lastId = 0;
