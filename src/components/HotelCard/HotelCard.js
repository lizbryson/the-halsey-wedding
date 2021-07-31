import * as React from "react";
import "./HotelCard.css";

const HotelCard = () => {
  return (
    <article className="hotelCard">
      <div className="hotelCard__inner">
        <div className="hotelCard__image"></div>
        <div className="hotelCard__meta">
          <p className="hotelCard__location">Downtown Fort Worth</p>
          <h4 className="hotelCard__name">The Sinclair</h4>
          <hr className="hotelCard__divider" />
          <p classNmae="hotelCard__address">
            512 Main Street, Fort Worth, TX 76102
          </p>
          <div className="hotelCard__buttons">
            <a href="">Book Online</a>
            <a href="">Call To Book</a>
          </div>
          <ul className="hotelCard__times">
            <li>
              <strong>15M</strong> to Rehearsal Dinner
            </li>
            <li>
              <strong>65M</strong> to Wedding
            </li>
            <li>
              <strong>45M</strong> to DFW Airport
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default HotelCard;
