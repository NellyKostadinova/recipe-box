import React from 'react';
import { Link } from 'react-router-dom';
import { mockImage } from '../../_helpers';
import './RecipeRow.scss';

function RecipeRow(props) {
  return (
    <div className="recipe-row">
      <div
        className="recipe-img"
        style={{ backgroundImage: `url(${props.imgUrl || mockImage})` }}
      ></div>
      <h3>{props.title}</h3>
      <Link to={`/recipe/${props.id}`} className="button">
        Open recipe
      </Link>
    </div>
  );
}

export default RecipeRow;
