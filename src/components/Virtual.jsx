import React from "react";
import { Link } from "react-router-dom";
import ManVirtual from "../assets/virtual.png";
import Play from "../assets/play-circle.svg";

export const Virtual = () => {
  return (
    <section className="virtual">
      <div className="container virtual__container">
        <div className="virtual__info">
          <h1 className="virtual__title">Virtual Reality Business Solutions</h1>
          <p className="virtual__desc">
            We have over 15 year exprience in business consultting arena. We
            have over 15 year exprience in business consultting arena and
            artficial intelligence.
          </p>
          <div className="virtual__buttons">
            <Link to="/join" className="btn virtual__btn-join">
              Join Us
            </Link>
            <a href="/" className="virtual__btn-play">
              <img src={Play} alt="Play" />
              Watch video
            </a>
          </div>
        </div>
        <img className="virtual__img" src={ManVirtual} alt="ManVirtual" />
      </div>
    </section>
  );
};

export default Virtual;
