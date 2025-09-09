import React from "react";
import Cards from "../cards/Cards";
import card1 from "../../assets/favorites-card1.jpg";
import card2 from "../../assets/favorites-card2.png";
import card3 from "../../assets/favorites-card3.png";

function Favorites({ titles }) {
  return (
    <div className="container">
      <div className="favorites">
        <div className="favorites__subtitle">
          <p>Our Favorites</p>
        </div>
        <div className="favorites__title">
          {titles.map((title, index) => (
            <p key={index}>{title}</p>
          ))}
        </div>
        <div className="favorites__wrapper">
          <Cards desc={["Wool Runner"]} none="block" text={["Cozy Sneaker"]} img={card1} />
          <Cards
            desc={["Tree Runner"]}
            text={["Light and Breezy Sneaker"]}
            img={card2}
            none="block"
          />
          <Cards
            desc={["Wool Runner Mizzle"]}
            text={["Rain-Ready Sneaker"]}
            img={card3}
            none="block"  
          />
        </div>
      </div>
    </div>
  );
}

export default Favorites;
