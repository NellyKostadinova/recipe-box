import React from 'react';

function DangerButton(props) {
  return (
    <button className="danger" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default DangerButton;
