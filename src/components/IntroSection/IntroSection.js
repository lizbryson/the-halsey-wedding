import * as React from "react";
import "./IntroSection.css";
import EmersonIcon from "../../svg/EmersonIcon";
import LinkIcon from "../../svg/LinkIcon";
const IntroSection = () => {
  return (
    <section className="introSection">
      <div className="introSection__inner">
        <EmersonIcon />
        <p>PLEASE JOIN US ON</p>
        <h2>Sunday, October 17th</h2>
        <p>WHEN THE CLOCK STRIKES</p>
        <h2>Half Past Five in the Evening</h2>
        <p>IN FRONT OF THE CHAPEL AT</p>
        <h2>The Emerson</h2>
        <p>
          <a href="https://goo.gl/maps/UCS8DhmxiPhJ4nQz7" target="_blank">
            3950 FM 987, Kaufman, Texas 75142
            <LinkIcon />
          </a>
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
