import React from 'react'
import business from "../../assets/business.png"
import Button from '../button/Button'

function Business() {
  return (
    <div className='business'>
      <img className='business__img' src={business} alt="" />
      <div className="container">
        <div className="business__block">
            <p className="business__subtitle">
                Reversing Climate Change Through Better Business
            </p>
            <p className="business__text">
                Reducing our environmental impact has been a top priority since day one. But now, we’re taking things further. Explore our overall sustainability approach, our progress thus far, and our bold list of commitments for 2025.
            </p>
            <button className="business__btn">
                <Button text={"Our Sustainable Practices"} variant='secondary'/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Business
