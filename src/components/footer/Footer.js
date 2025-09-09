import React from "react";
import footer1 from "../../assets/footer-1.png"
import footer2 from "../../assets/footer-2.png"

function Footer({ help, shop, company }) {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__block">
          <div className="footer__top">
            <ul className="footer__collection">
              HELP
              {help.map((item, index) => (
                <li key={index} className="footer__item">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="footer__collection">
              SHOP
              {shop.map((item, index) => (
                <li key={index} className="footer__item">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="footer__collection">
              COMPANY
              {company.map((item, index) => (
                <li key={index} className="footer__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__body">
            <div className="footer__body__left">
                <p className="footer__title">
                    Follow the Flock
                </p>
                <p className="footer__text">
                    Exclusive offers, a heads up on new things, and sightings of Allbirds in the wild. Oh, we have cute sheep, too. #weareallbirds
                </p>
            </div>
            <div className="footer__body__right">
                <img src={footer1} alt="icon1" />
                <img src={footer2} alt="icon2" />
            </div>
          </div>
            <p className="footer__comment">
              © 2021 Allbirds, Inc. All Rights Reserved. Terms. Privacy & Accessibility
            </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
