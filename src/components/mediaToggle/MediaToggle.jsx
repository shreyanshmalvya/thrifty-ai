import React from 'react'
import { useState } from 'react/cjs/react.development';

const MediaToggle = () => {
    const embedIDs = [];
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
                <YoutubeEmbed embedId={url} />
                <span className="next" onClick={next}><img src={nextButton} alt="" /></span>
            </div>
            <div className="captionTrayMediaToggle">
                <div className={`thumbnail ${key === 0 ? 'thumbnailactive' : ' '}`} onClick={() => swiper(0)}><img src={ } /></div>
                <div className={`thumbnail ${key === 1 ? 'thumbnailactive' : ' '}`} onClick={() => swiper(1)}><img src={ } /></div>
                <div className={`thumbnail ${key === 2 ? 'thumbnailactive' : ' '}`} onClick={() => swiper(2)}><img src={ } /></div>
                <div className={`thumbnail ${key === 3 ? 'thumbnailactive' : ' '}`} onClick={() => swiper(3)}><img src={ } /></div>
            </div>
            </div>

            <div className="eventConatiner">
                <img src = {} alt = '' />
                <img src = {} alt = '' />
                <img src = {} alt = '' />
                <img src = {} alt = '' />
                <img src = {} alt = '' />
            </div>

            {/* <div className="photoConatiner">
                <img src = {} alt = '' />
                <img src = {} alt = '' />
                <img src = {} alt = '' />
                <img src = {} alt = '' />
                <img src = {} alt = '' />
            </div> */}

        </div>
    )
}

export default MediaToggle
