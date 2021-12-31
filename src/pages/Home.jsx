import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import IntroAI from '../components/introAI/IntroAI';
import ClaimDivRows from '../components/claimDivRow/ClaimDivRows';
import Carousel from '../components/carousel/Carousel';
import WhyUs from '../components/whyUs/WhyUs';
import MediaToggle from '../components/mediaToggle/MediaToggle';
import ContactUs from '../components/contactus/ContactUs';
// import ClaimDivs from '../components/claimDivs/ClaimDivs';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <IntroAI />
            <Carousel />
            <ClaimDivRows/>
            <WhyUs />
            <MediaToggle />
            <ContactUs />
        </div>
    )
}

export default Home
