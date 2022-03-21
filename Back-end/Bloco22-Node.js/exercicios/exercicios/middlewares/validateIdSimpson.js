const fsUtils = require('../fs-utils/fs-utils');

module.exports = async (req, res, next) => {
  const { id } = req.body;
  const simpsons = await fsUtils.getSimpsons();
  const findSimpson = simpsons.find((simpson) => simpson.id === parseInt(id));

  if (findSimpson) return res.status(500).json({ message: 'Não é possível cadastrar esse simpson!' });

  next();
}
