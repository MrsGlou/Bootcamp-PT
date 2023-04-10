import React from 'react';

const VillagerCard = ({ data }) => {
  console.log(data);
  return (
    <figure className="villagerCard">
      <h1>{data.name['name-EUes']}</h1>
      <h3>{data.birthday}</h3>
      <h3>{data.personality}</h3>
      <h3>{data.species}</h3>
      <h3>{data.saying}</h3>
      <img src={data.icon_uri} alt={data.name['name-EUes']} />
    </figure>
  );
};

export default VillagerCard;
