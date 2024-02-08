import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Company from '../../Components/Company/Company';
import About from '../../Components/About/About';
import AboutCard from '../../Components/AboutCard/AboutCard';
import Footer from '../../Components/Footer/Footer'
import './AboutPage.css'
import Overview from '../../Components/Overview/Overview';
import GetStarted from '../../Components/GetStarted/GetStarted';

const AboutPage = () => {
  return (
    <div className='about-page'>
        < Navbar />
        < Hero />
        < Company />
        < About />
        < AboutCard />
        < Overview />
        < GetStarted />
        < Footer />
    </div>
  )
}

export default AboutPage