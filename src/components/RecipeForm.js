import React from 'react';
import { mockImage } from '../_helpers';
import EditableList from './EditableList';
import Rating from 'react-rating';

function RecipeForm(props) {
  return (
    <section>
      <form onSubmit={props.onSubmit}>
        <div className="focus-recipe">
          <div className="recipe-info">
            <input
              name="title"
              value={props.title}
              placeholder="My new recipe"
              required
              onChange={props.onChange}
              type="text"
              className="recipe-title"
            />
            <EditableList
              items={props.categories}
              name="categories"
              placeholder="category"
              onChange={props.onListChange}
              onAddItem={props.onAddItem}
              className="tag-list"
              inputClassName="category-tag"
            />
            <label>Difficulty: </label>
            <Rating
              initialRating={props.difficulty}
              fullSymbol={<div className="full"></div>}
              emptySymbol={<div></div>}
              className="scale"
              name="difficulty"
              onChange={props.onDifficultyChange}
            />
            <div className="recipe-section">
              <h2>Ingredients:</h2>
              <EditableList
                items={props.ingredients}
                name="ingredients"
                onChange={props.onListChange}
                onAddItem={props.onAddItem}
              />
            </div>
            <div className="recipe-section">
              <h2>Instructions:</h2>
              <EditableList
                items={props.instructions}
                name="instructions"
                onChange={props.onListChange}
                onAddItem={props.onAddItem}
                inputTag="textarea"
                ordered={true}
              />
            </div>
          </div>
          <div className="recipe-image">
            <img src={props.imgUrl || mockImage} alt={props.title} />
            <input
              name="imgUrl"
              value={props.imgUrl}
              placeholder="Image URL"
              onChange={props.onChange}
              type="text"
            />
          </div>
        </div>
        <input type="submit" value="Save" className="button" />
      </form>
    </section>
  );
}

export default RecipeForm;
