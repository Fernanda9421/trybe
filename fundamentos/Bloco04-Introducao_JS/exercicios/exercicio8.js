const num1 = 12;
const num2 = 27;
const num3 = 19;

// if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
//     console.log('true')
// } else {
//     console.log('false')
// }

let isIven = false;
if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    isIven = true;
}

console.log(isIven)