import React, { useState } from "react";
// import IconX from "../assets/x-icon.svg";
import Airplane from "../assets/airplane.svg";

export const Subscripe = () => {
  const [email, setEmail] = useState("");
  const [isEmailFilled, setIsEmailFilled] = useState(false);

  return (
    <section className="subscripe">
      <div className="container subscripe__container">
        <div className="subscripe__box">
          <h2 className="title subscripe__title">
            Subscribe to get the Latest News
          </h2>
          <p className="desc subscripe__desc">
            We recommended you to subscribe to our newspaper,drop your email
            below to get daily update about us
          </p>
          <div className="input-container">
            <input
              className={`subscripe__input ${isEmailFilled ? "is-active" : ""}`}
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsEmailFilled(!!e.target.value);
              }}
              placeholder="Enter your email addres"
            />
            <span className="subscripe__icon" onClick={() => setEmail("")}>
              {/* <img src={IconX} alt="X" /> */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3.5"
                  y="3.5"
                  width="17.5"
                  height="17.5"
                  rx="8.75"
                  stroke="#667085"
                />
                <path
                  d="M14.7946 10.0021L10.0026 14.7941"
                  stroke="#667085"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.796 14.797L10 10"
                  stroke="#667085"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <button
              className="btn subscripe__btn"
              onClick={() => {
                if (!isEmailFilled) {
                  alert("Please enter your email address.");
                } else {
                  alert(`You successfully subscribed with email: ${email}`);
                }
              }}
            >
              <img src={Airplane} alt="Airplane" />
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscripe;
