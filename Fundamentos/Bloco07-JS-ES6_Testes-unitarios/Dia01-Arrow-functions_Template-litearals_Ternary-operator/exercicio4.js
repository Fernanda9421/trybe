// const longestWord = (string) => {
//   const separateString = string.split(' ');
//   let array = [];
//   let highestNumber;
//   let indexArray;
//   for (let index = 0; index < separateString.length; index += 1) {
//     array.push(separateString[index].length);
//     highestNumber = array[0];
//     if (array[index] > highestNumber) {
//       highestNumber = array[index];
//     }
//     indexArray = array.indexOf(highestNumber)
//   }
//   const highestWord = separateString[indexArray];
//   console.log(highestWord);
// }

const longestWord = (string) => {
  const separateString = string.split(' ');
  let highestWord = 0;
  let result;

  for (let word of separateString) {
    if (word.length > highestWord) {
      highestWord = word.length;
      result = word;
    }
  }
  console.log(result);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'