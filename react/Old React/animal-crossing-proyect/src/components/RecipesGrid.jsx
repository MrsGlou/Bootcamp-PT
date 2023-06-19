import React from 'react';
import './RecipesGrid.css';

const RecipesGrid = ({ data }) => {
  const recipes = Object.values(data);
  const handleWine = (e) => {
    const recipeName = e.target.value;
    console.log(recipeName);
  };
  return (
    <div className="gridContainter">
      {recipes.map((recipe) => (
        <figure className="recipeContainer" key={recipe.id}>
          <h1>{recipe.name}</h1>
          <img className="imageFigure" src={recipe.img} alt={recipe.name} />
          <p className="description">{recipe.sell_price}</p>
          <button onClick={(e) => handleWine(e)} id={recipe.id}>
            🍷
          </button>
        </figure>
      ))}
    </div>
  );
};

export default RecipesGrid;
