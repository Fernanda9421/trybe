const fs = require('fs').promises;
const fileName = './simpsons.json';

const filterCharacters = async () => {
  const character = await fs
    .readFile(fileName, 'utf-8')
    .then((file) => JSON.parse(file));

  const filterById = character.filter((simpson) => simpson.id !== '6' && simpson.id !== '10');
  
  fs.writeFile(fileName, JSON.stringify(filterById))
  .then((data) => console.log(`Arquivo alterado com sucesso - ${data}`))
  .catch((err) => console.error(err.message));
}

filterCharacters();
