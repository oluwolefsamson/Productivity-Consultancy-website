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
                <span><FaLocationDot size={13} />M12, MKO Abiola Complex Ogba, Ikeja, Lagos</span>
                <span><FaLocationPin size={24} />Suite B20 Block D Platinum Mega Mall, Jahi District, Abuja 
                        Federal Secretariat Complex Phase II, Basement Cafetarial</span>
                <span><FaPhone size={8} />+23480893366</span>
            </div>

            <div className='column2'>
                <h3>Other Pages</h3>
                <span>Home</span>
                <span>About Us</span>
                <span>Mission</span>
                <span>Vision</span>
                <span>Officials</span>
            </div>
            

            <div className='column3'>
                <h3>Quick Links</h3>
                <span>Privacy Policy</span>
                <span>Term of Service</span>
                <span>Disclaimer</span>
                <span>Credits</span>
                <span>FAQ</span>
            </div>
        </div>

        <div className='copyright'>
            <span>Copyright &copy; 2024. All right reserved.</span>
        </div>
    </section>
  )
}

export default Footer