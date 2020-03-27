import React from 'react';

function SecondaryButton(props) {
  return (
    <button className="secondary" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default SecondaryButton;
