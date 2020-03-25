import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.scss';

function Header() {
  return (
    <header>
      <div className="container">
        <Link to="/" className="brand">
          <Logo />
          <h2>Recipe Box</h2>
        </Link>
        <nav>
          <Link to="/add" className="button icon-button add-recipe">
            Add new recipe
          </Link>
          <Link to="/shopping-list" className="button icon-button list">
            Shopping List
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
