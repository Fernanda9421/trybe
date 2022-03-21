const express = require('express');
const app = express();
app.use(express.json());

const pong = require('./middlewares/ping');
const hello = require('./middlewares/hello');
const greeting = require('./middlewares/greeting');

app.get('/ping', pong);
app.post('/hello', hello);
app.post('/greeting', greeting);

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});