const fs = require('fs').promises;
const fileName = './simpsons.json';

const newFile = async () => {
  const characters = await fs
    .readFile(fileName, 'utf8')
    .then((file) => JSON.parse(file));

  const filterCharacters = characters
    .filter((character) => character.id === '1' || character.id === '4');
  
  fs.writeFile('simpsonFamily.json', JSON.stringify(filterCharacters))
    .then(console.log('Arquivo criado com sucesso'))
    .catch((err) => console.error(err.message));
}

newFile();