import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import VillagerCard from '../components/VillagerCard';

const VillagerDetail = () => {
  const { id } = useParams();
  const [requestRecipes, requestVillagers] = useOutletContext();
  const villagers = Object.values(requestVillagers);
  const filterData = villagers.filter((villager) => villager.id == id);
  return (
    <div>
      <VillagerCard key={filterData[0].id} data={filterData[0]} />
    </div>
  );
};

export default VillagerDetail;
