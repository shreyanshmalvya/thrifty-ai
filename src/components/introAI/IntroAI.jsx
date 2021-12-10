import React from 'react'
import './introAI.css'
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const IntroAI = () => {
    return (
        <div className="grid">
            <div className="introAITop">
                <div className='introAITopLeft'>
                    <img src={PF + 'cap1.png'} alt='GlazeIntoFuture' />
                </div>
                <div className='introAITopRight'>
                        <span>WHY AI HUMANS ?</span>
                        <span>​Digital Humans are a huge leap in brand and customer experience, combining the best of online and face-to-face interaction. They are the next generation human form of chatbots</span>
                </div>
            </div>
            {/* <div className="introAIbottom"></div>
            <div className='introAIBottomLeft'>
                    <span>REDEFINE YOUR CX</span>
                    <span>No more clicks on forms, wait to get calls connected to the customer service, take your business face to face.​“Namaste” in the language your customer speaks. Every customer is different, so are their needs. Personalize and present with the best customer experience anywhere/anytime.</span>
            </div>
            <div className='introAIBottomRight'>
                <img src={PF + 'cap2.png'} alt='nightCity' />
            </div> */}
        </div>
    )
}

export default IntroAI;
