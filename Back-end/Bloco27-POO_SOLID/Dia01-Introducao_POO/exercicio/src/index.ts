import Student from "./Student";

const student1 = new Student('Fer', '123123111', [10, 8, 5, 6], [2, 8]);

console.log(student1);
console.log(student1.sumGrades());
console.log(student1.averageGrades());
