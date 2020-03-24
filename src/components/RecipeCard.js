import React from 'react';
import TagList from './TagList';
import './RecipeCard.scss';
import { Link } from 'react-router-dom';

function RecipeCard(props) {
  const Background =
    props.imgUrl ||
    'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
  return (
    <div className="recipe-card">
      <div
        className="card-img"
        style={{ backgroundImage: `url(${Background})` }}
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
