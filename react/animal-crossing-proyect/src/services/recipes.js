import useAxios from '../hooks/useAxios';

export const getRecipes = async () => {
  const options = {
    method: 'GET',
    url: 'https://animal-crossing-new-horizons2.p.rapidapi.com/api/v1/recipes',
    params: { category: 'cooking' },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY_ACNH,
      'X-RapidAPI-Host': 'animal-crossing-new-horizons2.p.rapidapi.com',
    },
  };
  return await useAxios(options);
};
