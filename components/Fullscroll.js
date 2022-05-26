import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Plslider from "./Plslider"
import Faqscroll from "./faqscroll";
import Hero from "./Hero";
import Lofplatform from "./Lofplatform";
import Lofslider from "./Lof-slider"
import Become from "./Become";
import Whylof from "./Whylof";
import Faq from "./Faq";
import Nav from "./navs/nav";



// import required modules
import { Parallax, Pagination, Navigation, Mousewheel } from "swiper";
import Footer from "./navs/Footer";
// import { Head } from "next/document";


export default function Fullscroll() {
  return (
    <>
   
    <Nav/>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "height":"100vh"
        }}
        
        speed={1200}
        parallax={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={false}
        modules={[Parallax, Pagination, Navigation, Mousewheel]}
        className="mySwiper main-sloider faq-sw"
        mousewheel={true}
        autoplay={false}
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
           
              
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className="home-bg">
         <Hero/>
        </SwiperSlide>
        <SwiperSlide className="home-bg">
          {/* <Lofplatform/> */}
          <div className="">

          <Lofslider/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="home-bg">
          <Become/>
        </SwiperSlide>
        <SwiperSlide className="home-bg">
          <Whylof/>
        </SwiperSlide>

        <SwiperSlide className="home-bg">
          <Faq/>
        </SwiperSlide>




        {/* <SwiperSlide className="home-bg">
            <Beslider/>
        </SwiperSlide> */}
        {/* <SwiperSlide className="home-bg">
            <Faqscroll/>
        </SwiperSlide> */}
      </Swiper>
      <Footer/>
    </>
  );
}
