import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Mousewheel, Navigation, FreeMode } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
      direction={"vertical"}
        slidesPerView={"auto"}
        // slidesPerView={2}
        // spaceBetween={10}
        pagination={{
          clickable: true,
         
          
        }}
        // centeredSlides={true}
        // navigation={true}
        // freeMode={true}
        mousewheel={true}
        modules={[Pagination, Mousewheel, Navigation, FreeMode]}
        className="mySwiper faq-sw hidden md:block my-auto md:mt-52"
        
      >
        <SwiperSlide className="faq-slide ">



        <div className="right-sec p-5 ">
                <h3 className="pink-color text-4xl pb-4 monofont text-left" >What is the LOF platform for?</h3>
                <p className="text-base leading-8 text-left">
                  LOF Platform is a revolutionary fan platform that allows all
                  types of content creators to publish content in many different
                  forms (images, videos, live streams, music and NFTs).
                  Creators can freely choose the fee for users to view their
                  content. The platform will charge a minimal share of the
                  earnings, up to 15% and as little as 5%. <br />
                  <br /> For customers, the LOF Platform is a place where they
                  can view and purchase content from the most interesting
                  content creators around the world at the most competitive
                  prices. Anonymously if they choose to, depending on the
                  payment format they choose!
                </p>
              </div>
              
        </SwiperSlide>
        <SwiperSlide className="faq-slide">
        <div className="right-sec p-5">
                <h3 className="pink-color text-4xl pb-4 monofont text-left" >How long does it take to become a creator?</h3>
                <p className="text-base leading-8 text-left">
                Becoming a creator is a very easy and fast process. It does
                    not require any prior knowledge or skill! You just need to
                    fill in a few details and be verified by the platform
                    moderators before you can start releasing your content.
                </p>
              </div>
        </SwiperSlide>
        <SwiperSlide className="faq-slide">
        <div className="right-sec p-5">
                <h3 className="pink-color text-4xl pb-4 monofont text-left" >How much money will I earn with LOF?</h3>
                <p className="text-base leading-8 text-left">
                The amount you earn is determined by your ability to grow a
                    fan base, the amount of content you sell and the price you
                    choose to sell it for. In full transparency, we cannot
                    promise a minimum income. What we can promise however, is
                    all the tools you need to be successful, connecting you with
                    a great amount of potential new fans from our userbase and
                    answer all your questions. We have a healthy community of
                    content creators and an open atmosphere to cross promote and
                    network with. <br />
                    <br /> By accepting our LOF cryptocurrency token as part of
                    your payments, there is the potential for an exponential
                    gain in value due to the ecosystems impact on the supply, as
                    well as passive income generation. By holding LOF
                    cryptocurrency tokens in your possession, you will
                    automatically receive passive income sent to your wallet!
                    Don’t worry, if this sounds confusing, we have videos to
                    better explain it in our education center!
                </p>
              </div>
        </SwiperSlide>
        <SwiperSlide className="faq-slide">
        <div className="right-sec p-5">
                <h3 className="pink-color text-4xl pb-4 monofont text-left" >Who can create on the LOF platform?</h3>
                <p className="text-base leading-8 text-left">
                Everyone! All kinds of content creators are welcome and free
                    to release content. The content must follow legal
                    restrictions, but besides that LOF is 100% free of
                    judgement.
                </p>
              </div>
        </SwiperSlide>
        <SwiperSlide className="faq-slide">
        <div className="right-sec p-5">
                <h3 className="pink-color text-4xl pb-4 monofont text-left"> What methods are used for payments?</h3>
                <p className="text-base leading-8 text-left">
                Users can pay using a credit card or a crypto wallet.
                    Acceptable cryptocurrencies are BUSD, BNB and of course our
                    native LOF Token. Users who would like to privately purchase
                    content will prefer to use cryptocurrency. If you’re not
                    familiar with cryptocurrency or the process of using it, we
                    have how-to videos in our education center!
                </p>
              </div>
        </SwiperSlide>
        <SwiperSlide className="faq-slide">
        <div className="right-sec p-5">
                <h3 className="pink-color text-4xl pb-4 monofont text-left"> How frequent are payouts to content creators?</h3>
                <p className="text-base leading-8 text-left">
                Payouts will take place once per month for credit/debit card
                    purchases. Crypto payments are practically instant and are
                    not subject to chargebacks! If you’re not familiar with
                    cryptocurrency or the process of using it, we have how-to
                    videos in our Education Center!
                </p>
              </div>
            
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
