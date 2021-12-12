import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import IntroAI from '../components/introAI/IntroAI';
import ClaimDivRows from '../components/claimDivRow/ClaimDivRows';
import Carousel from '../components/carousel/Carousel';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <IntroAI />
            <ClaimDivRows/>
            <Carousel/>
        </div>
    )
}

export default Home
