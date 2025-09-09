import React from "react";
import Button from "../button/Button";

function Cards({ desc, text, img,  none="none" }) {
  return (
    <div className="card">
      <div className="card__img" style={{ background: `url(${img})` }}>
        <div className={`card__button card--${none}`}>
          <button className="card__btn">
          <Button text={["Shop Men"]} />
          </button>
          <button className="card__btn">
          <Button text={["Shop Women"]} />
          </button>
        </div>
      </div>
      <div className="card__desc">
        {<h1>{desc}</h1>}
        {<p>{text}</p>}
      </div>
    </div>
  );
}

export default Cards;
