const fs = require('fs').promises;
const fileName1 = './simpsons.json';
const fileName2 = './simpsonFamily.json';

const getCharacterByName = async () => {
  const character = await fs
    .readFile(fileName1, 'utf8')
    .then((file) => JSON.parse(file));

  return character.find((character) => character.name === 'Maggie Simpson');
}

const deleteAndAddCharacters = async () => {
  const character = await fs
    .readFile(fileName2, 'utf8')
    .then((file) => JSON.parse(file));
  
  character.pop();
  const newCharacter = await getCharacterByName();
  character.push(newCharacter);

  fs.writeFile(fileName2, JSON.stringify(character))
    .then(console.log('Arquivo alterado com sucesso'))
    .catch((e) => e.message)
}

deleteAndAddCharacters();