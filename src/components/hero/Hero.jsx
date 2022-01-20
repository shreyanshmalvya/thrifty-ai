import './hero.css'
import WelcomeVid from "../../assets/Videos/WelcomeVid.mp4"


export default function Hero() {
    return (
        <div className="heroWrapper">
            <div className="heroLeft">
                <video loop autoPlay muted src={WelcomeVid}></video>
            </div>
            <div className="heroRight">
                <div className="heroRTop">
                    <p className="heroGlitchHeading">Ever met an</p>
                    <div className="glitch">
                        artifical human
                    </div>
                </div>

                <div className="heroRBottom">
                    <p>AI Humans are AI powered characters that can
                    see, hear and understand. They look like us, talk like us and behave like us</p>

                    <span className="heroButton"><a href="#">Learn More</a></span>
                </div>

            </div>
        </div>
    )
}
