import React from 'react';
import './Popup.scss';

function Popup({ children }) {
  return (
    <div className="popup-backdrop">
      <div className="popup">
        <div className="popup-inner">{children}</div>
      </div>
    </div>
  );
}

export default Popup;
