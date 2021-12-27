import React from 'react'
import { useState } from 'react/cjs/react.development';
import './mediaToggle.css'
import nextButton from "../../assets/Icons/next.png"
import prevButton from "../../assets/Icons/prev.png"
import explore from '../../assets/ai-samples/explore.jpg'
import feelthevibe from '../../assets/ai-samples/feelthevibe.png'
import justLikeUs from '../../assets/ai-samples/justLikeUs.png'
import lowangle from '../../assets/ai-samples/lowangle.png'
import selfaware from '../../assets/ai-samples/selfaware.png'
import enigmach from '../../assets/events/enigmach.jpeg'
import enigmach2 from '../../assets/events/enigmach2.jpeg'
import enigmach3 from '../../assets/events/enigmach3.jpeg'
import us from '../../assets/events/us.jpeg'
import IAS from '../../assets/events/IAS.png'
import thumbnail from '../../assets/thumbnail.png'

const MediaToggle = () => {
    const embedIDs = ['_j3FQf5yqu8', '_j3FQf5yqu4', '_j3FQf5yqu5', '_j3FQf5yqu3'];
    const [url, setUrl] = useState(embedIDs[0]);
    const [videoToggle, setVideoToggle] = useState(false);

    const YoutubeEmbed = ({ url }) => (
        <div className="responsiveVideo">
            <iframe width="853"
                height="480"
                src={`https://www.youtube.com/embed/${url}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube" />
        </div>
    );

    const key = embedIDs.indexOf(url)
    
    const prev = () => {
        let index = embedIDs.indexOf(url);
        if (index === 0) {
            setUrl(embedIDs[embedIDs.length - 1]);
        } else {
            setUrl(embedIDs[index - 1]);
        }
    }

    const next = () => {
        let index = embedIDs.indexOf(url);
        if (index === embedIDs.length - 1) {
            setUrl(embedIDs[0]);
        } else {
            setUrl(embedIDs[index + 1]);
        }
    }

    const swiper = (key) => {
        setUrl(embedIDs[key]);
    }

    return (
        <>
            <div className='topTrayMediaToggle'>
                <span className='header'>Media</span>
                <div className="optionTrayMediaToggle">
                    <span></span>
                    <div className="toggleOptions">Videos</div>
                    <div className="toggleOptions">Events</div>
                    <div className="toggleOptions">Photos</div>
                    <span></span>
                </div>
            </div>

            <div className="videoContainer">
                <div className="videoWrapperMediaToggle">
                    <div className="prev" onClick={prev}><img src={prevButton} alt="previousbtn" /></div>
                    <div className="player"><img classname={`thumbnail ${videoToggle ? 'hide' : ''}`} src={thumbnail} alt='clickbait' onClick={() => { YoutubeEmbed(url); setVideoToggle(!videoToggle) }} /></div>
                    <div className="next" onClick={next}><img src={nextButton} alt="nextbtn" /></div>
                </div>
                <div className="captionTrayMediaToggle">
                    <div className={`thumbnail ${key === 0 ? 'thumbnailactive' : ' '}`} onClick={() => swiper(0)}><img src={thumbnail} /></div>
                    <div className={`thumbnail ${key === 1 ? 'thumbnailactive' : ' '}`} onClick={() => swiper(1)}><img src={thumbnail} /></div>
                    <div className={`thumbnail ${key === 2 ? 'thumbnailactive' : ' '}`} onClick={() => swiper(2)}><img src={thumbnail} /></div>
                    <div className={`thumbnail ${key === 3 ? 'thumbnailactive' : ' '}`} onClick={() => swiper(3)}><img src={thumbnail} /></div>
                </div>
            </div>

            {/* <div className="eventConatiner">
                <img src = {IAS} alt = 'MeetWithIAS' />
                <img src = {enigmach} alt = 'eventImg' />
                <img src = {enigmach2} alt = 'eventImg' />
                <img src = {enigmach3} alt = 'eventImg' />
                <img src = {us} alt = 'ourteam' />
            </div>

            <div className="photoConatiner">
                <img src = {explore} alt = 'explore' />
                <img src = {feelthevibe} alt = 'feelthevibe' />
                <img src = {justLikeUs} alt = 'justlikeus' />
                <img src = {lowangle} alt = 'lowangle' />
                <img src = {selfaware} alt = 'selfaware' />
            </div> */}

        </>
    )
}

export default MediaToggle
