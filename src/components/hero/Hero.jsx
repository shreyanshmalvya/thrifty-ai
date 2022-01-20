import './hero.css'
import WelcomeVid from "../../assets/Videos/WelcomeVid.mp4"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Hero() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="heroWrapper">
            <div data-aos="slide-right" data-aos-duration="1800" className="heroLeft">
                <video loop autoPlay muted src={WelcomeVid}></video>
            </div>
            <div data-aos="fade-left" data-aos-duration="900" data-aos-delay="900" className="heroRight">
                <div className="heroRTop">
                    <p className="heroGlitchHeading">Ever met an</p>
                    <div className="glitch">
                        artifical human
                    </div>
                </div>

                <div className="heroRBottom">
                    <p>AI Humans are AI powered characters that can
                    see, hear and understand. They look like us, talk like us and behave like us</p>

                    <span className="heroButton"><a href="/#">Learn More</a></span>
                </div>

            </div>
        </div>
    )
}
