const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();

    if (books.length === 0) return res.status(404).json({ message: 'Não há livros cadastrados! ' });

    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ops! Algo deu errado.' });
  }
});

module.exports = router;
