// USANDO O FOR:
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);

// USANDO O MAP:
const persons2 = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames2 = persons2.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames2); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// EXEMPLO 3:
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// EXEMPLO 4:
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProductsAndPrices = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = listProductsAndPrices(products, prices);
console.log(listProducts);