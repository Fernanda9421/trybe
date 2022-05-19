"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./classes/Person"));
const Student_1 = __importDefault(require("./classes/Student"));
const person1 = new Person_1.default('Fernanda', new Date('1994/09/21'));
const person2 = new Person_1.default('Paulo', new Date('1991/07/03'));
console.log(person1);
console.log(person2);
const student1 = new Student_1.default('Fernanda', new Date('2005/03/17'));
student1.examsGrades = [23, 12, 36, 15];
console.log(student1.sumGrades());
console.log(student1);
