const fs = require('fs').promises;

const getSimpsons = () => {
  return fs.readFile('./simpsons.json', 'utf8')
    .then((file) => JSON.parse(file));
}

const setSimpsons = (newSimpson) => {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpson));
}

module.exports = { getSimpsons, setSimpsons };