const fs = require('fs').promises;

const fileName = './simpsons.json';
fs.readFile(fileName, 'utf-8')
  .then((data) => {
    return JSON.parse(data)
  })
  .then((character) => {
    return character.map(({ id, name }) => `${id} - ${name}`)
  })
  .then((exibition) => {
    exibition.map((string) => console.log(string))
  });