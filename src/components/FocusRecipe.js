import React from 'react';
import { mockImage } from '../_helpers';
import TagList from './TagList';
import DifficultyLevel from './DifficultyLevel';
import RecipeSection from './RecipeSection';
import './FocusRecipe.scss';

function FocusRecipe(props) {
  function handleImageError(event) {
    event.target.src = mockImage;
  }
  return (
    <section>
      <article className="focus-recipe">
        <div className="recipe-info">
          <h1>{props.title}</h1>
          <TagList tags={props.categories} />
          <DifficultyLevel level={props.difficulty} />
          <RecipeSection
            title="Ingredients:"
            items={props.ingredients}
            ordered={false}
            className="recipe-ingredients"
          />
          <RecipeSection
            title="Instructions:"
            items={props.instructions}
            ordered={true}
            className="recipe-instructions"
          />
        </div>
        <div className="recipe-image">
          <img
            src={props.imgUrl}
            alt={props.title}
            onError={handleImageError}
          ></img>
        </div>
      </article>
    </section>
  );
}

export default FocusRecipe;
