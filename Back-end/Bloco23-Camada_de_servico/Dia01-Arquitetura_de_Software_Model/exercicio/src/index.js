const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3001;
const User = require('./models/User');

const {
  isValidFirstName, isValidLastName, isValidEmail, isValidPassword
} = require('./middlewares/user-middleware');

app.get('/user', async (req, res) => {
  const users = await User.allUsers();
  return res.status(200).json(users);
});

app.get(
  '/user/:id',
  async (req, res) => {
    const { id } = req.params;

    const user = await User.getUserById(id);
    if (!user) return res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
    });

    return res.status(200).json(user);
  }
);

app.post(
  '/user',
  isValidFirstName, isValidLastName, isValidEmail, isValidPassword,
  async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const id = await User.create(firstName, lastName, email, password);
    res.status(201).json({
      id,
      firstName,
      lastName,
      email,
    });
  }
);

app.put(
  '/user/:id',
  isValidFirstName, isValidLastName, isValidEmail, isValidPassword,
  async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const { id } = req.params;

    const user = await User.update(id, { firstName, lastName, email, password });
    if (!user) return res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
    });

    res.status(201).json(user);
  }
)

app.listen(PORT, () => console.log('Online'));
