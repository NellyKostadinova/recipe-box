import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import './DifficultyLevel.scss';

function DifficultyLevel(props) {
  const [internalValue, setInternalValue] = useState(props.level);

  useEffect(() => {
    if (props.saving) {
      props.handleSave(props.id, 'difficulty', internalValue);
    }
  }, [props.saving]);

  function handleChange(value) {
    setInternalValue(value);
  }

  return (
    <figure className="difficulty">
      <figcaption>Difficulty:</figcaption>
      <Rating
        initialRating={internalValue}
        readonly={props.editing ? '' : 'readonly'}
        fullSymbol={<div className="full"></div>}
        emptySymbol={<div></div>}
        className="scale"
        onChange={handleChange}
      />
    </figure>
  );
}

export default DifficultyLevel;
