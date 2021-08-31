// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function moreRepeats (numbers) {
  let counterRepeated = 0;
  let counterNumber = 0;
  let indexNumberRepeated = 0;

  for (let index in numbers) {
    let checksNumber = numbers[index];

    for (let indexTwo in numbers) {
      if (checksNumber === numbers[indexTwo]) {
        counterNumber += 1;
      }
    }

    if (counterNumber > counterRepeated) {
      counterRepeated = counterNumber;
      indexNumberRepeated = index;
    }
    counterNumber = 0;
  }
  return numbers[indexNumberRepeated]
}

console.log(moreRepeats([2, 3, 2, 5, 8, 2, 3]));