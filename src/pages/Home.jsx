import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import IntroAI from '../components/introAI/IntroAI';
import ClaimDivRows from '../components/claimDivRow/ClaimDivRows';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <IntroAI />
            <ClaimDivRows/>
        </div>
    )
}

export default Home
