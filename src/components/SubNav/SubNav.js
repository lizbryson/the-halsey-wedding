import * as React from "react";
import { Link } from "gatsby";
import Logo from "../../svg/Logo";
import "./SubNav.css";

const SubNav = () => {
  return (
    <header className="siteSubHeader">
      <nav className="siteSubNav">
        <ul className="siteSubNav__inner">
          <li className="siteSubNav__li">
            <Link to="/">Home</Link>
          </li>
          <li className="siteSubNav__li">
            <a href="/#hotels">Hotels</a>
          </li>
          <Link to="/" className="siteLogo">
            <Logo />
          </Link>
          <li className="siteSubNav__li">
            <a href="/#transport">Transport</a>
          </li>
          <li className="siteSubNav__li">
            <a
              href="https://www.zola.com/registry/thehalseywedding"
              target="_blank"
              rel="noopener noreferrer"
            >
              Registry
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SubNav;
