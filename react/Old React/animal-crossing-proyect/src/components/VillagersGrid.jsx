import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './VillagersGrid.css';
import { favoriteContext } from '../context/FavoriteContext';

const VillagersGrid = ({ data }) => {
  const { favorites, setFavorites } = useContext(favoriteContext);
  const villagers = Object.values(data);
  const handleLike = (e) => {
    const id = e.target.value;
    const villager = villagers.find((villager) => villager.id === id);
    setFavorites([...favorites, villager]);
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
