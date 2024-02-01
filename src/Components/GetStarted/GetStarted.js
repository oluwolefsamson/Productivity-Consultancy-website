import React, {useEffect} from 'react';
import './GetStarted.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const GetStarted = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
}, [])

  return (

    <div data-aos="fade-up"
    data-aos-duration="3000"> 

    <section className='g-wrapper'>
     <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
            <span className='primaryText'>Get Started With Us</span>
            <span className='secondaryText'>Kindly sign up to know more about us.</span>
            <button className='button2'>
                <a href="#">Get Started</a>
            </button>
        </div>
     </div>
    </section>

    </div>
  )
}

export default GetStarted