import React,{useEffect} from "react";
import Faqscroll from "./faqscroll";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import AnimatedText from 'react-animated-text-content';

export default function Faq() {
  useEffect(() => {
    AOS.init({ duration: 3000});
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-dark" id="faq">
        <div className="container-fluid  ">
          <div className="flex flex-col md:flex-row  text-white pt-20 md:pt-28">
            <div className=" basis-6/12 md:mt-[0%] lg:mt-[%] xl:mt-[%] 2xl:mt-[%] ml-0 md:ml-10 faq-bachi " data-aos="fade-right">
              <div >
              <AnimatedText
    type='words'
    interval={0.04}
    duration={0.8}
    animation={{
      x: '-1px',
      y: '-100px',
      ease: 'ease',
      scale: 1.06,
    }}
    className="pop text-5xl flex align-middle  md:justify-start text-center md:mt-60 md:text-left md:text-[160px] font-black  stroke-white stroke-2 md:ml-10"
  >
   FAQ
</AnimatedText>

   <div className="flex">         
<AnimatedText
    type='words'
    interval={0.04}
    duration={0.8}
    animation={{
      x: '-100px',
      y: '100px',
      ease: 'ease',
      scale: 1.06,
    }}
    className="monofont pb-6 text-xl md:ml-10 mt-2 md:text-5xl font-bold flex  align-middle md:justify-start"
  >
     For
</AnimatedText>
<AnimatedText
    type='words'
    interval={0.04}
    duration={0.8}
    animation={{
      x: '-100px',
      y: '100px',
      ease: 'ease',
      scale: 1.06,
    }}
    className="monofont pb-6 text-xl md:ml-2 mt-2 md:text-5xl font-bold flex  align-middle md:justify-start pink-color "
  >
    Content creators
</AnimatedText>
</div>
              </div><div >              <h6 >
              <span className="">  </span>
              </h6>
              </div>

            </div>


            <div className="basis-6/12 mr-0 lg:mr-20   ">


        {/* content to show on small screen start */}
<div className=" block md:hidden scrollfaq">
        <div className="right-sec p-5">
                <h3 className="pink-color text-base monofont" >What is the LOF platform for?</h3>
                <p className="pr">
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

              <div className="right-sec p-5 mt-5">
                <h3 className="pink-color text-base monofont" >How long does it take to become a creator?</h3>
                <p className="pr">
                Becoming a creator is a very easy and fast process. It does
                    not require any prior knowledge or skill! You just need to
                    fill in a few details and be verified by the platform
                    moderators before you can start releasing your content.
                </p>
              </div>

              <div className="right-sec p-5 mt-5">
                <h3 className="pink-color text-base monofont" >How much money will I earn with LOF?</h3>
                <p className="pr">
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

              <div className="right-sec p-5 mt-5">
                <h3 className="pink-color text-base monofont" >Who can create on the LOF platform?</h3>
                <p className="pr">
                Everyone! All kinds of content creators are welcome and free
                    to release content. The content must follow legal
                    restrictions, but besides that LOF is 100% free of
                    judgement.
                </p>
              </div>

              <div className="right-sec p-5 mt-5">
                <h3 className="pink-color text-base monofont"> What methods are used for payments?</h3>
                <p className="pr">
                Users can pay using a credit card or a crypto wallet.
                    Acceptable cryptocurrencies are BUSD, BNB and of course our
                    native LOF Token. Users who would like to privately purchase
                    content will prefer to use cryptocurrency. If you’re not
                    familiar with cryptocurrency or the process of using it, we
                    have how-to videos in our education center!
                </p>
              </div>

              <div className="right-sec p-5 mt-5">
                <h3 className="pink-color text-base monofont"> How frequent are payouts to content creators?</h3>
                <p className="pr">
                Payouts will take place once per month for credit/debit card
                    purchases. Crypto payments are practically instant and are
                    not subject to chargebacks! If you’re not familiar with
                    cryptocurrency or the process of using it, we have how-to
                    videos in our Education Center!
                </p>
              </div>
       
  </div>  
        {/* content to show on small screen start */}
            
            {/* <div className=" que-ans  overflow-y-auto h-80">
              <div className="right-sec p-5">
                <h3 className="pink-color text-base" >What is the LOF platform for?</h3>
                <p className="pr">
                  LOF Platform is a revolutionary fan platform that allows all
                  types of content creators to publish content in many different
                  forms (images, videos, live streams, music and NFT's).
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
              <div className="right-sec p-5">
                <h3 className="pink-color text-base" >How long does it take to become a creator?</h3>
                <p className="pr">
                Becoming a creator is a very easy and fast process. It does
                    not require any prior knowledge or skill! You just need to
                    fill in a few details and be verified by the platform
                    moderators before you can start releasing your content.
                </p>
              </div>
              <div className="right-sec p-5">
                <h3 className="pink-color text-base" >How much money will I earn with LOF?</h3>
                <p className="pr">
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
              <div className="right-sec p-5">
                <h3 className="pink-color text-base" >Who can create on the LOF platform?</h3>
                <p className="pr">
                Everyone! All kinds of content creators are welcome and free
                    to release content. The content must follow legal
                    restrictions, but besides that LOF is 100% free of
                    judgement.
                </p>
              </div>
              <div className="right-sec p-5">
                <h3 className="pink-color text-base"> What methods are used for payments?</h3>
                <p className="pr">
                Users can pay using a credit card or a crypto wallet.
                    Acceptable cryptocurrencies are BUSD, BNB and of course our
                    native LOF Token. Users who would like to privately purchase
                    content will prefer to use cryptocurrency. If you’re not
                    familiar with cryptocurrency or the process of using it, we
                    have how-to videos in our education center!
                </p>
              </div>
              <div className="right-sec p-5">
                <h3 className="pink-color text-base"> How frequent are payouts to content creators?</h3>
                <p className="pr">
                Payouts will take place once per month for credit/debit card
                    purchases. Crypto payments are practically instant and are
                    not subject to chargebacks! If you’re not familiar with
                    cryptocurrency or the process of using it, we have how-to
                    videos in our Education Center!
                </p>
              </div>
            </div> */}
            
            <Faqscroll/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
