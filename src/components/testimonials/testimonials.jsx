import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar : AVTR1,
    name : 'Mohamed Test',
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit.  hic nulla, ea accusamus officia reiciendis quaerat nesciunt quos placeat numquam architecto odio qui.",
  },
  {
    avatar : AVTR2,
    name : 'Abdellah Test',
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veritatis eum est eos ducimus quasi totam, hic nulla, ea accusamus officia reiciendis quaerat nesciunt quos placeat numquam architecto odio qui.",
  },
  {
    avatar : AVTR3,
    name : 'Anas Test',
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Voluptas veritatis eum est eos ducimus quasi totam, hic nulla, ea accusamus officia reiciendis quaerat nesciunt quos placeat numquam architecto odio qui.",
  },
  {
    avatar : AVTR4,
    name : 'Yassine Test',
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veritatis eum est eos ducimus quasi totam, hic nulla, ea accusamus officia reiciendis quaerat nesciunt quos placeat numquam architecto odio qui.",
  }  
]

const testimonials = () => {
  {    
  return (

    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >        
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className='testimonial'>
              <div key={index} className="client__avatar">
                <img src={avatar} alt="" />
              </div>

              <h5 className='client__name'> {name} </h5>

              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }                
      </Swiper>
    </section>
  )
  }
}

export default testimonials