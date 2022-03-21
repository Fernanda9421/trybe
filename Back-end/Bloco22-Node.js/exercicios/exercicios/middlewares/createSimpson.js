const fsUtils = require('../fs-utils/fs-utils');

module.exports = async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await fsUtils.getSimpsons();

  simpsons.push({ id, name });
  await fsUtils.setSimpsons(simpsons);

  res.status(201).json({ message: 'Simpson criado com sucesso!' });
}
