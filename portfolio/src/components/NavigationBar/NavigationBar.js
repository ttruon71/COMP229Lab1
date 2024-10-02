import React from 'react'
import './NavigationBar.css'
import logo from '../../Assets/Logo.jpg'
import contactImage from '../../Assets/Contact.jpg'
import { Link } from 'react-scroll'

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="Menu">
                <Link className="MenuItem">Home</Link>
                <Link className="MenuItem">About</Link>
                <Link className="MenuItem">Projects</Link>
                <Link className="MenuItem">Services</Link>
            </div>
            <button className="MenuButton">
                <img src={contactImage} alt="Contact Logo" className="ContactImage" />
                Contact Me
            </button>
        </nav>
    )
}

export default NavigationBar