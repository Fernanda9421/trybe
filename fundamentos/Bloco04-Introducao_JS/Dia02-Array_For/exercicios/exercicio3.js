let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
  sum = sum + numbers[i];
}

let average = sum / numbers.length;
console.log(average);