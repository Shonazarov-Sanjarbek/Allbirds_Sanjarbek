import React, { useState } from "react";
import Cards from "../cards/Cards";
import collections1 from "../../assets/collections-1.png";
import collections2 from "../../assets/collections-2.png";
import collections3 from "../../assets/collections-3.png";

function Collections() {
  const data = [
    { img: collections1, desc: "Wool Runner", text: "Cozy Sneaker" },
    { img: collections2, desc: "Tree Runner", text: "Light and Breezy Sneaker" },
    { img: collections3, desc: "Wool Runner Mizzle", text: "Rain-Ready Sneaker" },
    { img: collections1, desc: "Extra Runner", text: "New Sneaker" },
    { img: collections2, desc: "Another Runner", text: "Sport Sneaker" },
    { img: collections3, desc: "Next Runner", text: "Modern Sneaker" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  // 3 ta cardni ko‘rsatamiz
  const visibleCards = [
    data[currentIndex],
    data[(currentIndex + 1) % data.length],
    data[(currentIndex + 2) % data.length],
  ];

  return (
    <div className="collections">
      <div className="container">
        <p className="collections__subtitle">Shop The Collections</p>
        <div className="collections__slider">
          <button
            className="collections__btn collections__btn--left"
            onClick={prevSlide}
          >
            &lt;
          </button>

          <div className="collections__content">
            {visibleCards.map((item, index) => (
              <Cards
                key={index}
                img={item.img}
                desc={item.desc}
                text={item.text}
              />
            ))}
          </div>

          <button
            className="collections__btn collections__btn--right"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Collections;
