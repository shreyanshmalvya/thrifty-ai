import React from 'react'
import { useState } from 'react/cjs/react.development';
import nextButton from "../../assets/Icons/next.png"
import prevButton from "../../assets/Icons/prev.png"
import explore from '../../assets/ai-samples/explore.jpg'
import feelthevibe from '../../assets/ai-samples/feelthevibe.jpg'
import justLikeUs from '../../assets/ai-samples/JustLikeUs.jpg'
import lowangle from '../../assets/ai-samples/lowangle.jpg'
import selfaware from '../../assets/ai-samples/selfaware.jpg'
import enigmach from '../../assets/events/enigmach.jpeg'
import enigmach2 from '../../assets/events/enigmach2.jpeg'
import enigmach3 from '../../assets/events/enigmach3.jpeg'
import us from '../../assets/events/us.jpeg'
import IAS from '../../assets/events/IAS.jpeg'

const MediaToggle = () => {
    const embedIDs = ['_j3FQf5yqu8',''];
    const [url, setUrl] = useState(embedIDs[0]);

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
        <div className='topTrayMediaToggle'>
            <div className="optionTrayMediaToggle">
                <div className="toggleOptions">Videos</div>
                <div className="toggleOptions">Events</div>
                <div className="toggleOptions">Photos</div>
            </div>

            <div className="videoContainer">
            <div className="videpWrapperMediaToggle">
                <span className="prev" onClick={prev}><img src={prevButton} alt="" /></span>
                <div className="player"><img src ={} alt= 'clickbait' onClick={()=> YoutubeEmbed(url)}/></div>
                <span className="next" onClick={next}><img src={nextButton} alt="" /></span>
            </div>
            <div className="captionTrayMediaToggle">
                <div className={`thumbnail ${key === 0 ? 'thumbnailactive' : ' '}`} onClick={() => swiper(0)}><img src={ } /></div>
                {/* <div className={`thumbnail ${key === 1 ? 'thumbnailactive' : ' '}`} onClick={() => swiper(1)}><img src={ } /></div>
                <div className={`thumbnail ${key === 2 ? 'thumbnailactive' : ' '}`} onClick={() => swiper(2)}><img src={ } /></div>
                <div className={`thumbnail ${key === 3 ? 'thumbnailactive' : ' '}`} onClick={() => swiper(3)}><img src={ } /></div> */}
            </div>
            </div>

            <div className="eventConatiner">
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
            </div>

        </div>
    )
}

export default MediaToggle
