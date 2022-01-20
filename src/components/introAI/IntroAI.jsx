import React from 'react'
import './introAI.css'
import cap1 from "../../assets/cap1.png"
import cap2 from "../../assets/cap2.png"

const IntroAI = () => {
    return (
        <div className="introWrapper">
            <div className="introAIHeader">INTRODUCING ARTIFICIAL HUMANS</div>
            <div className="grid">
                <div className="introAITop">
                    <div className='introAITopLeft'>
                        <img src={cap1} alt='GlazeIntoFuture' />
                    </div>
                    <div className='introAITopRight'>
                        <span>WHY AI HUMANS ?</span>
                        <span>​Digital Humans are a huge leap in brand and customer experience, combining the best of online and face-to-face interaction. They are the next generation human form of chatbots</span>
                    </div>
                </div>
                <div className="introAIBottom">
                    <div className='introAIBottomLeft'>
                        <span>REDEFINE YOUR CX</span>
                        <span>No more clicks on forms, wait to get calls connected to the customer service, take your business face to face.​“Namaste” in the language your customer speaks. Every customer is different, so are their needs. Personalize and present with the best customer experience anywhere/anytime.</span>
                    </div>
                    <div className='introAIBottomRight'>
                        <img src={cap2} alt='nightCity' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroAI;
