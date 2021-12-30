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
import thumbnail from '../../assets/videoThumbnails/thumbnail.jpg'
import cover1 from '../../assets/videoThumbnails/cover1.jpg'
import cover2 from '../../assets/videoThumbnails/cover2.jpg'
import cover3 from '../../assets/videoThumbnails/cover3.jpg'
import OutsideClickHandler from 'react-outside-click-wrapper/build/OutsideClickHandler';


const MediaToggle = () => {
    const embedIDs = ['_j3FQf5yqu8', 'citoCiZUHg0', 'i9OmCpNZghA', '98wixmq96dk'];
    const imgArray = [thumbnail, cover1, cover2, cover3]
    const eventArray = [IAS, enigmach, enigmach2, enigmach3, us]
    const eventArrayAI = [explore, feelthevibe, justLikeUs, lowangle, selfaware]
    const [imgSlider, setImgSlider] = useState(eventArray[0]);
    const [imgSliderAI, setImgSliderAI] = useState(eventArrayAI[0]);
    const [url, setUrl] = useState(embedIDs[0]);
    const [videoToggle, setVideoToggle] = useState(false);
    const [showImg, setShowImg] = useState(false);
    const [image, setImage] = useState(null);
    const [videos, setVideos] = useState(true);
    const [events, setEvents] = useState(false);
    const [photos, setPhotos] = useState(false);


    const key = embedIDs.indexOf(url)
    const imgSliderPrevAI = () => {
        let point = eventArrayAI.indexOf(imgSliderAI);
        if (point === 0) {
            setImgSliderAI(eventArrayAI[eventArrayAI.length - 1]);
        } else {
            setImgSliderAI(eventArrayAI[point - 1]);
        }
    }
    const imgSliderNextAI = () => {
        let point = eventArrayAI.indexOf(imgSliderAI);
        if (point === eventArrayAI.length - 1) {
            setImgSliderAI(eventArrayAI[0]);
        } else {
            setImgSliderAI(eventArrayAI[point + 1]);
        }
    }

    const imgSliderPrev = () => {
        let pointer = eventArray.indexOf(imgSlider);
        if (pointer === 0) {
            setImgSlider(eventArray[eventArray.length - 1]);
        } else {
            setImgSlider(eventArray[pointer - 1]);
        }
        console.log(pointer);
    }
    const imgSliderNext = () => {
        let pointer = eventArray.indexOf(imgSlider);
        if (pointer === eventArray.length - 1) {
            setImgSlider(eventArray[0]);
        } else {
            setImgSlider(eventArray[pointer + 1]);
        }
        console.log(pointer);
    }


    const prev = () => {
        let index = embedIDs.indexOf(url);
        if (index === 0) {
            setUrl(embedIDs[embedIDs.length - 1]);
        } else {
            setUrl(embedIDs[index - 1]);
        }
        setVideoToggle(false)
    }

    const next = () => {
        let index = embedIDs.indexOf(url);
        if (index === embedIDs.length - 1) {
            setUrl(embedIDs[0]);
        } else {
            setUrl(embedIDs[index + 1]);
        }
        setVideoToggle(false)
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
                    <div className={`toggleOptions ${videos ? 'active' : ''} `} onClick={() => { setVideos(true); setEvents(false); setPhotos(false) }}>Videos</div>
                    <div className={`toggleOptions ${events ? 'active' : ''} `} onClick={() => { setVideos(false); setEvents(true); setPhotos(false) }}>Events</div>
                    <div className={`toggleOptions ${photos ? 'active' : ''} `} onClick={() => { setVideos(false); setEvents(false); setPhotos(true) }}>Photos</div>
                    <span></span>
                </div>
            </div>

            {
                videos &&
                <div className="videoContainer">
                    <div className="videoWrapperMediaToggle">
                        <div className="prev" onClick={prev}><img src={prevButton} alt="previousbtn" /></div>
                        <div className="player">
                            <img className={`${videoToggle ? 'hide' : ''}`} src={imgArray[key]} alt='clickbait' onClick={() => setVideoToggle(true)} />
                            <iframe className={`${!videoToggle ? 'hide' : ''}`}
                                src={`https://www.youtube.com/embed/${url}?autoplay=${videoToggle ? '1' : '0'}`}
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div className="next" onClick={next}><img src={nextButton} alt="nextbtn" /></div>
                    </div>
                    <div className="captionTrayMediaToggle">
                        <div className={`thumbnail ${key === 0 ? 'thumbnailactive' : ' '}`} onClick={() => { swiper(0); setVideoToggle(false) }}><img src={thumbnail} /></div>
                        <div className={`thumbnail ${key === 1 ? 'thumbnailactive' : ' '}`} onClick={() => { swiper(1); setVideoToggle(false) }}><img src={cover1} /></div>
                        <div className={`thumbnail ${key === 2 ? 'thumbnailactive' : ' '}`} onClick={() => { swiper(2); setVideoToggle(false) }}><img src={cover2} /></div>
                        <div className={`thumbnail ${key === 3 ? 'thumbnailactive' : ' '}`} onClick={() => { swiper(3); setVideoToggle(false) }}><img src={cover3} /></div>
                    </div>
                </div>
            }

            {
                events &&
                <div className="eventContainer">
                    <div className="prevWrapper">
                        <div className="prev" onClick={imgSliderPrev}><img src={prevButton} alt="previousbtn" /></div>
                    </div>
                    <div className="smallViewportSlider"><img src={imgSlider} alt='CarouselForImg' /></div>
                    <div className="leftCover">
                        <img src={IAS} alt='MeetWithIAS' onClick={() => { setImage(IAS); setShowImg(true) }} />
                    </div>
                    <div className="columnSecond">
                        <div className="topRight">
                            <img src={enigmach} alt='eventImg' onClick={() => { setImage(enigmach); setShowImg(true) }} />
                            <img src={enigmach2} alt='eventImg' onClick={() => { setImage(enigmach2); setShowImg(true) }} />
                        </div>
                        <div className="bottomRight">
                            <img src={enigmach3} alt='eventImg' onClick={() => { setImage(enigmach3); setShowImg(true) }} />
                            <img src={us} alt='ourteam' onClick={() => { setImage(us); setShowImg(true) }} />
                        </div>
                    </div>
                    <div className="nextWrapper">
                        <div className="next" onClick={imgSliderNext}><img src={nextButton} alt="nextbtn" /></div>
                    </div>
                </div>
            }

            {
                photos &&
                <div className="photoContainer">
                    <div className="prevWrapper">
                        <div className="prev" onClick={imgSliderPrevAI}><img src={prevButton} alt="previousbtn" /></div>
                    </div>
                    <div className="smallViewportSlider"><img src={imgSliderAI} alt='CarouselForImg' /></div>
                    <div className="leftCoverAI">
                        <img src={explore} alt='explore' onClick={() => { setImage(explore); setShowImg(true) }} />
                    </div>
                    <div className="columnSecondAI">
                        <div className="topRightAI">
                            <img src={feelthevibe} alt='feelthevibe' onClick={() => { setImage(feelthevibe); setShowImg(true) }} />
                            <img src={justLikeUs} alt='justlikeus' onClick={() => { setImage(justLikeUs); setShowImg(true) }} />
                        </div>
                        <div className="bottomRightAI">
                            <img src={lowangle} alt='lowangle' onClick={() => { setImage(lowangle); setShowImg(true) }} />
                            <img src={selfaware} alt='selfaware' onClick={() => { setImage(selfaware); setShowImg(true) }} />
                        </div>
                    </div>
                    <div className="nextWrapper">
                        <div className="next" onClick={imgSliderNextAI}><img src={nextButton} alt="nextbtn" /></div>
                    </div>
                </div>
            }
            {
                showImg &&
                <div className="modal">
                    <svg className='close' onClick={() => setShowImg(false)} width="30" height="30" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white" />
                    </svg>
                    <OutsideClickHandler className='modalDiv' onOutsideClick={() => setShowImg(false)}>
                        <img src={image} alt='showImage' />
                    </OutsideClickHandler>
                </div>
            }
        </>
    )
}

export default MediaToggle;
