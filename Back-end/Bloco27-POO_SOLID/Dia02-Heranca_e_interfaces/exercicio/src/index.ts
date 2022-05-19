import Person from "./classes/Person";
import Student from "./classes/Student";

const person1 = new Person('Fernanda', new Date('1994/09/21'));
const person2 = new Person('Paulo', new Date('1991/07/03'));

console.log(person1);
console.log(person2);

const student1 = new Student('Fernanda', new Date('2005/03/17'));

student1.examsGrades = [23, 12, 36, 15];
console.log(student1.sumGrades());

console.log(student1);

