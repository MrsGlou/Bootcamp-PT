import React from 'react';
import { Link } from 'react-router-dom';
import './VillagersGrid.css';

const VillagersGrid = ({ data }) => {
  const villagers = Object.values(data);
  return (
    <div className="gridContainer">
      {villagers.map((villager) => (
        <figure key={villager.id}>
          <Link className="villagerContainer" to={`/villagers/${villager.id}`}>
            <h1>{villager.name['name-EUes']}</h1>
            <img
              className="imageFigure"
              src={villager.icon_uri}
              alt={villager.name['name-EUes']}
            />
          </Link>
        </figure>
      ))}
    </div>
  );
};

export default VillagersGrid;
