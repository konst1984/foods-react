import React from "react";
import { Link } from "react-router-dom";
import cn from "./Header.module.css";
import { ThemeSwitcher } from "../ThemeSwicher";

const Header = () => {
  return (
    <nav className={cn.nav}>
      <div className={`container ${cn.nav__wrapper}`}>
        <Link to="/" className={cn["brand-logo"]}>
          Food recipes
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
