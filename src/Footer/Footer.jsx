import React from "react";
import cn from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={cn.footer}>
      <div className="container">
        <div className={cn.wrapper}>
          <span>© {new Date().getFullYear()} Copyright Text</span>
          <span>
            <a
              className={cn.footer__link}
              href="https://github.com/konst1984/foods-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
