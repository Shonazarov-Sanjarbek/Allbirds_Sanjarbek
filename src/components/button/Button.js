import React from 'react'

function Button({text, variant = "primary"}) {
  return (
    <>
      <button className={`btn btn--${variant}`}>
      <p>{text}</p>
      </button>
    </>
  )
}

export default Button
