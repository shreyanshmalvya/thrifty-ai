import "../carousel/carousel.css"
import { useState } from "react";
import AditiCarVid from "../../assets/Videos/AditiCarVid.mp4"
import DikshaCarVid from "../../assets/Videos/DikshaCarVid.mp4"
import RevanthCarVid from "../../assets/Videos/RevanthCarVid.mp4"
import SiddarthCarVid from "../../assets/Videos/SiddarthCarVid.mp4"
import AditiThumb from "../../assets/Thumbnails/AditiThumb.png"
import DikshaThumb from "../../assets/Thumbnails/DikshaThumb.png"
import RevanthThumb from "../../assets/Thumbnails/RevanthThumb.png"
import SiddarthThumb from "../../assets/Thumbnails/SiddarthThumb.png"
import nextButton from "../../assets/Icons/next.png"
import prevButton from "../../assets/Icons/prev.png"

export default function Carousel() {
    const videos = [AditiCarVid, DikshaCarVid, RevanthCarVid, SiddarthCarVid];
    const name = ["Aditi", "Diksha", "Revanth", "Siddarth"];
    const designation = ["Sales Assistant", "Customer Assistant", "Telecom", "Education"];
    const desc = ["24/7 dedicated sales employee is no more a dream but a reality. Introducing AI Sales Assistant that can assist users from A to Z products while recommending items that they would like to buy.", "It takes months to find a customer, and seconds to lose one. Be by your customer's side, always, through our AI Customer Assistant. Gift your customers the best partners who listen to their needs, keep in mind their expectations and deliver the best, always!", "Every customer is different, so are their needs. Our digital people being available 24*7 interacts in the language the customer speaks to personalize customer experience without making them wait.", "Every customer is different, so are their needs. Our digital people being available 24*7 interacts in the language the customer speaks to personalize customer experience without making them wait."];

    const [video, setVideo] = useState(videos[0]);  
    const n = videos.indexOf(video);
    const prev=()=>{
        let index = videos.indexOf(video);
        if(index === 0){
            setVideo(videos[videos.length-1]);
        }else{
            setVideo(videos[index-1]);
        }
    }

    const next=()=>{
        let index = videos.indexOf(video);
        if(index === videos.length-1){
            setVideo(videos[0]);
        }else{
            setVideo(videos[index+1]);
        }
    }

    const thumb = (n)=>{
        setVideo(videos[n]);
    }

    return (
        <div className="carouselComponentWrapper">
            <div className="carouselTop">
                <p className="carouselTopHeading">future generations of worker</p>
            </div>
            <div className="carouselContainer">
                <div className="carouselLeft">
                    <p>AI HUMANS FOR EVERY INDUSTRY VERTICAL</p>
                </div>
                <div className="carouselMiddle">
                    <div className="carouselSlides">
                        <video loop autoPlay muted src={video}></video>
                    </div>
                    <span className="prev" onClick={prev}><img src={prevButton} alt="" /></span>
                    <span className="next" onClick={next}><img src={nextButton} alt="" /></span>
                </div>
                <div className="carouselRight">
                    <div className="carouselRightTop">
                        <p className="carouselName">{name[n]}</p>
                        <p className="carouselDesignation">{designation[n]}</p>
                        <p className="carouselDesc">{desc[n]}</p>
                    </div>

                    <div className="carouselRightBottom">
                        <div className={`box ${n===0?"boxActive":""}`} onClick={()=>thumb(0)}> <img src={AditiThumb} alt="" /> </div>
                        <div className={`box ${n===1?"boxActive":""}`} onClick={()=>thumb(1)}><img src={DikshaThumb} alt="" /></div>
                        <div className={`box ${n===2?"boxActive":""}`} onClick={()=>thumb(2)}><img src={RevanthThumb} alt="" /></div>
                        <div className={`box ${n===3?"boxActive":""}`} onClick={()=>thumb(3)}><img src={SiddarthThumb} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
