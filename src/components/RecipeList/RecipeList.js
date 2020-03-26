import React from 'react';
import RecipeRow from '../RecipeRow/RecipeRow';
import './RecipeList.scss';

function RecipeList(props) {
  return (
    <section className="recipes-list">
      {props.recipes.map(recipe => {
        return <RecipeRow {...recipe} key={recipe.id} />;
      })}
    </section>
  );
}

export default RecipeList;
