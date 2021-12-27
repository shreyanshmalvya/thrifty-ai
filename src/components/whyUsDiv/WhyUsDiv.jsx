import '../whyUsDiv/whyUsDiv.css';

export default function WhyUsDiv(props) {
    return (
        <div className='whyUsDivWrapper'>
            <div className="whyUsDivTop">
                <p>"{props.message}"</p>
            </div>
            <div className="whyUsDivBottom">
                <div>
                    <img src={props.displayPicture} alt="" />   
                    <p>{props.name}</p>
                </div>
                <div>
                    <img src={props.brandLogo} alt="" />
                </div>
            </div>
        </div>
    )
}
