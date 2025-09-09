import React from 'react'
import Button from '../button/Button'

function Dibs() {
  return (
    <div className='container'>
        <div className="dibs">
            <div className="dibs__block">
                <p className="dibs__title">
                    Want First Dibs?
                </p>
                <p className="dibs__desc">
                    Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.
                </p>
            </div>
            <div className="dibs__form">
                <input className='dibs__input' type="text" placeholder='Enter Your Email Address' />
                <button className='dibs__btn'>
                    <Button text="Sign Up" variant='secondary'/>
                </button>
            </div>
            <p className="dibs__comment">
                Note: You can opt-out at any time. See our Privacy Policy and Terms
            </p>
        </div>
    </div>
  )
}

export default Dibs
