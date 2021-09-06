let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let order = numbers.sort((a, b) => a-b);
let lowerValue = order[0];

console.log(lowerValue);