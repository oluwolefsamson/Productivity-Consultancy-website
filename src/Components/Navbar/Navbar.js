import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

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
        <nav className='nav poppins-regular'>
            <a href='#' className='nav_brand'><img src='./logo.png' /></a>
            <ul className={active}>
                <Link to="/">Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/values'>Values</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/management'>Management</Link>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>

            <div className='contact'>
                <span><a href='./contact'>Contact Us</a></span>
            </div>
        </nav>
    );
}

export default Navbar;
