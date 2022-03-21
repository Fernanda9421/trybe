const express = require('express');
const app = express();
app.use(express.json());

const pong = require('./middlewares/ping');
const hello = require('./middlewares/hello');

app.get('/ping', pong);
app.post('/hello', hello);

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});