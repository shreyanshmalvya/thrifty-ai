import "../carousel/carousel.css"
import { useState } from "react";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Carousel() {
    // const videos = ["PF/Videos/carVid1.mp4", "PF/Videos/carVid2.mp4", "PF/Videos/carVid3.mp4"];
    const videos = [`${PF}/Videos/carVid1.mp4`, `${PF}/Videos/carVid2.mp4`, `${PF}/Videos/carVid3.mp4`, `${PF}/Videos/carVid4.mp4`];

    const [video, setVideo] = useState(videos[0]);  
    
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

    return (
        <div>
            <div className="carouselTop">
                <p className="carouselTopHeading">future generations of worker</p>
            </div>
            <div className="carouselContainer">
                <div className="carouselLeft">

                </div>
                <div className="carouselMiddle">
                    <div className="carouselSlides">
                        <video autoPlay muted src={video}></video>
                    </div>
                    <span class="prev" onClick={prev}>&#10094;</span>
                    <span class="next" onClick={next}>&#10095;</span>
                </div>
                <div className="carouselRight">
                    {/* <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div> */}

                </div>
            </div>
        </div>
    )
}
