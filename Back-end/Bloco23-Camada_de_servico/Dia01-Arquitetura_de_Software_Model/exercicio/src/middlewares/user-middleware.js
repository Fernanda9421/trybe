const isValidFirstName = (req, res, next) => {
  const { firstName } = req.body;
  if (!firstName || typeof firstName !== 'string') {
    return res.json({
      error: true,
      message: "O campo 'first_name' é obrigatório"
    });
  };
  next();
};

const isValidLastName = (req, res, next) => {
  const { lastName } = req.body;
  if (!lastName || typeof lastName !== 'string') {
    return res.json({
      error: true,
      message: "O campo 'last_name' é obrigatório"
    });
  };
  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email || !(email.includes('@') || email.includes('.com'))) {
    return res.json({
      error: true,
      message: "O campo 'email' é obrigatório ou está incorreto"
    });
  };
  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length < 6 || typeof password !== 'string') {
    return res.json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  };
  next();
};

module.exports = {
  isValidFirstName,
  isValidLastName,
  isValidEmail,
  isValidPassword,
};
