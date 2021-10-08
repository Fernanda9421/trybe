// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'uva', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite em pó', 'granola', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  const fruitsWithAdditional = [...specialFruit, ...additionalItens];
  return fruitsWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));