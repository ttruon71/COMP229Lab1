/*
Author: Thomas Truong
File: Contact.js
Student ID: 301371386
Date: Oct 1 2024
*/

import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="contactHeader">Contact Me</h1>
            <span className="contactInfo">Thomas Truong<br />ttruon71@my.centennialcollege.ca<br />123-456-7890</span>
            <form className="contactForm">
                <input type="text" className="contactName" placeholder='Your Name' />
                <input type="email" className="contactEmail" placeholder='Your Email' />
                <textarea className="contactMessage" name="message"rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitButton">Submit</button>
            </form>
        </div>
    )
}

export default Contact