import * as React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./RsvpSection.css";
const RsvpSection = () => {
  return (
    <section className="rsvpSection">
      <div className="rsvpSection__inner">
        <h2>RSVP</h2>
        <ContactForm />
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

export default RsvpSection;
