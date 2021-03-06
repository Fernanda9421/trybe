const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const userController = require('./src/controllers/userController');

app.use('/user', userController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
