import React from 'react'
import ClaimDivs from '../claimDivs/ClaimDivs'

const data = [
    {caption: '24/7', body: 'Personalised Customer Support'},
    {caption: '25%', body: 'Decrease in AHT'},
    {caption: '50%', body: 'Cost Reduction'},
    {caption: '25%', body: 'Higher CSAT Score'}
]

const ClaimDivRows = () => {
        return (
            <div>
                {
                    data.map((key)=>{
                        <ClaimDivs caption= {key.caption} body = {key.body} />
                    })
                }
            </div>
        )
    }

export default ClaimDivRows;
