import React, { useEffect } from 'react';
import Beslider from "./Beslider";
 
// import AnimatedText from 'react-animated-text-content';
import AnimatedText from 'react-animated-text-content';




export default function Become() {
 

  return (
    <>
    <div className="bg-dark hero" id="become">
      <div className="container-fluid ">
        <div className="flex flex-col text-white  md:flex-row pt-28 mbl-resp-bcm md:pt-32 place-content-center ">
          <div className="md:mt-40 basis-1/4 md:ml-14 "      >
        
            {/* <h1 className="text-4xl leading-10  md:text-3xl xl:text-6xl monofont pb-2 md:pb-5 ">
              Become A <br />
              <span className="pink-color ">Creator</span>
            </h1> */}
    
            <AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph text-4xl leading-10  md:text-3xl xl:text-6xl monofont pb-2 md:pb-5"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
Become A
</AnimatedText>
<AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.8}
  tag="p"
  className="animated-paragraph text-4xl leading-10  md:text-3xl xl:text-6xl monofont pb-2 md:pb-5 pink-color "
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>

             Creator
</AnimatedText>

<AnimatedText
     type='words'
     interval={0.04}
     duration={0.8}
     animation={{
       y: '100px',
       ease: 'ease',
       scale: 1.06,
     }}
    className="md:leading-8 text-[12px]"
  >
    Create an account and we’ll get you started in no time! More
              features, profit and freedom - with dedicate support in
              everything
</AnimatedText>

          
        
            <button className="mb-5 mt-4 px-5 py-2 text-xs font-medium rounded-md button button--moema button--text-upper">
              Create an account 
            </button>
            
          </div>
          <div className="basis-3/4 md:ml-48" >
            <Beslider/>

          </div>
        </div>
      </div>
      </div>
    </>
  );
}
