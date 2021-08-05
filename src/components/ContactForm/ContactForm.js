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
  const [shuttle, setShuttle] = React.useState(false);
  const [seats, setSeats] = React.useState(2);

  const handleChange = (e) => {
    if (e.target.name === "rsvp") {
      let answerBool = e.target.value === "YES" ? true : false;
      setAttending(answerBool);
    }
    if (e.target.name === "shuttle") {
      let answerBool = e.target.value === "YES" ? true : false;
      setShuttle(answerBool);
    }
    if (e.target.name === "seatsNeeded") {
      setSeats(e.target.value);
    }
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        e.target.classList += "is-submitted";
      })
      .catch((error) => alert(error));
  };

  return (
    <>
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

        <fieldset className="rsvpRadios">
          <p>
            <label className="rsvpRadio">
              <input
                className="textInput"
                type="radio"
                value="YES"
                name="rsvp"
                onChange={handleChange}
                required
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
                required
              />
              <span className="radioCheck"></span>
              <span className="radioLabel">Declines with Regret</span>
            </label>
          </p>
        </fieldset>
        <p>
          <label className="rsvpName">
            <span className="textLabel">Name(s):</span>
            <input
              className="textInput"
              type="text"
              name="name"
              onChange={handleChange}
              required
            />
          </label>
        </p>
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
          <div className={`shuttle-info is-riding--${shuttle}`}>
            <p>
              <label className="rsvpName is-number">
                <span className="textLabel">Number of Seats:</span>
                <input
                  className="numberInput"
                  type="number"
                  value={seats || 2}
                  step="1"
                  min="1"
                  max="6"
                  name="seatsNeeded"
                  onChange={handleChange}
                />
              </label>
            </p>
            <div>
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
          </div>
        </div>
        <p>
          <button className="submitButton" type="submit">
            Send
          </button>
        </p>
      </form>
      <h3 className="form-thankyou">Thank You For Your Response!</h3>
    </>
  );
};

export default ContactForm;
