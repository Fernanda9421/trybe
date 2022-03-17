const fs = require('fs').promises;

const readFileSimpsons = () => {
  return fs.readFile('./simpsons.json', 'utf8')
    .then((file) => JSON.parse(file));
}

const writeFileSimpsons = (simpson) => {
  return fs.writeFile('./simpsons.json', JSON.stringify(simpson));
}

module.exports={ readFileSimpsons, writeFileSimpsons };
