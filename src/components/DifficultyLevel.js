import React from 'react';
import './DifficultyLevel.scss';

function DifficultyLevel(props) {
  const dots = [];

  for (let i = 0; i < props.level; i++) {
    dots.push(<div className="full" key={i}></div>);
  }

  for (let i = 5; i > props.level; i--) {
    dots.push(<div key={i}></div>);
  }

  return (
    <figure className="difficulty">
      <figcaption>Difficulty:</figcaption>
      <div className="scale">{dots}</div>
    </figure>
  );
}

export default DifficultyLevel;
