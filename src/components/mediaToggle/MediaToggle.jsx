import React from 'react'
import { useState } from 'react/cjs/react.development';

const MediaToggle = () => {
    const videos = [];
    const [video, setVideo] = useState(videos[0]);

    

    return (
        <div>
            <div className="optionTrayMediaToggle">
                <div className="toggleOptions">Videos</div>
                <div className="toggleOptions">Screen</div>
                <div className="toggleOptions">Concept Art</div>
            </div>

        </div>
    )
}

export default MediaToggle
