const express = require('express');
const router = express.Router();

const { username, email, password } = require('../middlewares/auth-middleware');

router.post(
  '/register',
  username, email, password,
  (_req, res) => {
    res.status(201).json({ message: "user created" });
  }
);

module.exports = router;
