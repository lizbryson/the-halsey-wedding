import React from "react";
import { navigate } from "gatsby-link";
import "./ContactForm.css";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const [state, setState] = React.useState({});
  const [attending, setAttending] = React.useState(false);

  const handleChange = (e) => {
    if (e.target.name === "rsvp") {
      let answerBool = e.target.value === "YES" ? true : false;
      setAttending(answerBool);
    }
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(
      encode({
        "form-name": form.getAttribute("name"),
        ...state,
      })
    );
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        encode({
          "form-name": form.getAttribute("name"),
          ...state,
        });
      })
      .catch((error) => alert(error));
  };

  return (
    <form
      name="RSVP"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="RSVP" />
      <p hidden>
        <label>
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label className="rsvpName">
          <span className="textLabel">Name(s):</span>
          <input
            className="textInput"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>
      </p>
      <fieldset className="rsvpRadios">
        <p>
          <label className="rsvpRadio">
            <input
              className="textInput"
              type="radio"
              value="YES"
              name="rsvp"
              onChange={handleChange}
            />
            <span className="radioCheck"></span>
            <span className="radioLabel">Accepts with Pleasure</span>
          </label>
        </p>
        <p>
          <label className="rsvpRadio">
            <input
              className="textInput"
              type="radio"
              value="NO"
              name="rsvp"
              onChange={handleChange}
            />
            <span className="radioCheck"></span>
            <span className="radioLabel">Declines with Regret</span>
          </label>
        </p>
      </fieldset>
      <div className={`rsvp-info is-attending--${attending}`}>
        <h3>Great! Will You Be Taking the Shuttle?</h3>
        <fieldset className="rsvpRadios">
          <p>
            <label className="rsvpRadio">
              <input
                className="textInput"
                type="radio"
                value="YES"
                name="shuttle"
                onChange={handleChange}
              />
              <span className="radioCheck"></span>
              <span className="radioLabel">
                Yes, Save me seat(s) on the Shuttle!
              </span>
            </label>
          </p>
          <p>
            <label className="rsvpRadio">
              <input
                className="textInput"
                type="radio"
                value="NO"
                name="shuttle"
                onChange={handleChange}
              />
              <span className="radioCheck"></span>
              <span className="radioLabel">
                No, I have my own form of transportation
              </span>
            </label>
          </p>
        </fieldset>
        <p>
          <label className="rsvpName">
            <span className="textLabel">
              How many seats would you like to reserve?
            </span>
            <input
              className="numberInput"
              type="number"
              defaultValue="2"
              step="1"
              min="1"
              max="6"
              name="seatsNeeded"
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label className="rsvpName">
            <span className="textLabel">Your Email:</span>
            <input
              className="textInput"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label className="rsvpName">
            <span className="textLabel">Your Phone Number:</span>
            <input
              className="textInput"
              type="phone"
              name="phone"
              onChange={handleChange}
            />
          </label>
        </p>
      </div>

      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
