import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import VillagerCard from '../components/VillagerCard';
import { getVillager } from '../services/villagers';

const VillagerDetail = () => {
  const { id } = useParams()
  const [villager, setVillager] = useState([]);
  useEffect(() => {
    (async () => {
      setVillager(await getVillager(id));
    })();
  }, []);
  return (
    <div>
      <VillagerCard data={villager} />
    </div>
  );
};

export default VillagerDetail;
