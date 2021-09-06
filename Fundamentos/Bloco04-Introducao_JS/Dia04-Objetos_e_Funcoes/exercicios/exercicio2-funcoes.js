// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function testArray (arr) {
  let higherNumber = [0];

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > higherNumber) {
      higherNumber = arr[index];
    }
  }
  for (let key in arr) {
    if (arr[key] === higherNumber) {
      console.log(key);
    }
  }
}

testArray([2, 3, 6, 7, 10, 1]);