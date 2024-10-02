/*
Author: Thomas Truong
File: Services.js
Student ID: 301371386
Date: Oct 1 2024
*/

import React from 'react'
import './Services.css'
import Service1 from '../../Assets/Service1.jpg'
import Service2 from '../../Assets/Service2.jpg'
import Service3 from '../../Assets/Service3.jpg'

const Services = () => {
    return (
        <section id='services'>
            <h2 className="header">Services</h2>
            <div className="serviceImages">
                <div className="servicesContainer">
                    <img src={Service1} alt="Service 1" className="serviceImg" />
                    <p>Mobile App Development</p>
                </div>
                <div className="servicesContainer">
                    <img src={Service2} alt="Service 2" className="serviceImg" />
                    <p>Web Development</p>
                </div>
                <div className="servicesContainer">
                    <img src={Service3} alt="Service 3" className="serviceImg" />
                    <p>General Programming</p>
                </div>
            </div>
        </section>
    )
}

export default Services