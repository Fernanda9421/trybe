const fileSimpsons = require('../simpsons.json');

module.exports = (req, res) => {
  const { id } = req.params;
  const findSimpson = fileSimpsons.find((simpson) => simpson.id === parseInt(id));

  if (!findSimpson) return res.status(404).json({ message: 'Simpson not found!'});
  res.status(200).json(findSimpson);
}
