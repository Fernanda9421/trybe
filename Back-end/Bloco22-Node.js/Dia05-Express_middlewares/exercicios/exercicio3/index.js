const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3001;

const postsRouter = require('./routes/postsRouter');
const error = require('./middlewares/errorMiddleware');

app.use('/posts', postsRouter);
app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(error);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
