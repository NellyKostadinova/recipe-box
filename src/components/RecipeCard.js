import React from 'react';
import { Link } from 'react-router-dom';
import { mockImage } from '../_helpers';
import TagList from './TagList';
import './RecipeCard.scss';

function RecipeCard(props) {
  return (
    <div className="recipe-card">
      <div
        className="card-img"
        style={{ backgroundImage: `url(${props.imgUrl || mockImage})` }}
      ></div>
      <div className="card-info">
        <TagList tags={props.categories} />
        <h3>{props.title}</h3>
        <Link to={`/recipe/${props.id}`}>
          <button>Open recipe</button>
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
