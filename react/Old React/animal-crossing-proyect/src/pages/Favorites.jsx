import React, { useContext } from 'react';
import { favoriteContext } from '../context/FavoriteContext';

const Favorites = () => {
  const { favorites } = useContext(favoriteContext);
  return (
    <div>
      <h2>Elementos Favoritos</h2>
      <ul>
        {favorites.map((favorito) => (
          <li key={favorito.id}>{favorito.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
