import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeGrid.scss';

function RecipeGrid(props) {
  return (
    <section className="recipes-grid">
      {props.recipes.map(recipe => {
        return (
          <RecipeCard
            {...recipe}
            clickHandler={props.openRecipe}
            key={recipe.id}
          />
        );
      })}
    </section>
  );
}

export default RecipeGrid;
