const checkNumber = (betNumber, randonNumber) => {
  if (betNumber === randonNumber) {
    return `Parabéns você ganhou`;
  }
  return `Tente novamente`;
};

const drawResult = (betNumber, checkNumber) => {
  const randonNumber = Math.floor(Math.random() * 5) + 1;
  return checkNumber(betNumber, randonNumber);
};

console.log(drawResult(4, checkNumber));
