let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId); // number
console.log(typeof isEnrolled); // boolean
console.log(typeof patientInfo); // object
console.log(typeof patientEmail); // string

console.log(typeof patientAge); // undefined;

//---------------------------------------------------------------------

const base = 5;
let height = 8;

const perimeter = base + base + height + height;
const area = base * height;

console.log(area); // 40
console.log(perimeter); // 26