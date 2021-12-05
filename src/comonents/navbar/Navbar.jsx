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
                <li className="nav-item">HOME</li>
                <li className="nav-item">TECHNOLOGY</li>
                <li className="nav-item">CONTACT US</li>
                <li className="nav-item">BLOGS</li>
            </ul>
        </div>
    )
}

export default Navbar
