const fs = require('fs').promises;

const getSimpsons = () => {
  return fs.readFile('./simpsons.json', 'utf8')
    .then((file) => JSON.parse(file));
}

module.exports = async (_req, res) => {
  const simpsons = await getSimpsons();
  res.status(200).json(simpsons);
};
