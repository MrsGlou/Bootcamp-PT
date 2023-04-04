import useAxios from '../hooks/useAxios';

export const getVillagers = async (numPage, villagerID) => {
  const options = {
    method: 'GET',
    url: 'https://animal-crossing-new-horizons2.p.rapidapi.com/api/v1/villagers',
    params: { unique_entry_id: villagerID ?? '' },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY_ACNH,
      'X-RapidAPI-Host': 'animal-crossing-new-horizons2.p.rapidapi.com',
    },
  };
  return await useAxios(options);
};
