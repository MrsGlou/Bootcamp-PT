import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://animal-crossing-new-horizons2.p.rapidapi.com/api/v1/recipes',
  params: { category: 'cooking', page_size: '10', page: '1' },
  headers: {
    'X-RapidAPI-Key': '25b396dccfmsh7b4fb99805610a6p17dc34jsncc56d2e9498f',
    'X-RapidAPI-Host': 'animal-crossing-new-horizons2.p.rapidapi.com',
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
