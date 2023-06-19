import useAxios from '../hooks/useAxios';

export const getWine = async (recipeName) => {
  const options = {
    method: 'GET',
    url: 'https://wine-pair.p.rapidapi.com/winesuggest.php',
    params: { query: recipeName },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY_WINE,
      'X-RapidAPI-Host': 'wine-pair.p.rapidapi.com',
    },
  };
  return await useAxios(options);
};
