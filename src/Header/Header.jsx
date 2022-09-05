import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="cyan darken-3">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/foods-react/about">About</Link>
          </li>
          <li>
            <Link to="/foods-react/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
