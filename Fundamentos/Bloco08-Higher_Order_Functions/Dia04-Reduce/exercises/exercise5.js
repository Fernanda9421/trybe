// 5. Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const string = names.join('').toLowerCase().split('');
  const numberOfA = string.reduce((accumulator, currentValue) => {
    if (currentValue === 'a') return accumulator + 1;
    return accumulator;
  }, 0)
  return numberOfA;
};
console.log(containsA());