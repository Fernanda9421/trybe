"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./classes/Person"));
const Student_1 = __importDefault(require("./classes/Student"));
const Subject_1 = __importDefault(require("./classes/Subject"));
const Teacher_1 = __importDefault(require("./classes/Teacher"));
// Person
const person1 = new Person_1.default('Fernanda', new Date('1994/09/21'));
const person2 = new Person_1.default('Paulo', new Date('1991/07/03'));
console.log(person1);
console.log(person2);
console.log(person2.name);
// Student
const student1 = new Student_1.default('Fernanda', new Date('2005/03/17'));
student1.examsGrades = [23, 12, 36, 15];
console.log(student1.sumGrades());
console.log(student1);
// Subject
const subject1 = new Subject_1.default('Matemática');
console.log(subject1);
// Teacher
const teacher1 = new Teacher_1.default('Gabi', new Date('1989/02/19'), 8500, subject1);
console.log(teacher1);
