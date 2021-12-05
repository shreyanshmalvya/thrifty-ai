import React from 'react'
import './navbar.css'
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='navabarLogo'>
                <img src={PF + 'logo.png'} alt="Thrifty logo" className='expandableLogo' />
                <div>THRIFTY AI</div>
            </div>
            <ul className='navbarElements'>
                <li><a href='#'>HOME</a></li>
                <li><a href='#'>TECHNOLOGY</a></li>
                <li><a href='#'>CONTACT US</a></li>
                <li><a href='#'>BLOGS</a></li>
            </ul>
        </div>
    )
}

export default Navbar
