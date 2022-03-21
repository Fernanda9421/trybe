const fsUtils = require('../fs-utils/fs-utils');

module.exports = async (_req, res) => {
  const simpsons = await fsUtils.getSimpsons();
  res.status(200).json(simpsons);
};
