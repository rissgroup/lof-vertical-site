import React from 'react';
import Hero from "../components/Hero"
import LofSlider from "../components/Lof-slider";
import Become from "../components/Become";
import WhyLof from "../components/Whylof";
import Faq from "../components/Faq";
import Nav from './navs/nav';
import Footer from './navs/Footer';

export default function SimplePage() {
  return (
    <>
    <div className='main-sloider'>

    <Nav/>
    <Hero/>
    <LofSlider/>
    <Become/>
    <WhyLof/>
    <Faq/>
    <Footer/>
    </div>
    </>
  )
}
