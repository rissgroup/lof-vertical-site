import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination ,Mousewheel } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        mousewheel={true}
        centeredSlides
        slideToClickedSlide
        loop    
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Mousewheel]}
        className="mySwiper pl-swiper"
      >
        <SwiperSlide className="pl-slide">Slide 1</SwiperSlide>
        <SwiperSlide className="pl-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="pl-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="pl-slide">Slide 4</SwiperSlide>
        <SwiperSlide className="pl-slide">Slide 5</SwiperSlide>
        <SwiperSlide className="pl-slide">Slide 6</SwiperSlide>
        
      </Swiper>
    </>
  );
}
