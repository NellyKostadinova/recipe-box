import React from 'react';
import Rating from 'react-rating';
import './DifficultyLevel.scss';

function DifficultyLevel(props) {
  return (
    <figure className="difficulty">
      <figcaption>Difficulty:</figcaption>
      <Rating
        initialRating={props.level}
        readonly="readonly"
        fullSymbol={<div className="full"></div>}
        emptySymbol={<div></div>}
        className="scale"
      />
    </figure>
  );
}

export default DifficultyLevel;
