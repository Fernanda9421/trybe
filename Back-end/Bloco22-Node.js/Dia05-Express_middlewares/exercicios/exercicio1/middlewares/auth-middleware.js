const username = (req, res, next) => {
  const { username } = req.body;

  if (!username || username.length < 3) {
    return res.status(400).json({ message: "invalid username" });
  }

  next();
};

const email = (req, res, next) => {
  const { email } = req.body;

  if (!email || !(email.includes('@') && email.includes('.com'))) {
    return res.status(400).json({ message: "invalid email" });
  };

  next();
}

const password = (req, res, next) => {
  const { password } = req.body;
  const onlyNumbers = /^\d+$/;

  if (!password || password.length < 4 || password.length > 8 || !(onlyNumbers.test(password))) {
    return res.status(400).json({ message: "invalid password" });
  };

  next();
};

module.exports = { username, email, password };
