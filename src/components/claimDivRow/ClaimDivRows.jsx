import React from 'react'
import ClaimDivs from '../claimDivs/ClaimDivs'
import "../claimDivRow/claimDivRows.css"

const data = [
    {caption: '24/7', body: 'Personalised Customer Support'},
    {caption: '25%', body: 'Decrease in AHT'},
    {caption: '50%', body: 'Cost Reduction'},
    {caption: '25%', body: 'Higher CSAT Score'}
]

const ClaimDivRows = () => {
        return (
            <div className='claimDivWrapper'>
                {data.map((item, index) => {
                    return <ClaimDivs key={index} caption={item.caption} body={item.body}/>
                })}
            </div>
        )
    }

export default ClaimDivRows;
