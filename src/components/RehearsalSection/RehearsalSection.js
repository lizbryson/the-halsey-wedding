import * as React from "react";
import RehearsalForm from "../RehearsalForm/RehearsalForm";
import "./RehearsalSection.css";
const RehearsalSection = () => {
  return (
    <section className="rsvpSection">
      <p className="rsvpSection__kicker">Rehearsal Dinner </p>
      <h2>RSVP</h2>
      <p className="rsvpSection__desc">
        Please join us at 6pm for a Welcome Dinner and Drinks at{" "}
        <a
          href="https://goo.gl/maps/AwxqDpUqpqTv11op8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Press Cafe
        </a>
        .
      </p>
      <p className="rsvpSection__desc">
        Part of the wedding party? Please join us at 5pm outside of Press Cafe
        for a brief rehearsal.
      </p>
      <div className="rsvpSection__inner is-rehearsal">
        <p className="rsvpSection__kicker">Your Response:</p>

        <RehearsalForm />
      </div>
      <p className="disclaimer">
        Having trouble with the submitting the form above?
        <br />
        Email your name(s) and RSVP response to:
        <a href="mailto:liz@lizbryson.co">liz@lizbryson.co</a>.
      </p>
    </section>
  );
};

export default RehearsalSection;
