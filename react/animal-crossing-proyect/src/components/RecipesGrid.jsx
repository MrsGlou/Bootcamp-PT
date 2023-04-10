import React from 'react';

const RecipesGrid = ({ data }) => {
  const recipes = Object.values(data);
  return (
    <>
      {recipes.map((recipe) => (
        <figure key={recipe.id}>
          <h1>{recipe.name}</h1>
          <img className="imageFigure" src={recipe.img} alt={recipe.name} />
          <p className="description">{recipe.sell_price}</p>
          <button></button>
        </figure>
      ))}
    </>
  );
};

export default RecipesGrid;
