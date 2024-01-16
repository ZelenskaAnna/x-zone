import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const Header = () => {
  const [isOpen, setOpen] = useState();
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo">
          <img src={HeaderLogo} alt="X" />
          <span>Zone.</span>
        </Link>
        <nav className={`header__nav ${isOpen ? "is-active" : ""}`}>
          <div className="header__close" onClick={closeMenu}>
            <CloseIcon style={{ fontSize: 40 }} />
          </div>
          <Link to="/" className="header__link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/" className="header__link" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/" className="header__link" onClick={closeMenu}>
            Service
          </Link>
          <Link to="/" className="header__link" onClick={closeMenu}>
            Pricing
          </Link>
          <Link to="/" className="header__link" onClick={closeMenu}>
            Blog
          </Link>
          <Link to="/" className="btn header__btn" onClick={closeMenu}>
            Contact Us
          </Link>
        </nav>
        <span className="header__backdrop" onClick={toggleMenu}></span>
        <div
          className="header__menu"
          // onClick={()=> setOpen(!isOpen)}
          onClick={toggleMenu}
        >
          <MenuIcon style={{ fontSize: 40 }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
