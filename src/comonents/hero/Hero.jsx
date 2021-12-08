import './hero.css'
import tryImg1 from "../../images/tryImg1.png"


export default function Hero() {
    return (
        <div>
            <div className="heroWrapper">
                <div className="heroLeft">
                    <img src={tryImg1} alt="" />
                </div>
                <div className="heroRight">
                    <div className="heroRTop">
                        <p className="heroGlitchHeading">Ever met an</p>
                        <div className="glitch">
                            {/* <span aria-hidden="true">artifical human</span> */}
                            artifical human
                            {/* <span aria-hidden="true">artifical human</span> */}
                        </div>
                    </div>

                    <div className="heroRBottom">
                        <p>AI Humans are AI powered characters that can
                        see, hear and understand. They look like us, talk like us and behave like us</p>

                        <span className="heroButton">Learn More</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
