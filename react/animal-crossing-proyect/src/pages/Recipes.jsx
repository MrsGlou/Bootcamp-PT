import React from 'react';
import { useOutletContext } from 'react-router-dom';

import RecipesGrid from '../components/RecipesGrid.jsx';

const Recipes = () => {
  const [requestRecipes] = useOutletContext();
  return (
    <div>
      <RecipesGrid data={requestRecipes} />
    </div>
  );
};

export default Recipes;
