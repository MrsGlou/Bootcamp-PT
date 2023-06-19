import { createContext, useEffect, useState } from 'react';

export const favoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavorites(favoritosGuardados);
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favorites));
  }, [favorites]);

  function deleteLike(id) {
    const newFavorites = favorites.filter((favorito) => favorito.id !== id);
    setFavorites(newFavorites);
  }

  return (
    <favoriteContext.Provider value={{ deleteLike, favorites, setFavorites }}>
      {children}
    </favoriteContext.Provider>
  );
};
