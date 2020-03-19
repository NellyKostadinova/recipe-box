import React from 'react';
import DifficultyLevel from './DifficultyLevel';
import RecipeSection from './RecipeSection';
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
          <h1>{props.title}</h1>
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
        <div className="recipe-image">
          <img src={props.imgUrl} alt={props.title}></img>
        </div>
      </article>
    </section>
  );
}

export default FocusRecipe;
