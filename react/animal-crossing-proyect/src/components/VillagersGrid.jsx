import React from 'react';
import { Link } from 'react-router-dom';
import './VillagersGrid.css';

const VillagersGrid = ({ villagers }) => {
  const handleLike = (e) => {
    console.log(e.target.id);
  };
  return (
    <div className="gridContainer">
      {villagers.map((villager) => (
        <figure className="villagerContainer" key={villager.id}>
          <Link to={`/villagers/${villager.id}`}>
            <h1>{villager.name['name-EUes']}</h1>
            <img
              className="imageFigure"
              src={villager.icon_uri}
              alt={villager.name['name-EUes']}
            />
          </Link>
          <button onClick={(e) => handleLike(e)} id={villager.id}>
            💙
          </button>
        </figure>
      ))}
    </div>
  );
};

export default VillagersGrid;
