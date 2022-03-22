const express = require('express');
const router = express.Router();

const { username, email, password } = require('../middlewares/auth-middleware');
const generateToken = require('../token-utils/generateToken');
const token = generateToken(12);

router.post(
  '/register',
  username, email, password,
  (_req, res) => {
    res.status(201).json({ message: "user created" });
  }
);

router.post(
  '/login',
  email, password,
  (req, res) => {
    res.status(200).json({ token });
  }
);

module.exports = router;
