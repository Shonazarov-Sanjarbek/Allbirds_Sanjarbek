import React, { useState } from "react";
import Cards from "../cards/Cards";
import arrivals1 from "../../assets/arrivals1.png";
import arrivals2 from "../../assets/arrivals2.png";
import arrivals3 from "../../assets/arrivals3.png";

function Arrivals() {
  const data = [
    {
      img: arrivals1,
      desc: "Men's Trail Runner SWT",
      text: "Classic Color, Natural Black",
    },
    {
      img: arrivals2,
      desc: "Women's Trail Runner SWT",
      text: "Classic Color, Natural White",
    },
    {
      img: arrivals3,
      desc: "Men's Trail Runner SWT",
      text: "Limited Edition Color, Diablo",
    },
    {
      img: arrivals1,
      desc: "Men's Trail Runner SWT",
      text: "Classic Color, Natural Blackr",
    },
    {
      img: arrivals2,
      desc: "Women's Trail Runner SWT",
      text: "Classic Color, Natural White",
    },
    {
      img: arrivals3,
      desc: "Men's Trail Runner SWT",
      text: "Limited Edition Color, Diablo",
    },
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
    <div className="arrivals">
      <div className="container">
        <p className="arrivals__subtitle">New Arrivals</p>
        <div className="arrivals__slider">
          <button
            className="arrivals__btn collections__btn--left"
            onClick={prevSlide}
          >
            &lt;
          </button>

          <div className="arrivals__content">
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
            className="arrivals__btn collections__btn--right"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Arrivals;
