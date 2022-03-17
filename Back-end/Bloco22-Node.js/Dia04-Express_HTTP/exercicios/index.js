const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue')
const simpsonsUtils = require('./fs_utils');

const app = express();
app.use(bodyParser.json());

// exercício 1
app.get('/ping', (req,res) => {
  return res.status(200).json({ message: 'pong' });
});

// exercício 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(201).json({ message: `Hello, ${ name }!` });
});

// exercício 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age) <= 17) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.status(200).json({ message: `Hello, ${ name }!` });
});

// exercício 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${ name } e você tem ${ age } anos de idade` });
});

// exercício 5
app.get('/simpsons', rescue(async (_req, res) => {
  const simpsons = await simpsonsUtils.readFileSimpsons();
  res.status(200).json(simpsons);
}));

// exercício 6
app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const simpsons = await simpsonsUtils.readFileSimpsons();
  const findSimpsonById = simpsons.find((s) => s.id === id);

  if(!findSimpsonById) return res.status(404).json({ message: 'simpson not found' });
  res.status(200).json(findSimpsonById);
}));

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});