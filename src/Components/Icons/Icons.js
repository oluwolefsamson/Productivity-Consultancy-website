import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../Utils/Icons.json'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Icons.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Icons() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (

    <section className='paddings innerWidth i-container'>
    <span className='primaryText'>PRODUCTIVITY & PROFICIENCY </span><br />
    <span className='greenText icons' >ICONS</span>
    
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
       {
          data.map((man, i) => (
            
            <SwiperSlide key={i}>
              
             <img src={man.image} alt='' className='man-image'/>
             <div className="scroll-card">
                <span className='primaryText '>{man.name}</span><br />
                <span className='greenText'>{man.position}</span><br />
               
             </div>
            </SwiperSlide>
            
       
          ))
        }
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
    </ section>
  );
}
