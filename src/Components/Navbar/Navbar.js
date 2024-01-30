import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState('nav_menu');
    const [toggleIcon, setToggleIcon] = useState('nav_toggler');

    const navToggle = () => {
        setActive(active === 'nav_menu' ? 'nav_menu nav_active' : 'nav_menu');

         //ToggleIcon
    toggleIcon === 'nav_toggler'
    ? setToggleIcon('nav_toggler toggle')
    : setToggleIcon('nav_toggler');
    };

   

    return (
        <nav className='nav'>
            <a href='#' className='nav_brand'><img src='./logo.png' /></a>
            <ul className={active}>
                <li className='nav_item'><a href='#' className='nav_link'>Home</a></li>
                <li className='nav_item'><a href='#' className='nav_link'>About</a></li>
                <li className='nav_item'><a href='#' className='nav_link'>Mission</a></li>
                <li className='nav_item'><a href='#' className='nav_link'>Vision</a></li>
                <li className='nav_item'><a href='#' className='nav_link'>Officials</a></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>

            <div className='contact'>
                <span>Contact Us</span>
            </div>
        </nav>
    );
}

export default Navbar;
