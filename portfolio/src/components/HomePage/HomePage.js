/*
Author: Thomas Truong
File: HomePage.js
Student ID: 301371386
Date: Oct 1 2024
*/
import React from "react";
import './HomePage.css'

const HomePage = () => {
    return (
        <section id="homepage">
            <div className="homepage">
                <span className="hello">Welcome,</span>
                <span className="name">I'm Thomas Truong,<br/>This is my portfolio!</span>
                <p className="missionStatement">I am currently a full-time student at Cetennial College and I'm in my 3rd semester<br />I'm hoping to learn a lot from this web development class and take those skills into the real world.</p>
            </div>
        </section>
    )
}

export default HomePage