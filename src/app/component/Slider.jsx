'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


async function Slider() {
    let catdata = await fetch (`https://dummyjson.com/products/category/laptops`)
    let catlist = await catdata.json()
  return (
    <div className='container mx-auto'>
      <Swiper slidesPerView={8}>
      {catlist.products.map((a)=>(
    <SwiperSlide>
        <img src={a.thumbnail}/>
        <p>{a.title}</p>
    </SwiperSlide>))}

       
       
      </Swiper>
    </div>
  )
}

export default Slider
