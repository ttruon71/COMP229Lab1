/*
Author: Thomas Truong
File: About.js
Student ID: 301371386
Date: Oct 1 2024
*/
import React from 'react';
import './About.css';
import Self from '../../Assets/Self.jpg'

const About = () => {
    return(
        <section id='about'>
            <span className='AboutPara'>Hi I'm Thomas Truong,<br /> I live in Ontario and I'm a full-time student at Centennial College<br />I enjoy reading and going to the gym<br /><a href="../../Assets/ThomasTruong_Resume.pdf" target='_blank' rel='noopener noreferrer'>Here</a> you can find my resume</span>
            <div>
                <img src={Self} alt="Self Picture" className="Self" />
            </div>
        </section>
    );
}

export default About