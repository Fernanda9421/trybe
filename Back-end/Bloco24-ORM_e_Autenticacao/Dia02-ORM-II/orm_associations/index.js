const express = require('express');
const app = express();

const employeeController = require('./controllers/employeeController');

app.use('/employees', employeeController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
