import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import IntroAI from '../components/introAI/IntroAI';
import ClaimDivRows from '../components/claimDivRow/ClaimDivRows';
import Carousel from '../components/carousel/Carousel';
import WhyUs from '../components/whyUs/WhyUs';
import MediaToggle from '../components/mediaToggle/MediaToggle';
import Footer from '../components/footer/Footer';
import News from '../components/news/News';
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
            <News />
            <Footer />
        </div>
    )
}

export default Home
