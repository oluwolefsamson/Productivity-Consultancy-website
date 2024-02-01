import React from 'react'
import './Footer.css'
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className='f-container secondaryText'>
        <div className='row'>

            <div className='column1'>
                <img src='logo.png' />
                <span><FaLocationDot size={13} color='green'/>M12, MKO Abiola Complex Ogba, Ikeja, Lagos</span>
                <span><FaLocationPin size={24} color='green'/>Suite B20 Block D Platinum Mega Mall, Jahi District, Abuja 
                        Federal Secretariat Complex Phase II, Basement Cafetarial</span>
                <span><FaPhone size={12} color='green'/>+2348089336666</span>
            </div>

            <div className='column2'>column2</div>
            <div className='column3'>column3</div>
            <div className='column4'>column4</div>
        </div>
    </section>
  )
}

export default Footer