let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let order = numbers.sort((a, b) => a - b) 
let valueHighest = order[order.length-1]
console.log(valueHighest);