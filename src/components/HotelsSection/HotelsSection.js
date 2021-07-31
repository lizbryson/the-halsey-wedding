import * as React from "react";
import HotelCard from "../HotelCard/HotelCard";
import "./HotelsSection.css";
const HotelsSection = () => {
  return (
    <section className="hotelsSection">
      <div className="hotelsSection__inner">
        <div className="hotelSection__header">
          <h2 className="hotelsSection__headline">Hotels</h2>
        </div>
        <div className="hotelSection__body">
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
