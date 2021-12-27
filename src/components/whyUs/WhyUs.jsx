import '../whyUs/whyUs.css';
import WhyUsDiv from '../whyUsDiv/WhyUsDiv';
import adidas from "../../assets/adidas.png";
import goibibo from "../../assets/goibibo.png";
import birla from "../../assets/birla.png";
import person from "../../assets/person.png";
import logo from "../../assets/Logo.png";

export default function WhyUs() {
    return (
        <div className='whyUsWrapper'>
            <div className="whyUsTop">
                <div className="whyUsTopLeft">
                    <p>Why Us?</p>
                    <p>AN AI THAT PUTS YOUR CUSTOMER FIRST</p>
                    <p>​Digital Humans are a huge leap in brand and customer experience, combining the best of online and face-to-face interaction. They are the next generation human form of chatbots</p>
                </div>
                <div className="whyUsTopRight">
                    <div>
                        <p>Customer Engagement</p>
                        <hr />
                        <p>The way customer interacts with a brand matters a lot</p>
                        <p>71% prefer talking with a real human while 54% choose chatbots because it save time.</p>
                        <p>Al humans combine the efficiency of chatbots + Empathy, Engagement and personality of speaking with a real human.</p>
                    </div>
                    <div>
                        <p>Brand Promise</p>
                        <hr />
                        <p>The consistent good service is what a customer needs to stick longer with your brand but</p>
                        <p>"57% Indian brands face challenge in maintaining consistent experience across multiple challenges."</p>
                        <p>Digital hurmans excel in fanatical support to customer that builds brand promise. Brand promise brings consistent identity which induces recall value. And on memorable recall value customers comes again to your brand. With this kind of support and experience, Al humans ensure customer loyalty.</p>
                    </div>
                    <div>
                        <p>Web 5.0 UI</p>
                        <hr />
                        <p></p>
                        <p>"44% users find product search and navigation frustrating while 46% don't transact due to unanswered FAQs"</p>
                        <p>Al humans give unique interactive Ul and provide information 95% faster compared to traditional search.</p>
                    </div>
                </div>    
            </div>
            <div className="whyUsBottom">
                <div className="whyUsBottomLeft">
                    <img src={logo} alt="" />
                </div>
                <div className="whyUsBottomRight">
                    <div className="carouselDesktop">
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
