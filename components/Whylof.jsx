import React from "react";
import Image from "next/image";
import Money from "../public/assets/Icons/money.svg";
import Inlove from "../public/assets/Icons/in-love.svg";
import followers from "../public/assets/Icons/followers.svg";
import collaboration from "../public/assets/Icons/collaboration.svg";
import AnimatedText from 'react-animated-text-content';
export default function Whylof() {
  return (
    <>
      <div className="bg-dark">
        <div className="container-fluid ">
          <div className="flex flex-col md:flex-row text-white pb-5 pt-20 md:pt-36 lg:pt-52">
            <div className="basis-full text-center "   >
              <h1 className="monofont text-3xl md:text-5xl">Why LOF?</h1>
            </div>
          </div>
        </div>

        <div className=" container-fluid scrollwhylof ">
          <div className="flex flex-col md:flex-row text-white my-2 md:my-10  gap-2 md:gap-10 lg:gap-10 lg:px-10">
            <div className="basis-2/4 py-4  px-4 md:py-8  md:px-8 card-bg">
              <div className="flex pb-3"    >
                <Image src={Money} width={60} height={60} className="icons" alt="Picture of the author" />
                <h6 className="my-auto hind text-sm md:text-xl font-bold pl-[16px] md:pl-[32px] " >
                  More Profit
                </h6>
              </div>
              <AnimatedText
    type='words'
    interval={0.04}
    duration={0.8}
    animation={{
      x: '-100px',
      ease: 'ease',
      scale: 1.06,
    }}
    className="font-normal text-[18px]"
  >
   You will keep up to 95% of all your sales! In addition to that,
                you can release your content as NFTs, and get a share of the
                price every single time the NFT is resold - forever.
</AnimatedText>
              <p     >
               
              </p>
            </div>
            <div className="basis-2/4 py-4  px-4 md:py-8  md:px-8 card-bg">
              <div className="flex pb-3"    >
                <Image src={Inlove} width={60} height={60} className="icons" alt="Picture of the author" />
                <h6 className="my-auto hind text-sm md:text-xl font-bold pl-[16px] md:pl-[32px]" >
                  More Features
                </h6>
              </div>
              <AnimatedText
    type='words'
    interval={0.04}
    duration={0.8}
    animation={{
      x: '-100px',
      ease: 'ease',
      scale: 1.06,
    }}
    className="font-normal text-[15px]"
  >
    We looked at other fan platforms and what they were missing. We
                worked with content creators and asked what could be done
                better. Turns out there were plenty, and our platform has been
                built to fix that.
</AnimatedText>
              
              
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-white gap-2 md:gap-10 lg:gap-10 lg:px-10  ">
            <div className="basis-2/4 py-4  px-4 md:py-8  md:px-8 card-bg">
              <div className="flex pb-3"    >
                <Image src={followers} width={60} height={60} className="icons" alt="Picture of the author" />
                <h6 className="my-auto hind text-sm md:text-xl font-bold pl-[16px] md:pl-[32px]"  >
                  Effortless Payments in Time
                </h6>
              </div>
              <AnimatedText
    type='words'
    interval={0.04}
    duration={0.8}
    animation={{
      x: '-100px',
      ease: 'ease',
      scale: 1.06,
    }}
    className="font-normal text-[15px]"
  >
   We are aware of the problems the other fan platforms have had.
                On LOF, your payments will always be in time without any extra
                hassle.
</AnimatedText>
              
              <p     >
               
              </p>
            </div>
            <div className="basis-2/4 py-4 px-3 md:py-8  md:px-8 card-bg">
              <div className="flex pb-3"   >
                <Image src={collaboration} width={60} height={60} className="icons"  alt="Picture of the author" />
                <h6 className="my-auto hind text-sm md:text-xl font-bold pl-[16px] md:pl-[32px]" >
                  More Freedom
                </h6>
              </div>
              <AnimatedText
    type='words'
    interval={0.04}
    duration={0.8}
    animation={{
      x: '-100px',
      ease: 'ease',
      scale: 1.06,
    }}
    className="font-normal text-[15px]" 
  >
     We will not restrict your content in anyway - as long as it
                obeys the law. Your content can be just as mild or just as kinky
                as you want. There will be no surprise account closings or
                changes in terms of use. We are on your side, and we want you to
                be happy.
</AnimatedText>

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
