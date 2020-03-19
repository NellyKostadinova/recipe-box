import React from 'react';
import './Header.scss';

function Header(props) {
  return (
    <header>
      <div className="container">
        <div className="brand">
          <img className="logo" src="./rb-logo.svg" alt="logo"></img>
          <h2>Recipe Box</h2>
        </div>
        <nav>
          <button className="add-recipe" onClick={props.showRecipeForm}>
            Add new recipe
          </button>
          <button className="list">Shopping List</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
