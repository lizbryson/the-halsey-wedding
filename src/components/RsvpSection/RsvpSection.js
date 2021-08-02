import * as React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./RsvpSection.css";
const RsvpSection = () => {
  return (
    <section className="rsvpSection">
      <div className="rsvpSection__inner">
        <ContactForm />
      </div>
    </section>
  );
};

export default RsvpSection;
