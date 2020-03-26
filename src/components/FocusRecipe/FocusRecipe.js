import React from 'react';
import { mockImage, recipeTemplate } from '../../_helpers';
import TagList from '../TagList/TagList';
import DifficultyLevel from '../DifficultyLevel/DifficultyLevel';
import RecipeSection from '../RecipeSection/RecipeSection';
import './FocusRecipe.scss';

function FocusRecipe(props) {
  return (
    <section>
      <article className="focus-recipe">
        <div className="recipe-info">
          <h1 className="recipe-title">{props.title}</h1>
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
          <img src={props.imgUrl || mockImage} alt={props.title}></img>
        </div>
      </article>
    </section>
  );
}

FocusRecipe.defaultProps = recipeTemplate;

export default FocusRecipe;
