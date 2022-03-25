const connection = require('./connection');
const Author = require('./Author');

const serialize = ({ id, title, author_id }) => ({
  id,
  title,
  authorId: author_id,
});

const getAll = async () => {
  const query = 'SELECT * FROM model_example.books;';
  const [books] = await connection.execute(query);
  return books.map(serialize);
}

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id = ?;';
  const [books] = await connection.execute(query, [authorId]);
  return books.map(serialize);
}

const findById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;';
  const [books] = await connection.execute(query, [id]);
  if (books.length === 0) return null;

  return books.map(serialize)[0];
}

const isValid = async (title, authorId) => {
  if (!title || title.length < 3 || typeof title !== 'string') return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
}

const create = async (title, authorId) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?);';
  connection.execute(query, [title, authorId]);
}

module.exports = { getAll, getByAuthorId, findById, isValid, create };
