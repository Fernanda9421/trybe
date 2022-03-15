const fs = require('fs').promises;
const fileName = './simpsons.json';

const getCharacterById = async (id) => {
  const character = await fs
    .readFile(fileName, 'utf-8')
    .then((file) => JSON.parse(file))
  
  const findCharacter = character.find((simpson) => simpson.id === id);

  if (findCharacter) {
    console.log(findCharacter)
  } else {
    throw new Error('Id não encontrado')
  }
}

getCharacterById('8');
