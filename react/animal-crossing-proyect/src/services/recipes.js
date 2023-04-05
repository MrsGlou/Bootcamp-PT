import useAxios from '../hooks/useAxios';

export const getRecipes = async () => {
  const options = {
    method: 'GET',
    url: 'https://642d3e0f66a20ec9ce98270f.mockapi.io/api/v1/items',
  };
  return await useAxios(options);
};
