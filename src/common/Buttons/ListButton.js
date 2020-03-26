import React from 'react';

function ListButton(props) {
  return (
    <button onClick={props.onClick} className="list">
      <span className="wrapper">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  );
}

export default ListButton;
