const fetchCrypto = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => error.toString());

  return coins;
}


const convertPrice = async () => {
  const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
  const convert = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.usd)
  .catch((error) => error.toString())

  return convert;
}

const append = async () => {
  const cryptos = await fetchCrypto();
  const priceConverted = await convertPrice();

  const ulCoins = document.querySelector('#list-coins');
  cryptos
  .filter((crypto, index) => index < 10)
  .forEach((crypto) => {
    const li = document.createElement('li');
    const usdPrice = Number(crypto.priceUsd);
    const brlPrice = usdPrice * priceConverted.brl;
    li.innerText = `${crypto.id} (${crypto.symbol}): ${brlPrice.toFixed(2)}`;

    ulCoins.appendChild(li);
  })
}

window.onload = () => append();