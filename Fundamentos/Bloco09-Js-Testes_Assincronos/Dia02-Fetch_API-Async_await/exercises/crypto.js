// const fetchCrypto = async () => {
//   const url = 'https://api.coincap.io/v2/assets';

//   const coins = await fetch(url)
//   .then((response) => response.json())
//   .then((data) => data.data)
//   .catch((error) => error.toString());

//   return coins;
// }

// const append = async () => {
//   const cryptos = await fetchCrypto();

//   const listCoins = document.querySelector('#list-coins');
//   cryptos
//   .filter((crypto, index) => index < 10)
//   .forEach((crypto) => {
//     const li = document.createElement('li');
//     li.innerText = `${crypto.id}(${crypto.symbol}): ${Number(crypto.priceUsd).toFixed(2)}`;

//     listCoins.appendChild(li);
//   })
// }

// window.onload = () => append();

const fetchCrypto = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => error.toString());

  return coins;
}

const append = async () => {
  const cryptos = await fetchCrypto();
  const ulCoins = document.querySelector('#list-coins');
  cryptos
  .filter((crypto, index) => index < 10)
  .forEach((crypto) => {
    const li = document.createElement('li');
    li.innerText = `${crypto.id} (${crypto.symbol}): ${Number(crypto.priceUsd).toFixed(2)}`;

    ulCoins.appendChild(li);
  })
}

window.onload = () => append();