import { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';

const getVillagers = () => {
  const [data, setData] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://acnhapi.com/v1/villagers/',
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

export default getVillagers;
