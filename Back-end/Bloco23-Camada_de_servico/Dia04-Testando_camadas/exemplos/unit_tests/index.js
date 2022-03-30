require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT;
const movieControler = require('./controllers/movieController');

app.use(express.json());

app.post('/movie', movieControler);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
