const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const booksController = require('./controllers/bookControler');

app.use(express.json());

app.use('/book', booksController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
