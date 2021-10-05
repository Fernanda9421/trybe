// Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false;
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return names.some((nameOfArray) => nameOfArray === name);
};

console.log(hasName(names, 'Ana'));
