const fetch = require('node-fetch');
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

const headers = new fetch.Headers({
  Authorization: API_TOKEN
});

fetch('https://postman-echo.com/get?param1=teste', {
  headers
})
  .then((response) => {
    if (!response.ok) return Promise.reject(response);

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((errorOrResponse) => {
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    console.error(errorOrResponse);
  });
