import React from 'react';

const VillagersGrid = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((villager) => (
          <figure key={villager.id}>
            <Link to={`/villagers/${villager.id}`}>
              <h1>{villager.name.name-EUes}</h1>
              <img
                className="imageFigure"
                src={villager.icon_uri}
                alt={villager.name.name-EUes}
              />
              <p className="description">{villager.saying}</p>
            </Link>
          </figure>
        ))}
    </>
  );;
};

export default VillagersGrid;
