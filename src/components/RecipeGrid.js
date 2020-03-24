import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeGrid.scss';

function RecipeGrid(props) {
  return (
    <section className="recipes-grid">
      {props.recipes.map(recipe => {
        return <RecipeCard {...recipe} key={recipe.id} />;
      })}
    </section>
  );
}

export default RecipeGrid;
