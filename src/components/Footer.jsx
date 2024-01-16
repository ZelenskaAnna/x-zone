import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../assets/logo.svg";
import Location from "../assets/location.svg";
import Phone from "../assets/calling.svg";
import Message from "../assets/message.svg";
import Facebook from "../assets/facebook2.svg";
import Twitter from "../assets/twitter2.svg";
import Instagram from "../assets/instagram.svg";
import Pinterest from "../assets/pinterest.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__list">
          <div className="footer__contacts">
            <Link to="/" className="header__logo">
              <img src={HeaderLogo} alt="X" />
              <span>Zone.</span>
            </Link>
            <span className="footer__type">
              <img src={Location} alt="Location" />
              <a href="/">Dhaka, Bangladesh</a>
            </span>
            <span className="footer__type">
              <img src={Phone} alt="Phone" />
              <a href="tel:+0943833399">0943833399</a>
            </span>
            <span className="footer__type">
              <img src={Message} alt="Message" />
              <a href="mailto:support@zone.com">support@zone.com</a>
            </span>
            <div className="footer__socials">
              <a href="/">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="/">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="/">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="/">
                <img src={Pinterest} alt="Pinterest" />
              </a>
            </div>
          </div>
          <div className="footer__item">
            <a href="/">Service</a>
            <a href="/">Order Management</a>
            <a href="/">Social Assistant</a>
            <a href="/">Crypto Platform</a>
            <a href="/">Analyzer of the News</a>
          </div>
          <div className="footer__item">
            <a href="/">Company</a>
            <a href="/">About Us</a>
            <a href="/">News</a>
            <a href="/">Our trusted partner</a>
            <a href="/">New users FAQ</a>
          </div>
          <div className="footer__item">
            <a href="/">Supports</a>
            <a href="/">Help center</a>
            <a href="/">Feedbcak</a>
            <a href="/">Contact us</a>
            <a href="/">Terms conditins</a>
          </div>
          <div className="footer__item">
            <a href="/">Resources</a>
            <a href="/">Download app</a>
            <a href="/">Blog</a>
            <a href="/">What’s new</a>
            <a href="/">Sitemap</a>
          </div>
        </div>
      </div>
      <div className="copy">
        <div className="container copy-container">
          <div className="copy-container__copyright">
            {" "}
            &copy;{currentYear} Zone. - All rights reserved.
            <span id="copyright"></span>
          </div>
          <div className="copy-container__list">
            <a href="/">Privacy</a>
            <a href="/">Security</a>
            <a href="/">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
