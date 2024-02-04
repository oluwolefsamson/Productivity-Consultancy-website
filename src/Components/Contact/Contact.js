import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import {BsInstagram} from 'react-icons/bs';
import {FaWhatsapp} from 'react-icons/fa';
import {BiLogoGmail} from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])


  return (
    <section className='c-wrapper'>
      <div className='c-container1 paddings innerWidth flexCenter'>

        {/* leftside*/}
        <div className="flexColStart c-left">
        <div data-aos="fade-right"><span className='greenText'>Our Contacts</span></div>
        <div data-aos="fade-left"><span className='primaryText'>Conveniently Reachable</span></div>
            <span className='secondaryText'>You can kindly reach us through the provided buttons below. </span>

            <div className="flexStart contactModes">
                {/* first row */}
                <div className="flexColCenter row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Call</span>
                                <span className='secondaryText'></span>
                            </div>
                        </div>
                       <a href=""><button>Call Now</button></a>
                    </div>

                    {/* second mode*/}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <FaWhatsapp size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Whatsapp</span>
                                <span className='secondaryText'></span>
                            </div>
                        </div>
                       <a href="#"><button>Chat Now</button></a>
                    </div>
                </div>

                {/* second row */}
                <div className="flexColCenter row">
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsInstagram size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Instagram</span>
                                <span className='secondaryText'></span>
                            </div>
                        </div>
                       <a href="#"><button>Send Message</button></a>
                    </div>

                    {/* second mode*/}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BiLogoGmail size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className='primaryText'>Gmail</span>
                                <span className='secondaryText'></span>
                            </div>
                        </div>
                       <a href='#'><button>Send Mail</button></a>
                    </div>
                </div>

            </div>

            

        </div>

        {/* leftside*/}
        <div data-aos="fade-up"
     data-aos-duration="3000">

        <div className="c-right">
            <div className="image-container">
               <img src='./contact-img.jpg' alt=''/>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact