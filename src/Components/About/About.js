import React, {useEffect} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import './About.css';
import data from '../../Utils/accordion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS


const About = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    
  return (
    <section className='v-wrapper'>
      <div className="paddings innerWidth flexCenter v-container">
        
        {/* leftside */}


        <div data-aos="fade-up"
         data-aos-duration="3000">

             <div className="v-left">
                <div className="image-container1">
                    <img src="./hero1-img.jpg" alt="" />
            </div>
            </div>
            

        </div>

        {/*rigt side*/ }
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">

        <div className="flexColStart v-right">
            <span className='primaryText'>About Us</span>
            <span className='greenText'>The Values We Offer to You</span>
            <span className='secondaryText'>PPP’ Nigeria is a reasearch, documentation and summary
             institution, a consortium of public service valuers</span>


            <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className='accordion'
            >
                {
                    data.map((item, i) => {
                        return (
                            <AccordionItem className='accordionItem 'key={i}  uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='accordionButton flexCenter'>

                                        <div className="flexCenter icon">
                                            {item.icon}
                                        </div>
                                        <span className='about-text'>{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={25}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }   
            </Accordion>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default About