import React from 'react'
import './hero.css'

const Hero = () => {
    return (
        <div className="heroWrapper">
            <div className='introHeader'>
                <div className='introHeading'>
                    <div>EVER MET AN</div>
                    <div className='glitch'>
                        <span aria-hidden="true">ARTIFICAL HUMAN </span>
                        ARTIFICAL HUMAN
                        <span aria-hidden="true">ARTIFICAL HUMAN </span>
                    </div>
                </div>
                <div className='heroInfo'>
                    AI Humans are AI powered characters that can
                    see, hear and understand. They look like us, talk like us and behave like us
                </div>
                <button className='learnMore'>Learn More</button>
            </div>
        </div>
    )
}

export default Hero
