const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'fernanda',
  password: 'Fer#210600',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;