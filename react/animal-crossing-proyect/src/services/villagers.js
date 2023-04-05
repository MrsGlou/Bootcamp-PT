import useAxios from '../hooks/useAxios';

export const getVillagers = async () => {
  const options = {
    method: 'GET',
    url: 'https://acnhapi.com/v1/villagers/',
  };
  return await useAxios(options);
};

export const getVillager = async ( villagerID) => {
  const options = {
    method: 'GET',
    url: 'https://acnhapi.com/v1/villagers/',
    params: { unique_entry_id: villagerID ?? '' },
  };
  return await useAxios(options);
};