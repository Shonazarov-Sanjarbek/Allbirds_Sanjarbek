import React, { useState } from 'react'
import Cards from '../cards/Cards';
import stories1 from "../../assets/stories1.png"
import stories2 from "../../assets/stories2.png"
import stories3 from "../../assets/stories3.png"

function Stories() {
  const data = [
    {
      img: stories1,
      desc: "Planet-Friendly Activewear",
      text: "The Natural Run Collection is made with sustainable materials that can stand up to your toughest workout.",
    },
    {
      img: stories2,
      desc: "adidas and Allbirds",
      text: "Learn more about FUTURECRAFT.FOOTPRINT, our collaborative shoe coming soon.",
    },
    {
      img: stories3,
      desc: "How much did your outfit cost the planet?",
      text: "Now any brand can use our Carbon Footprint tools to label their emissions.",
    },
    {
      img: stories1,
      desc: "Planet-Friendly Activewear",
      text: "The Natural Run Collection is made with sustainable materials that can stand up to your toughest workout.",
    },
    {
      img: stories2,
      desc: "adidas and Allbirds",
      text: "Learn more about FUTURECRAFT.FOOTPRINT, our collaborative shoe coming soon.",
    },
    {
      img: stories3,
      desc: "How much did your outfit cost the planet?",
      text: "Now any brand can use our Carbon Footprint tools to label their emissions.",
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
    <div className="stories">
      <div className="container">
        <p className="stories__subtitle">Stories</p>
        <div className="stories__slider">
          <button
            className="stories__btn collections__btn--left"
            onClick={prevSlide}
          >
            &lt;
          </button>

          <div className="stories__content">
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
            className="stories__btn collections__btn--right"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Stories
