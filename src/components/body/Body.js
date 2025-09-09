import React from 'react'
import Hero from '../hero/Hero'
import Favorites from '../favorites/Favorites'
import Seasons from '../seansons/Seasons'
import Collections from '../collections/Collections'
import Nature from '../nature/Nature'
import Arrivals from '../arrivals/Arrivals'
import Business from '../business/Business'
import Stories from '../storie/Stories'
import Dibs from '../dibs/Dibs'

function Body() {
  return (
    <div>
        <Hero/>
        <Favorites 
        titles={["Everyday", "Running", "Travel"]} 
        />
        <Seasons/>
        <Collections/>
        <Nature/>
        <Arrivals/>
        <Business/>
        <Stories/>
        <Dibs/>
    </div>
  )
}

export default Body
