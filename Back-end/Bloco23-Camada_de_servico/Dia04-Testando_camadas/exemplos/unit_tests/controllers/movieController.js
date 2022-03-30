const movieService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await movieService.create({ title, directedBy, releaseYear });
  if (!movie) {
    return res.status(400).send('Dados inválidos');
  };

  return res.status(201).send('Filme criado com sucesso!');
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieService.getById(id);
    if (!movie) return res.status(404).send('Filme não encontrado');
    return res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ops, algo deu erado!' });
  }
}

module.exports = { create, getById }
