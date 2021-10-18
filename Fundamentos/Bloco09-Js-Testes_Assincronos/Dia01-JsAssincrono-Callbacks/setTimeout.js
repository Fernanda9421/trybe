// EXEMPLO 1:
// setTimeout(() => {
//   console.log('Comprar parafusos') // Comprar parafusos
//   console.log('Adicionar ao estoque') // Adicionar ao estoque
// }, 2000);

// console.log('1 - Receber roda'); // 1 - Receber roda
// console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// EXEMPLO 2:
// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers); // [1, 2, 3]

// EXEMPLO 3:
// const pushNumber2 = (list2, number) => list2.push(number);

// let numbers2 = [];

// setTimeout(() => pushNumber2(numbers2, 1), 3000);
// pushNumber2(numbers2, 2);
// pushNumber2(numbers2, 3);

// console.log(numbers2); // O retorno é [2, 3]

// EXEMPLO 4:
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 3000); // [2, 3, 1]