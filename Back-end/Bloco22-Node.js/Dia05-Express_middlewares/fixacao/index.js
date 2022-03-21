const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middlewares/auth-middleware');

const app = express();
app.use(bodyParser.json());

app.get('/open', function (_req, res) {
  res.send('open!')
});

const recipesRouter = require('./routes/recipesRouter');

app.use(authMiddleware);

app.use('/recipes', recipesRouter);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
