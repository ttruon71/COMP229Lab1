/*
Author: Thomas Truong
File: NavigationBar.js
Student ID: 301371386
Date: Oct 1 2024
*/
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
                <Link activeClass='active' to='homepage' spy={true} smooth={true} offset={-100} duration={500} className="MenuItem">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="MenuItem">About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="MenuItem">Projects</Link>
                <Link activeClass='active' to='services' spy={true} smooth={true} offset={-100} duration={500} className="MenuItem">Services</Link>
            </div>
            <button className="MenuButton" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImage} alt="Contact Logo" className="ContactImage" />
                Contact Me
            </button>
        </nav>
    )
}

export default NavigationBar