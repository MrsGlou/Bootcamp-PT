import React, { useEffect, useState } from 'react';
import RecipesGrid from '../components/RecipesGrid';
import { getRecipes } from '../services/recipes';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      setRecipes(await getRecipes());
    })();
  }, []);
  return (
    <div>
      <RecipesGrid data={recipes} />
    </div>
  );
};

export default Recipes;
