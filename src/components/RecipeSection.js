import React from 'react';
import './RecipeSection.scss';

function RecipeSection(props) {
  const ListTag = props.ordered ? 'ol' : 'ul';

  return (
    <div className={props.className + ' recipe-section'}>
      <h2>{props.title}</h2>
      <ListTag>
        {props.items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ListTag>
    </div>
  );
}

export default RecipeSection;
