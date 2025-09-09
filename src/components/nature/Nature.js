import React from 'react'
import nature from "../../assets/nature.png"
import Button from '../button/Button'

function Nature() {
  return (
    <div className='nature'>
        <img src={nature} alt="" className="nature__img" />
        <div className="container">
            <div className="nature__block">
                <p className="nature__subtitle">
                    Seasons Change. Your Shoes Don’t Have To.
                </p>
                <p className="nature__text">
                    We craft with planet-friendly natural materials, like merino wool and eucalyptus trees, because they're our best chance for a sustainable future.
                </p>
                <button className='nature__btn'>
                <Button text="SEE HOW" variant='secondary'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Nature
