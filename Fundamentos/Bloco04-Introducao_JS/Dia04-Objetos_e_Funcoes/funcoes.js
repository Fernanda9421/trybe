// function sum (a, b) {
//   return a + b;
// }

// function subtraction (a, b) {
//   return a - b;
// }

// function multiplication (a, b) {
//   return a*b;
// }

// function division (a,b) {
//   return a/b;
// }

// function module (a,b) {
//   return a % b
// }

// console.log(sum(10, 20));
// console.log(subtraction(10,20))
// console.log(multiplication(10, 20))
// console.log(division(10, 20))
// console.log(module(10, 20))

// function comparation (a, b) {
//   if (a > b){
//     return a
//   } else if (a < b){
//     return b
//   } else{
//     return 'Os números são iguais'
//   }
// }
// console.log(comparation(20,30))

// function comparation (a, b, c) {
//   if (a>b && a>c) {
//     return a
//   } else if (b>a && b>c) {
//     return b
//   } else {
//     return c
//   }
// }
// console.log(comparation(90,20,164))

function value (a) {
  if (a === 0) {
    return 'zero'
  } else if (a > 0) {
    return 'positive'
  } else {
    return 'negative'
  }
}
console.log(value(10));