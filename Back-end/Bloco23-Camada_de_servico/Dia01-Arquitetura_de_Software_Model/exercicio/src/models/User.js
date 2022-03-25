const connection = require('./connection');

const serialize = ({ id, first_name, last_name, email, password }) => ({
  id,
  firstName: first_name,
  lastName: last_name,
  email,
  password,
});

const create = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO user_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?);';
  const [{ insertId }] = await connection.execute(query, [firstName, lastName, email, password]);

  return insertId;
};

const allUsers = async () => {
  const query = 'SELECT * FROM user_crud.users;';
  const [users] = await connection.execute(query);
  return users;
}

const getUserById = async (id) => {
  const query = 'SELECT * FROM user_crud.users WHERE id = ?;';
  const [userData] = await connection.execute(query, [id]);

  if (userData.length === 0) return null;
  return userData.map(serialize)[0];
}

const update = async (id, { firstName, lastName, email, password }) => {
  const query = 'UPDATE user_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;';
  await connection.execute(query, [firstName, lastName, email, password, id]);
 
  return getUserById(id);
}

module.exports = { create, allUsers, getUserById, update };