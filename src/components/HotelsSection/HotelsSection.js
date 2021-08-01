import * as React from "react";
import HotelCard from "../HotelCard/HotelCard";
import "./HotelsSection.css";

const hotelData = {
  hotels: [
    {
      name: "The Sinclair",
      location: "Downtown Fort Worth",
      address: "512 Main Street",
      addressTwo: "Fort Worth, TX 76107",
      url: "https://www.google.com",
      phone: "817-555-5555",
      image: "",
      commute: [15, 45, 65],
    },
    {
      name: "Towneplace Suites",
      location: "Fort Worth University Area / Medical District",
      address: "512 Main Street",
      addressTwo: "Fort Worth, TX 76107",
      url: "https://www.google.com",
      phone: "817-555-5555",
      image: "",
      commute: [15, 45, 65],
    },
    {
      name: "Fairfield Inn & Suites",
      location: "Terrell, Texas",
      address: "512 Main Street",
      addressTwo: "Fort Worth, TX 76107",
      url: "https://www.google.com",
      phone: "817-555-5555",
      image: "",
      commute: [15, 45, 65],
    },
  ],
};
const HotelsSection = () => {
  return (
    <section className="hotelsSection">
      <div className="hotelsSection__inner">
        <div className="hotelSection__header">
          <h2 className="hotelsSection__headline">Hotels</h2>
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
