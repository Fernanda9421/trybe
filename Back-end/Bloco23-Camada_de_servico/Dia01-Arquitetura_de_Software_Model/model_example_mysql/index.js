const express = require('express');

const app = express();
app.use(express.json());
const PORT = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found!' });
  return res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Invalid data!' });
  }

  await Author.create(first_name, middle_name, last_name);
  return res.status(200).json({ message: 'Successfully created!' });
});

app.get('/books', async (req, res) => {
  const { q } = req.query;
  const books = (q) ? await Book.getByAuthorId(q) : await Book.getAll();

  return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });
  return res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (! await Book.isValid(title, author_id)) {
    return res.status(400).json({ message: 'Invalid data!' });
  }

  await Book.create(title, author_id);
  return res.status(200).json({ message: 'Successfully created!' });
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
