// const fatorialNumber = (number) => {
//   let multiplication = 1;

//   for (let index = 1; index <= number; index += 1) {
//     multiplication = multiplication * index;
//   }
//   console.log(multiplication);
// }
// fatorialNumber(4);

const fatorialNumber = (number) => (number === 0 ? 1 : number * fatorialNumber (number - 1));
console.log(fatorialNumber(4));