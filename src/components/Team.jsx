import React from "react";
import TeamImg1 from "../assets/team1.png";
import TeamImg2 from "../assets/team2.png";
import TeamImg3 from "../assets/team3.png";
import TeamImg4 from "../assets/team4.png";
import Skype from "../assets/skype.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/facebook.svg";

export const Team = () => {
  return (
    <section className="team">
      <div className="container team__container">
        <h2 className="title team__title">Met Our Team</h2>
        <p className="desc team__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
        <div className="team__list">
          <div className="team-item">
            <img src={TeamImg1} alt="Sunny Khan" className="team-item__img" />
            <span className="team-item__name">Sunny Khan</span>
            <span className="team-item__position">Executive officer</span>
            <div className="team-item__socials">
              <a href="/">
                <img src={Skype} alt="Skype" />
              </a>
              <a href="/">
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href="/">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="/">
                <img src={Facebook} alt="Facebook" />
              </a>
            </div>
          </div>
          <div className="team-item">
            <img src={TeamImg2} alt="Alina Jesia" className="team-item__img" />
            <span className="team-item__name">Alina Jesia</span>
            <span className="team-item__position">UX/UI DESIGNER</span>
            <div className="team-item__socials">
              <a href="/">
                <img src={Skype} alt="Skype" />
              </a>
              <a href="/">
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href="/">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="/">
                <img src={Facebook} alt="Facebook" />
              </a>
            </div>
          </div>
          <div className="team-item">
            <img src={TeamImg3} alt="Alex Sohag" className="team-item__img" />
            <span className="team-item__name">Alex Sohag</span>
            <span className="team-item__position">BUSINESS DEVELOPMENT</span>
            <div className="team-item__socials">
              <a href="/">
                <img src={Skype} alt="Skype" />
              </a>
              <a href="/">
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href="/">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="/">
                <img src={Facebook} alt="Facebook" />
              </a>
            </div>
          </div>
          <div className="team-item">
            <img src={TeamImg4} alt="Afroza Mou" className="team-item__img" />
            <span className="team-item__name">Afroza Mou</span>
            <span className="team-item__position">Head of marketing</span>
            <div className="team-item__socials">
              <a href="/">
                <img src={Skype} alt="Skype" />
              </a>
              <a href="/">
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a href="/">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="/">
                <img src={Facebook} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
