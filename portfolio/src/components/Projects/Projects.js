/*
Author: Thomas Truong
File: Projects.js
Student ID: 301371386
Date: Oct 1 2024
*/

import React from 'react'
import './Projects.css'
import Project1 from '../../Assets/Project1.jpg'
import Project2 from '../../Assets/Project2.jpg'
import Project3 from '../../Assets/Project3.jpg'

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className="header">My Projects</h2>
            <div className="projectImages">
                <div className="projectContainer">
                    <img src={Project1} alt="Project 1" className="projectImg" />
                    <p>Project 1</p>
                    <p>Will Update When I have real projects</p>
                </div>
                <div className="projectContainer">
                    <img src={Project2} alt="Project 2" className="projectImg" />
                    <p>Project 2</p>
                    <p>Will Update When I have real projects</p>
                </div>
                <div className="projectContainer">
                    <img src={Project3} alt="Project 3" className="projectImg" />
                    <p>Project 3</p>
                    <p>Will Update When I have real projects</p>
                </div>
            </div>
        </section>
    )
}

export default Projects