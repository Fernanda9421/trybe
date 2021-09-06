// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function testArray (arr) {
  let smallestNumber = 0;

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] < smallestNumber) {
      smallestNumber = arr[index];
    }
  }
  for (let key in arr) {
    if (arr[key] === smallestNumber) {
      console.log(key);
    }
  }
}

testArray ([2, 4, 6, 7, 10, 0, -3]);