import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="container">
        <nav>
          <a href="https://github.com/NellyKostadinova">GitHub</a>
          <a href="https://www.linkedin.com/in/nelly-kostadinova-aab60196/">
            Linkedin
          </a>
        </nav>
        <div className="credits">
          Icons made by{' '}
          <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">
            iconixar
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
