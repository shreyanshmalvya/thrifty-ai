import React from 'react'
import './claimDivs.css'
// import claimDiv1 from "./styledDivs/styledDivTop.svg"
import claimDiv2 from "./styledDivs/styledDivFooter.svg"


const ClaimDivs = (props) => {
    return (
        <div className="claimDivWrapper">
            {/* <div className="claimDivStartingWrapper"><img src={claimDiv1} alt="" /></div> */}
            <div className='styledDivWrapper'>
                <img className="claimImg" src={props.img} alt="" />
                <p className="bodyTxt">{props.body}</p>
            </div>
            <div className="claimDivEndingWrapper" >
                <img src={claimDiv2} alt="" />
            </div>
        </div>
    )
}

export default ClaimDivs;
