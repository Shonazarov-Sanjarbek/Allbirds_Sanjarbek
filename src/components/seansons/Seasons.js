import React from "react";
import seasons from "../../assets/seasons.png";
import Button from "../button/Button";

function Seasons() {
  return (
    <div className="seasons">
      <img className="seasons__img" src={seasons} alt="season" />
      <div className="container">
        <div className="seasons__block">
          <p className="seasons__subtitle">
            Seasons Change. Your Shoes Don’t Have To.
          </p>
          <p className="seasons__text">
            Soft and cozy wool shoes to keep you comfortable all year round.
          </p>
          <div className="seasons__btn">
            <Button text="Shop Men" variant="secondary"/>
            <Button text="Shop Women" variant="secondary"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seasons;
