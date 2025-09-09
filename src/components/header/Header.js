import React, { useState } from "react";
import logo from "../../assets/logo.png";

function Header({ items, text }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <div className="navbar">
        {/* Logo */}
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Menu list */}
        <ul className={`navbar__list ${menuOpen ? "show" : ""}`}>
          {items.map((item, index) => (
            <li className="navbar__item" key={index}>
              {item}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="navbar__icons">
          <div className="navbar__icons__text">
            {text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="navbar__icons__icon">
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-circle-question"></i>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>

        {/* Burger */}
        <div
          className={`navbar__burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
