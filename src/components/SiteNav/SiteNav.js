import * as React from "react";
import { Link } from "gatsby";
import Logo from "../../svg/Logo";
import "./SiteNav.css";
import { StaticImage } from "gatsby-plugin-image";

const SiteNav = () => {
  return (
    <header className="siteHeader">
      <div className="siteLogo">
        <Logo />
      </div>
      <nav className="siteNav">
        <ul className="siteNav__inner">
          <li className="siteNav__li">
            <Link to="/rsvp">RSVP</Link>
          </li>
          <li className="siteNav__li">
            <a href="#hotels">Hotels</a>
          </li>
          <li className="siteNav__li">
            <a href="#transport">Transport</a>
          </li>
          <li className="siteNav__li">
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
      <div className="siteScroll">
        <span className="siteScroll__text">Scroll</span>
        <div className="siteScroll__icon"></div>
      </div>
      <div id="photoOne" className="photo-float is-bottom-left">
        <StaticImage
          src="../../images/lizryan1.jpeg"
          alt="Liz + Ryan Portrait"
        />
      </div>
      <div id="photoTwo" className="photo-float is-top-right">
        <StaticImage
          src="../../images/lizryan4.jpeg"
          alt="Liz + Ryan Portrait"
        />
      </div>
      <div id="photoThree" className="photo-float is-bottom-right">
        <StaticImage
          src="../../images/lizryan2.jpeg"
          alt="Liz + Ryan Portrait"
        />
      </div>
    </header>
  );
};

export default SiteNav;
