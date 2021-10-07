// Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const uniqueArray = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
  return uniqueArray;
};
console.log(flatten());