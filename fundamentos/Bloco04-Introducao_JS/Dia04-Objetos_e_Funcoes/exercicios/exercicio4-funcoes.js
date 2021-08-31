// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function biggestName (names) {
//   let biggestCaractere = names[0].length;
//   let biggestName = names[0];
  
//   for (let index = 1; index < names.length; index += 1) {
//     if (names[index].length > biggestCaractere) {
//       biggestCaractere = names[index].length;
//       biggestName = names[index]
//     }
//   }
//   console.log(biggestName)
// }

// biggestName (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

function biggestName (names) {
  let biggestName = names[0];

  for (let index in names) {
    if (names[index].length > biggestName.length) {
      biggestName = names[index]
    }
  }
  return biggestName;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));