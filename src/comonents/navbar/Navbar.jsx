import React, { useState } from 'react'
import './navbar.css'
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const Navbar = () => {

    const [toggle,setToggle] = useState(false);
    const [sideBar,setSideBar] = useState(false)
    console.log(toggle);

    return (
        <div className="navbar">
            <div className='navabarLogo'>
                <img src={PF + 'logo.png'} alt="Thrifty logo" className='expandableLogo' />
                <div>THRIFTY AI</div>
            </div>
            <ul className={`navbarElements ${sideBar? '' : 'sideBarHide'}`}>
                <li className={`nav-item ${sideBar? '' : 'nav-item-slide'}`}>HOME</li>
                <li className={`nav-item ${sideBar? '' : 'nav-item-slide'}`}>TECHNOLOGY</li>
                <li className={`nav-item ${sideBar? '' : 'nav-item-slide'}`}>CONTACT US</li>
                <li className={`nav-item ${sideBar? '' : 'nav-item-slide'}`}>BLOGS</li>
            </ul>
            
            {toggle? null :
    
            <div className='sideDrawer'>
                <button className='toggleButton' onClick = {() => {setToggle(false); setSideBar(!sideBar)}}>
                    <div className="toggleButtonLine"></div>
                    <div className="toggleButtonLine"></div>
                    <div className="toggleButtonLine"></div>
                </button>
            </div>
            }
        </div>
    )
}

export default Navbar
