import React from "react";
import Button from "../button/Button";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__block">
          <p className="hero__subtitle">The Trail Runner SWT Is Here.</p>
          <p className="hero__text">
            Durable. Comfortable. Ready to get dirty.
          </p>
          <div className="hero__btn">
            <Button text={"Shop Men"} />
            <Button text={"Shop Women"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
