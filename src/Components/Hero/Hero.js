import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='h-container'>
      <div className='background-img'>
        <img src='./hero-img.jpg' alt='img'/>
      </div>

      <div className='hero-text poppins-regular'>
          <span>PRODUCTIVITY & PROFICIENCY PROJECTS – NIGERIA</span>
          <span>(Empowering Technocrats & Bureaucrats)</span>
        </div>
      </div>
  )
}

export default Hero
