import '../whyUs/whyUs.css';
import WhyUsDiv from '../whyUsDiv/WhyUsDiv';
import adidas from "../../assets/adidas.png";
import goibibo from "../../assets/goibibo.png";
import birla from "../../assets/birla.png";
import person from "../../assets/person.png";
import logo from "../../assets/Logo.png";
import whyUsDesign from "../../assets/whyUsDesign.png"
import { useState } from 'react';
import next from "../../assets/Icons/next.png";

export default function WhyUs() {
    const p1 = ["Customer Engagement", "Brand Promise", "Web 5.0 UI"];
    const p2 = ["The way customer interacts with a brand matters a lot", "The consistent good service is what a customer needs to stick longer with your brand but", ""];
    const p3 = ["71% prefer talking with a real human while 54% choose chatbots because it save time.", "57% Indian brands face challenge in maintaining consistent experience across multiple challenges.", "44% users find product search and navigation frustrating while 46% don't transact due to unanswered FAQs"];
    const p4 = ["Al humans combine the efficiency of chatbots + Empathy, Engagement and personality of speaking with a real human.", "Digital hurmans excel in fanatical support to customer that builds brand promise. With this kind of support and experience, Al humans ensure customer loyalty.", "Al humans give unique interactive Ul and provide information 95% faster compared to traditional search."];

    const [card, setCard] = useState(0);
    const [backCard, setBackCard] = useState(1);
    const [flipped, setFlipped] = useState(false);

    const flip = () => {
        setTimeout(() => { !flipped && setCard(card === 2 ? 0 : card+2); }, 1800);
        // setTimeout(() => { flipped && setBackCard(backCard === 2 ? 0 : backCard+2); }, 1800);

        setFlipped(!flipped);

    }

    return (
        <div className='whyUsWrapper'>
            <div className="whyUsTop">
                <div className="whyUsTopLeft">
                    <p>Why Us?</p>
                    <p>AN AI THAT PUTS YOUR CUSTOMER FIRST</p>
                    <p>​Digital Humans are a huge leap in brand and customer experience, combining the best of online and face-to-face interaction. They are the next generation human form of chatbots</p>
                </div>
                <div className="whyUsTopRight">
                    <div className={flipped?'flipCard card':'card'} >
                        <div className="front">
                            <div className="cardContent">
                                <p>{p1[card]}</p>
                                <p>{p2[card]}</p>
                                <p>{p3[card]}</p>
                                <p>{p4[card]}</p>
                            </div>
                            <div className="cardNextButton">
                                <img src={next} alt="logo" onClick={()=>flip()}/>
                            </div> 
                        </div>
                        <div className="back">
                            <div className="cardContent">
                                <p>{p1[backCard]}</p>
                                <p>{p2[backCard]}</p>
                                <p>{p3[backCard]}</p>
                                <p>{p4[backCard]}</p>
                            </div>
                            <div className="cardNextButton">
                                <img src={next} alt="logo" onClick={()=>flip()}/>
                            </div> 
                        </div>
                    </div>
                </div>    
            </div>
            <div className="whyUsBottomWrapper">
                <img className='whyUsDesign' src={whyUsDesign} alt="" />
                <div className="whyUsBottom">
                    <div className="carouselDesktop">
                        <div className="whyUsThriftyLogo">
                            <img src={logo} alt="" />
                        </div>
                        <WhyUsDiv message="Hyper personalization is next big thing in our mind" name="Abhishek Sinha, Head CRM Adidas, India" brandLogo={adidas} displayPicture={person}/>
                        <WhyUsDiv message="Wow moments locks the customer, Once you give it you have your customer" name="Abhinav Narula, Head of Brand, Goibibo" brandLogo={goibibo} displayPicture={person}/>
                        <WhyUsDiv message="Future CX is about figuring out and experimenting what works, where technology plays a key role" name="Namrita Mahindro, CDO, Aditya Birla Group" brandLogo={birla} displayPicture={person}/>
                    </div>
                    <div class="slider">
                        <div class="slide-track">
                            <div class="slide">
                                <WhyUsDiv message="Hyper personalization is next big thing in our mind" name="Abhishek Sinha, Head CRM Adidas, India" brandLogo={adidas} displayPicture={person}/>
                            </div>
                            <div class="slide">
                                <WhyUsDiv message="Wow moments locks the customer, Once you give it you have your customer" name="Abhinav Narula, Head of Brand, Goibibo" brandLogo={goibibo} displayPicture={person}/>
                            </div>
                            <div class="slide">
                                <WhyUsDiv message="Future CX is about figuring out and experimenting what works, where technology plays a key role" name="Namrita Mahindro, CDO, Aditya Birla Group" brandLogo={birla} displayPicture={person}/>
                            </div>
                            <div class="slide">
                                <WhyUsDiv message="Hyper personalization is next big thing in our mind" name="Abhishek Sinha, Head CRM Adidas, India" brandLogo={adidas} displayPicture={person}/>
                            </div>
                            <div class="slide">
                                <WhyUsDiv message="Wow moments locks the customer, Once you give it you have your customer" name="Abhinav Narula, Head of Brand, Goibibo" brandLogo={goibibo} displayPicture={person}/>
                            </div>
                            <div class="slide">
                                <WhyUsDiv message="Future CX is about figuring out and experimenting what works, where technology plays a key role" name="Namrita Mahindro, CDO, Aditya Birla Group" brandLogo={birla} displayPicture={person}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
