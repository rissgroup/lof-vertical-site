import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y , Mousewheel } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";

export default function Lofplatform() {
  const ImageOneClick = () => {
    SetImageText(
      " Image 1 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageTwoClick = () => {
    SetImageText(
      " Image 2 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageThreeClick = () => {
    SetImageText(
      " Image 3 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageFourClick = () => {
    SetImageText(
      " Image 4 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageFiveClick = () => {
    SetImageText(
      " Image 5 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageSixClick = () => {
    SetImageText(
      " Image 6 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const ImageSevenClick = () => {
    SetImageText(
      " Image 7 Text here - Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. "
    );
  };
  const [ImageText, SetImageText] = useState(
    "Become a content creator? Want to earn by selling your content? At LOF Platform you will keep up to 95% of all your sales. Release your content free of judgement and completely at your own terms."
  );
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
      </Head>
      <div className="bg-dark" id="Lof-plat">
        <div className="container-fluid ">
          <div className=" text-white pt-28 lg:pt-44 w-full mbl-resp-plat">
            <div className="col text-center" data-swiper-parallax="-900">
              <h1 className="text-3xl monofont leading-8 -m-5">
                LOF <span className="pink-color">platform</span>
              </h1>
              <p className="text-[12px] md:text-sm tracking-normal leading-6 mx-auto txt-hide  w-12/12 md:w-7/12  pt-8 font-light ">
                {/* Create a free account and start browsing content from the
                hottest models around the world. We have made everything
                extremely simple and there are no hidden terms.  */}
                {ImageText}
              </p>
            </div>
          </div>

          {/* ******************* desktop Slider Start*********** */}
        
     <Swiper
     
        slidesPerView={5}
        spaceBetween={30}
        mousewheel={true}
        centeredSlides
        slideToClickedSlide
        
        loop    
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Pagination, Mousewheel]}
        className="mySwiper pl-swiper swiper-full-mobile hidden md:block "
        
      
      >
        <SwiperSlide className="pl-slide"><img src='/assets/pl-slider/Mobile.png' onClick={ImageOneClick} alt="" /></SwiperSlide>
        <SwiperSlide className="pl-slide"><img src="/assets/pl-slider/Mobilehome4.png" onClick={ImageTwoClick} alt="" /></SwiperSlide>
        <SwiperSlide className="pl-slide"><img src="/assets/pl-slider/Mobilehome6.png" onClick={ImageThreeClick} alt="" /></SwiperSlide>
        <SwiperSlide className="pl-slide"><img src="/assets/pl-slider/Mobilehome5.png" onClick={ImageFourClick} alt="" /></SwiperSlide>
        <SwiperSlide className="pl-slide"><img src="/assets/pl-slider/Mobilehome7.png" onClick={ImageFiveClick} alt="" /></SwiperSlide>
        <SwiperSlide className="pl-slide"><img src="/assets/pl-slider/Mobilehome7.png" onClick={ImageFiveClick} alt="" /></SwiperSlide>
        
      </Swiper>
          {/* *******************desktop  Slider End*********** */}
          {/* *******************Mobile Slider Start*********** */}
        <div className="block md:hidden slider-resp">
     <Swiper
     navigation
     slidesPerView={1}
     spaceBetween={30}
     mousewheel={true}
     centeredSlides
     slideToClickedSlide
     loop    
    //  pagination={{
    //    clickable: true,
    //  }}
     modules={[Pagination, Mousewheel, Navigation]}
     className="mySwiper pl-swiper swiper-full-mobile  "
     onSlideChange={() => {
      if (slide1 == slide1) {
        ImageOneClick();
      }
      if (slide2 == slide2) {
        ImageTwoClick();
      }
      if (slide3 == slide3) {
        ImageThreeClick();
      }
      if (slide4 == slide4) {
        ImageFourClick();
      }
      if (slide5 == slide5) {
        ImageFiveClick();
      }
      if (slide6 == slide6) {
        ImageFiveClick();
        
      }
     }}
   
   
   >
     <SwiperSlide  className="pl-slide" onClick={ImageOneClick}><img src='/assets/pl-slider/Mobile.png' id="slide1" alt="" /></SwiperSlide>
     <SwiperSlide id="slide2" className="pl-slide" onClick={ImageTwoClick}><img src="/assets/pl-slider/Mobilehome4.png"  alt="" /></SwiperSlide>
     <SwiperSlide id="slide3" className="pl-slide"  onClick={ImageThreeClick}><img src="/assets/pl-slider/Mobilehome6.png" alt="" /></SwiperSlide>
     <SwiperSlide id="slide4" className="pl-slide" onClick={ImageFourClick}><img src="/assets/pl-slider/Mobilehome5.png"  alt="" /></SwiperSlide>
     <SwiperSlide id="slide5" className="pl-slide" onClick={ImageFiveClick}><img src="/assets/pl-slider/Mobilehome7.png"  alt="" /></SwiperSlide>
     <SwiperSlide id="slide6" className="pl-slide" onClick={ImageFiveClick}><img src="/assets/pl-slider/Mobilehome7.png"  alt="" /></SwiperSlide>
     
   </Swiper>
   </div>
       {/* ******************* Mobile Slider End*********** */}
        </div>
      </div>
    </>
  );
}
