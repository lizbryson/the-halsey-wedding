import * as React from "react";
import HotelCard from "../HotelCard/HotelCard";
import "./HotelsSection.css";

const hotelData = {
  hotels: [
    {
      name: "The Sinclair",
      location: "Downtown Fort Worth",
      address: "512 Main Street, Fort Worth, TX 76102",
      url: "https://www.google.com",
      map: "https://goo.gl/maps/gSqKJe9R7C37cEYD6",
      phone: "682-231-8214",
      image: {
        src: "./sinclair.jpg",
      },
      commute: [15, 45, 65],
    },
    {
      name: "Towneplace Suites",
      location: "Fort Worth University Area / Medical District",
      address: "3450 W. Vickery Blvd, Fort Worth, Texas 76107",
      url: "https://www.google.com",
      map: "https://goo.gl/maps/JoujyKNQjw4ehvNC8",
      phone: "817-632-0800",
      image: {
        src: "./towneplace.jpg",
      },
      commute: [15, 45, 65],
    },
    {
      name: "Fairfield Inn & Suites",
      location: "Terrell, Texas",
      address: "351 Market Center, Terrell, Texas 75160",
      url: "https://www.google.com",
      map: "https://goo.gl/maps/A1zdDUWwTnNqDVi98",
      phone: "+972-551-3200",
      image: {
        src: "./terrell.jpg",
      },
      commute: [15, 45, 65],
    },
  ],
};
const HotelsSection = () => {
  return (
    <section className="hotelsSection">
      <div className="hotelsSection__inner">
        <div className="hotelSection__header">
          <h3 className="hotelsSection__headline">Hotels</h3>
        </div>
        <div className="hotelSection__body">
          {hotelData.hotels.map((hotel, index) => (
            <HotelCard key={`hotel_${index}`} info={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
