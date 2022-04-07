const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();

    if (books.length === 0) return res.status(404).json({ message: 'There are no books registered' });

    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ops! Algo deu errado.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ where: { id }});
    if (!book) return res.status(404).json({ message: 'Book not found!' });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ops! Algo deu errado.' });
  }
});

router.post('/', async (req,res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await Book.create({ title, author, pageQuantity });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ops! Algo deu errado.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;

    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );

    if (!updateBook) return res.status(404).json({ message: 'Book not found!' });

    console.log(updateBook);
    return res.status(200).json({ message: 'Book successfully updated' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ops! Algo deu errado.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Book.destroy(
      { where: { id } }
    );

    return res.status(200).json({ message: 'Successfully deleted book' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Ops! Algo deu errado.' });
  }
});

module.exports = router;
