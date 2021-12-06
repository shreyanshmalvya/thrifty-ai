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
                    <div className="rTop">
                        <div className="glitch">
                            <span aria-hidden="true">Ever met</span>
                            Ever met
                            <span aria-hidden="true">Ever met</span>
                        </div>
                        <div className="glitch">
                            <span aria-hidden="true">artifical human</span>
                            artifical human
                            <span aria-hidden="true">artifical human</span>
                        </div>
                    </div>

                    <div className="rBottom">
                        <p>AI Humans are AI powered characters that can
                        see, hear and understand. They look like us, talk like us and behave like us</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
