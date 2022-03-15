const fs = require('fs').promises;
const fileName1 = './simpsons.json';
const fileName2 = './simpsonFamily.json';

const getCharacterByName = async () => {
  const character = await fs
    .readFile(fileName1, 'utf8')
    .then((file) => JSON.parse(file));

  return character.find((character) => character.name === 'Nelson Muntz');
}

const concatCharacter = async () => {
  const characters = await fs
    .readFile(fileName2, 'utf8')
    .then((file) => JSON.parse(file));

  const newCharacter = await getCharacterByName();
  characters.push(newCharacter);
  
  fs.writeFile('simpsonFamily.json', JSON.stringify(characters))
    .then(console.log('Arquivo alterado com sucesso'))
    .catch((err) => console.error(err.message));
}

concatCharacter();
