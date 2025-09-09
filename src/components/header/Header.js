import React from "react";
import logo from "../../assets/logo.png";

function Header({ items, text }) {


  return (
    <div className="container">
      <div className="navbar">
        <ul className='navbar__list'>
          {items.map((item, index) => (
            <li className="navbar__item" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__icons">
          <div className="navbar__icons__text">
            {text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="navbar__icons__icon">
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-circle-question"></i>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
        <div
          className='navbar__burger'
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
