const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'fernanda',
  password: 'Fer#210600',
  database: 'user_crud'
});

module.exports = connection;
