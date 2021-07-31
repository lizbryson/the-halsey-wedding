import * as React from 'react';
import { Link } from 'gatsby';

import './SiteNav.css';

const SiteNav = () => {
  
  return (
    <header className="siteHeader">
      <div className="siteLogo"></div>
      <nav className="siteNav">
        <ul className="siteNav__inner">
          <li className="siteNav__li"><Link to="/rsvp">RSVP</Link></li>
          <li className="siteNav__li"><a href="#hotels">Hotels</a></li>
          <li className="siteNav__li"><a href="#transport">Transport</a></li>
          <li className="siteNav__li"><a href="https://www.zola.com/registry/thehalseywedding" target="_blank">Registry</a></li>
        </ul>
      </nav>
      <div classname="siteScroll">
        <span className="siteScroll__text">Scroll</span>
        <div className="siteScroll__icon"></div>
      </div>
    </header>
  )
}

export default SiteNav;