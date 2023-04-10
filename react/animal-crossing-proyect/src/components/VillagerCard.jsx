import React from 'react';

const VillagerCard = ({ data }) => {
  const villager = Object.values(data);
  return (
    <figure>
      <h1>{villager.name['name-EUes']}</h1>
    </figure>
  );
};

export default VillagerCard;
