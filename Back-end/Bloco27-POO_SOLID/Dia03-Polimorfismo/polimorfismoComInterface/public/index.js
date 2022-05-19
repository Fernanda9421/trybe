"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalPerson_1 = __importDefault(require("./classes/PhysicalPerson"));
const LegalPerson_1 = __importDefault(require("./classes/LegalPerson"));
const Contract_1 = __importDefault(require("./classes/Contract"));
const physical1 = new PhysicalPerson_1.default('Fernanda', '02222221456');
const physical2 = new PhysicalPerson_1.default('Paulo', '78978978978');
const legal1 = new LegalPerson_1.default('CIA LTDA', '12548845');
const legal2 = new LegalPerson_1.default('Catuxa', '12548ddfd845');
const showIdentification = (person) => {
    person.showIdentification();
};
showIdentification(legal1);
showIdentification(legal2);
// tipo inferido (não explícito)
const c1 = new Contract_1.default(physical1);
console.log(c1.broker.cpf);
// tipagem explícita
const c2 = new Contract_1.default(legal1);
console.log(c2.broker.cnpj);
