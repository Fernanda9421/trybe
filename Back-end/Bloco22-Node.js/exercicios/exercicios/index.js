const express = require('express');
const app = express();
const pong = require('./middlewares/ping');

app.get('/ping', pong);

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});