// // apiScript.js     
// const API_URL = 'https://icanhazdadjoke.com/';

// const append = (data) => {
//   const h2 = document.querySelector('#jokeContainer');
//   h2.innerHTML = data.joke;
// }

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//     .then((response) => response.json())
//     .then((data) => {
//       const jokes = {
//         joke: data.joke,
//       }
//       append(jokes);
//     })
// };

// window.onload = () => fetchJoke();

// OU:
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      document.querySelector('#jokeContainer').innerHTML = data.joke;
    });
};

window.onload = () => fetchJoke();