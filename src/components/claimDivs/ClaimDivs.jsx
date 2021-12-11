import React from 'react'
import './claimDivs.css'

const ClaimDivs = (props) => {
    return (
        <>
            <div className='styledDivWrapper'>
                <div className='captionTxt'>{props.caption}</div>
                <div className="bodyTxt">{props.body}</div>
            </div>
            <div className="endingWrapper" />
        </>
    )
}

export default ClaimDivs;
