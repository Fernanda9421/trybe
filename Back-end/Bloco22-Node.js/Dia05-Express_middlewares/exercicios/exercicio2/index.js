const express = require('express');
const app = express();
const axios = require('axios');
const validToken = require('./middlewares/token-middleware');

app.use(express.json());

const PORT = 3001;
const URLAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json);';

app.get(
  '/btc/price',
  validToken,
  async (_req, res) => {
    const result = await axios.get(URLAPI);
    return res.status(200).json( result.data );
  }
);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
