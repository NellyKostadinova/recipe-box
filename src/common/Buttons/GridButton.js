import React from 'react';

function GridButton(props) {
  return (
    <button onClick={props.onClick} className="grid">
      <span className="wrapper">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  );
}

export default GridButton;
