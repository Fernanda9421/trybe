import Person from "./Person";
import Student from "./Student";
import Subject from "./Subject";
import Teacher from "./Teacher";

const person1 = new Person('Fer', new Date('2000/03/03'));
const person2 = new Person('Kamila', new Date('2022/01/28'));

person1.birthDate = new Date('2020/03/03');

// console.log(person1);
// console.log(person2);

const student1 = new Student('Carolina', new Date('2000/03/20'));
student1.examsGrades = [10, 7, 9, 8];
student1.worksGrades = [7]

// console.log(student1.sumAverageGrade());

const subject1 = new Subject('Matemática');
const subject2 = new Subject('História');

// console.log(subject1);

const teacher1 = new Teacher('Paula', new Date('1991/03/28'), 2500, subject1);

teacher1.admissionDate = new Date('2024/02/02');

console.log(teacher1);

