import React from 'react';
import RecipeTitle from './RecipeTitle';
import TagList from './TagList';
import DifficultyLevel from './DifficultyLevel';
import RecipeSection from './RecipeSection';
import RecipeImage from './RecipeImage';
import './FocusRecipe.scss';

function FocusRecipe(props) {
  return (
    <section>
      <button onClick={props.closeRecipe}>{'<- '}Back</button>
      <button
        className="danger"
        onClick={() => {
          props.deleteRecipe(props.id);
        }}
      >
        Delete
      </button>
      <article className="focus-recipe">
        <div className="recipe-info">
          <RecipeTitle
            title={props.title}
            id={props.id}
            saveRecipe={props.saveRecipe}
          />
          <TagList tags={props.categories} />
          <DifficultyLevel level={props.difficulty} />
          <RecipeSection
            id={props.id}
            title="Ingredients:"
            itemsKey="ingredients"
            items={props.ingredients}
            ordered={false}
            className="recipe-ingredients"
            saveRecipe={props.saveRecipe}
          />
          <RecipeSection
            id={props.id}
            title="Instructions:"
            itemsKey="instructions"
            items={props.instructions}
            ordered={true}
            className="recipe-instructions"
            saveRecipe={props.saveRecipe}
          />
        </div>
        <RecipeImage
          id={props.id}
          title={props.title}
          imgUrl={props.imgUrl}
          saveRecipe={props.saveRecipe}
        />
      </article>
    </section>
  );
}

export default FocusRecipe;
