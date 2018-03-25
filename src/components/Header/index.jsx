import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faGgCircle from '@fortawesome/fontawesome-free-brands/faGgCircle';
import './index.css';

const Header = () => (
  <header className="header">
    <a className="project__logo" href="/">
      <FontAwesomeIcon
        icon={faGgCircle}
        size="2x"
        color="#252526"
      />
      <span className="project__name">
        DEVREAD
      </span>
    </a>
  </header>
);

export default Header;
