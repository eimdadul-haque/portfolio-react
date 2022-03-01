import React from 'react';
import "./About.css";
import About_photo from "../../asset/About.JPG";
import { Button } from '@mui/material';

export default function About() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='mt-3'>
            </div>
            <div className='about-container mt-4'>
                <div className='about-photo-container shadow'>
                    <img src={About_photo} className="about-photo" />
                </div>
                <div className='about-text-container shadow'>
                    <div className='about-desc'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil consequatur aperiam corporis veniam amet? Esse earum illo ducimus minus eius, quasi vitae possimus rem! Numquam, tempora. Perferendis veniam vitae unde optio facere ut tempora minus sapiente, architecto accusantium amet! 
                    </div>
                    <div className='about-highlight mt-5'>
                        <h5 >Here are few highlights: </h5>
                        <div className='text-group'>
                            <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='btn-group-custom'>
                        <Button variant="contained" color="secondary">Hire Me</Button>
                        <Button variant="contained" color="error">Resume</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
