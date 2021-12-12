import "../carousel/carousel.css"
import { useState } from "react";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Carousel() {
    // const videos = ["PF/Videos/carVid1.mp4", "PF/Videos/carVid2.mp4", "PF/Videos/carVid3.mp4"];
    const videos = [`${PF}/Videos/AditiCarVid.mp4`, `${PF}/Videos/DikshaCarVid.mp4`, `${PF}/Videos/RevanthCarVid.mp4`, `${PF}/Videos/SiddarthCarVid.mp4`];
    const name = ["Aditi", "Diksha", "Revanth", "Siddarth"];
    const designation = ["Hospital Worker", "Hotel Manager", "Office Receptionist", "Sales Executive"];
    const desc = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ante auctor, sollicitudin ipsum vel, pellentesque nibh. Nulla a sem nec enim sodales finibus eu vel magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ante auctor, sollicitudin ipsum vel, pellentesque nibh. Nulla a sem nec enim sodales finibus eu vel magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ante auctor, sollicitudin ipsum vel, pellentesque nibh. Nulla a sem nec enim sodales finibus eu vel magna.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ante auctor, sollicitudin ipsum vel, pellentesque nibh. Nulla a sem nec enim sodales finibus eu vel magna."];

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
                        <video autoPlay muted src={video}></video>
                    </div>
                    <span className="prev" onClick={prev}><img src={PF+"prev.png"} alt="" /></span>
                    <span className="next" onClick={next}><img src={PF+"next.png"} alt="" /></span>
                </div>
                <div className="carouselRight">
                    <div className="carouselRightTop">
                        <p className="carouselName">{name[n]}</p>
                        <p className="carouselDesignation">{designation[n]}</p>
                        <p className="carouselDesc">{desc[n]}</p>
                    </div>

                    <div className="carouselRightBottom">
                        <div className={`box ${n===0?"boxActive":""}`} onClick={()=>thumb(0)}> <img src={PF+"/Thumbnails/AditiThumb.png"} alt="" /> </div>
                        <div className={`box ${n===1?"boxActive":""}`} onClick={()=>thumb(1)}><img src={PF+"/Thumbnails/DikshaThumb.png"} alt="" /></div>
                        <div className={`box ${n===2?"boxActive":""}`} onClick={()=>thumb(2)}><img src={PF+"/Thumbnails/RevanthThumb.png"} alt="" /></div>
                        <div className={`box ${n===3?"boxActive":""}`} onClick={()=>thumb(3)}><img src={PF+"/Thumbnails/SiddarthThumb.png"} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
