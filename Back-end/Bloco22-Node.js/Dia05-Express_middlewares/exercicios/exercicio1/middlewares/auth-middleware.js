const username = (req, res, next) => {
  const { username } = req.body;

  if (username.length < 3) return res.status(400).json({ message: "invalid data" });
  next();
};

const email = (req, res, next) => {
  const { email } = req.body;

  if (!(email.includes('@') && email.includes('.com'))) {
    return res.status(400).json({ message: "invalid data" });
  };

  next();
}

const password = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 4 || password.length > 8) {
    return res.status(400).json({ message: "invalid data" });
  };

  next();
};

module.exports = { username, email, password };
