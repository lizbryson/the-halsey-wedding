import * as React from "react";
import "./HotelCard.css";

const HotelCard = ({ info }) => {
  return (
    <article className="hotelCard">
      <div className="hotelCard__inner">
        <a
          className="hotelCard__image"
          href={info.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={info.image.src} alt="" />
        </a>
        <div className="hotelCard__meta">
          <div className="hotelCard__top">
            <p className="hotelCard__location">{info.location}</p>
            <h4 className="hotelCard__name">
              <a target="_blank" rel="noopener noreferrer" href={info.url}>
                {info.name}
              </a>
            </h4>
            <hr className="hotelCard__divider" />
            <p className="hotelCard__address">
              <a target="_blank" rel="noopener noreferrer" href={info.map}>
                {info.address}
              </a>
            </p>
            <div className="hotelCard__buttons">
              <a href={info.url}>Book Online</a>
              <a href={info.phone}>Call To Book</a>
            </div>
          </div>

          <ul className="hotelCard__times">
            <li>
              <strong>{info.commute[0]}M</strong> to Rehearsal Dinner
            </li>
            <li>
              <strong>{info.commute[1]}M</strong> to Wedding
            </li>
            <li>
              <strong>{info.commute[2]}M</strong> to DFW Airport
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default HotelCard;
