const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const query = 'INSERT INTO movies (title, directed_by, release_year) VALUES (?, ?, ?);';
  const [result] = await connection.execute(query, [title, directedBy, releaseYear]);
  return {
    id: result.insertId,
  };
};

const getById = async (id) => {
  const query = 'SELECT * FROM movies WHERE id = ?;';
  const [result] = await connection.execute(query, [id]);

  if (!result.length) return null;
  return result[0];
};

module.exports = { create, getById };
