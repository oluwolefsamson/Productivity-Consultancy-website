import React from 'react'
import './ManagementTeam.css';
import data from '../../Utils/Management.json';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const ManagementTeam = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + ('') + '</span>';
    },
  };


  return (
    <section className='paddings innerWidth m-container'>
      <span className='primaryText'>ADVISORY BOARD &</span><br />
      <span className='greenText' >OFFICIAL MANAGEMENT TEAM</span>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}

        pagination={pagination}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          data.map((man, i) => (
            
            <SwiperSlide key={i}>
              
             <img src={man.image} alt='' className='man-image'/>
             <div className="scroll-card">
                <span className='primaryText man-name'>{man.name}</span>
                <span className='greenText man-pos'>{man.position}</span>
             </div>
            </SwiperSlide>
       
          ))
        }
        
      </Swiper>
    </section>
  );
}
     

export default ManagementTeam