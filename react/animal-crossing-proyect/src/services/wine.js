import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://wine-pair.p.rapidapi.com/winesuggest.php',
  params: { query: 'Pasta Bolognese' },
  headers: {
    'X-RapidAPI-Key': '25b396dccfmsh7b4fb99805610a6p17dc34jsncc56d2e9498f',
    'X-RapidAPI-Host': 'wine-pair.p.rapidapi.com',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
