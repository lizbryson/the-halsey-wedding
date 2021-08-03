import * as React from "react";
import "./transportsection.css";

const TransportationSection = () => {
  return (
    <section className="transportSection">
      <div className="transportSection__inner">
        <h3>Transportation</h3>
        <p>
          A complimentary round trip shuttle will be available to our guests,
          departing from both Fort Worth hotels. shuttle will be arranged to
          transport guests from Fort Worth to The Emerson. If you would like to
          reserve your spot on the shuttle, click the link below. More
          information will be available soon!
        </p>
        <p>
          Should you choose not to take the shuttle, we highly recommend having
          your own form of transportation as rideshare services near the venue
          are limited.
        </p>
      </div>
    </section>
  );
};

export default TransportationSection;
