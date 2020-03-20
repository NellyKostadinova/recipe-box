import React from 'react';
import TagList from './TagList';
import './RecipeCard.scss';

function RecipeCard(props) {
  const Background = props.imgUrl;
  return (
    <div className="recipe-card">
      <div
        className="card-img"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className="card-info">
        <TagList tags={props.categories} />
        <h3>{props.title}</h3>
        <button
          onClick={() => {
            props.clickHandler(props.id);
          }}
        >
          Open recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
