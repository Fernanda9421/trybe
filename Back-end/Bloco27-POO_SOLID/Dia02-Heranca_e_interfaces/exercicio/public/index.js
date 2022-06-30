"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const Student_1 = __importDefault(require("./Student"));
const Subject_1 = __importDefault(require("./Subject"));
const Teacher_1 = __importDefault(require("./Teacher"));
const person1 = new Person_1.default('Fer', new Date('2000/03/03'));
const person2 = new Person_1.default('Kamila', new Date('2022/01/28'));
person1.birthDate = new Date('2020/03/03');
// console.log(person1);
// console.log(person2);
const student1 = new Student_1.default('Carolina', new Date('2000/03/20'));
student1.examsGrades = [10, 7, 9, 8];
student1.worksGrades = [7];
// console.log(student1.sumAverageGrade());
const subject1 = new Subject_1.default('Matemática');
const subject2 = new Subject_1.default('História');
// console.log(subject1);
const teacher1 = new Teacher_1.default('Paula', new Date('1991/03/28'), 2500, subject1);
teacher1.admissionDate = new Date('2024/02/02');
console.log(teacher1);