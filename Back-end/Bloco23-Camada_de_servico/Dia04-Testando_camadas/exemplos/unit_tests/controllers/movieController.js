const movieService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await movieService.create({ title, directedBy, releaseYear });
  if (!movie) {
    return res.status(400).send('Dados inválidos');
  };

  return res.status(201).send('Filme criado com sucesso!');
};

module.exports = { create }
