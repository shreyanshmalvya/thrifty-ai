import React from 'react'
import './navbar.css'
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='navabarLogo'>
                <img src={PF + 'logo.png'} alt="Thrifty logo" className='expandableLogo' />
                <div>Thrifty AI</div>
            </div>
            <ul className='navbarElements'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Technology</a></li>
                <li><a href='#'>Contact Us</a></li>
                <li><a href='#'>Blogs</a></li>
            </ul>
        </div>
    )
}

export default Navbar
