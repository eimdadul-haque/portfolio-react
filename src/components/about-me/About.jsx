import React from 'react';
import "./About.css";
import About_photo from "../../asset/About.JPG";
import { Button } from '@mui/material';
import { HashLink as Link } from "react-router-hash-link"

export default function About() {
    return (
        <div className='container mt-5 mb-5' id='about'>
            <div className='mt-3'>
            </div>
            <div className='about-container mt-4'>
                <div className='about-photo-container shadow'>
                    <img src={About_photo} className="about-photo" />
                </div>
                <div className='about-text-container shadow'>
                    <div className='about-desc'>
                        My name is Eimdadul Haque and I am from the district of Tangail. I completed my graduation from Daffodil International University and my department was Computer Science & Engineering. I’m a full stack developer. In past few months I have done some personal project. Basically, I use ReactJS for frontend application and .Net Core for backend api.
                    </div>
                    <div className='about-highlight mt-5'>
                        <h5 >Here are few highlights: </h5>
                        <div className='text-group'>
                            <ul>
                                <li>.Net Core MVC, API & SignalR .</li>
                                <li>React & Redux.</li>
                                <li>HTML, CSS, DOM, JavaScript & Ajax.</li>
                                <li>OOP, Design Pattern & SOLID .</li>
                                <li>Database, Data Structure & Algorithm.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='btn-group-custom'>
                        <Link smooth to="#contact">
                            <Button variant="contained" color="secondary">Hire Me</Button>
                        </Link>
                        <Button variant="contained" color="error">Resume</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
