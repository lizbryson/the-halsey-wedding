import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import "./HotelCard.css";

const HotelCard = ({ info }) => {
  return (
    <article className="hotelCard">
      <div className="hotelCard__inner">
        <div className="hotelCard__image">
          <img src={info.image.src} alt="" />
        </div>
        <div className="hotelCard__meta">
          <p className="hotelCard__location">{info.location}</p>
          <h4 className="hotelCard__name">{info.name}</h4>
          <hr className="hotelCard__divider" />
          <p className="hotelCard__address">{info.address}</p>
          <div className="hotelCard__buttons">
            <a href={info.url}>Book Online</a>
            <a href={info.phone}>Call To Book</a>
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
