import React from 'react'
import ClaimDivs from '../claimDivs/ClaimDivs'
import "../claimDivRow/claimDivRows.css"
import divImg1 from "../../assets/divImg1.png"
import divImg2 from "../../assets/divImg2.png"
import divImg3 from "../../assets/divImg3.png"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
    {img: divImg1, body: 'Personalised Customer Support'},
    {img: divImg2, body: 'Decrease in AHT'},
    {img: divImg3, body: 'Cost Reduction'},
    {img: divImg2, body: 'Higher CSAT Score'}
]

const ClaimDivRows = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div data-aos="fade-up" data-aos-duration="900" className='claimDivRowWrapper'>
            {data.map((item, index) => {
                return <ClaimDivs key={index} img={item.img} body={item.body}/>
            })}
        </div>
    )
}

export default ClaimDivRows;
