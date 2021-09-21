import React from "react";
import "./RehearsalForm.css";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const RehearsalForm = () => {
  const [attending, setAttending] = React.useState(false);
  const [shuttle, setShuttle] = React.useState(false);
  const [seats, setSeats] = React.useState(0);
  const [state, setState] = React.useState({});
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
    if (
      e.target.dataset.action === "increase" ||
      e.target.dataset.action === "decrease"
    ) {
      if (e.target.dataset.action === "increase" && seats < 6) {
        setSeats((prev) => {
          const newVal = prev + 1;
          setState({ ...state, seats: newVal });
          return newVal;
        });
      }
      if (e.target.dataset.action === "decrease" && seats > 1) {
        setSeats((prev) => {
          let newVal = prev - 1;
          setState({ ...state, seats: newVal });
          return newVal;
        });
      }
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
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
        name="Rehearsal"
        method="post"
        className="is-rehearsal"
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
              <span className="radioLabel">Yes</span>
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
              <span className="radioLabel">No</span>
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

export default RehearsalForm;
