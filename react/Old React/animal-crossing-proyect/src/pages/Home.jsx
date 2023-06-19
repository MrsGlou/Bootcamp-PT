import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import VillagersGrid from '../components/VillagersGrid';
import './Home.css';
import RecipesGrid from '../components/RecipesGrid';

const Home = () => {
  const [requestRecipes, requestVillagers] = useOutletContext();
  const villagers = Object.values(requestVillagers);
  const recipes = Object.values(requestRecipes);

  const randomItem = (villagers) => {
    const result = [...villagers];
    const randomElements = [];

    while (randomElements.length < 6 && result.length > 0) {
      const randomIndex = Math.floor(Math.random() * result.length);
      randomElements.push(result[randomIndex]);
      result.splice(randomIndex, 1); // removemos el elemento del array result
    }
    return randomElements;
  };

  const randomVillagers = randomItem(villagers);
  const randomRecipes = randomItem(recipes);

  return (
    <>
      <div className="homeVillagers">
        <VillagersGrid data={randomVillagers} />
        <button className="btn-ViewAll">
          <Link to="/villagers">VER TODOS</Link>
        </button>
      </div>
      <div className="homeVillagers">
        <RecipesGrid data={randomRecipes} />
        <button className="btn-ViewAll">
          <Link to="/recipes">VER TODOS</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
