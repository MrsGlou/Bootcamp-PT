import { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';

const getRecipes = () => {
  const [data, setData] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://642d3e0f66a20ec9ce98270f.mockapi.io/api/v1/items',
  };
  const getData = async () => {
    const data = await useAxios(options);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return data;
};

export default getRecipes;
