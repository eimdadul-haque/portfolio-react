import React from 'react';
import Typical from "react-typical";
import { Button } from "@mui/material";
import Eimadadul_img from "../../asset/Eimdadul.jpg"
import Shape from "../../asset/shape-bg.png"
import { HashLink as Link } from "react-router-hash-link"
import "./Home.css"
export default function Home() {
    return (
        <div className='bg-dark' id='home' >
            <div className='container text-center'>
                <div className='row'>

                    <div className='col-lg-6 col-md-12 cox'>
                        <div className='profile-photo-container cox'>
                            <img className='profile-photo' src={Eimadadul_img} />
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-12 cox text-white'>
                        <div className=''>
                            <div className='cox'>
                                <a target="_blank" href='#' className='icon-container' style={{ backgroundColor: "#3b5998" }}>
                                    <i className="fa-brands fa-facebook-square icon-cls"></i>
                                </a>
                                <a className='icon-container' style={{ backgroundColor: "#007bb6" }} target="_blank" href='https://www.linkedin.com/in/eimdadul-haque/'>
                                    <i className="fa-brands fa-linkedin icon-cls"></i>
                                </a>
                                <a className='icon-container' style={{ backgroundColor: "#bc2a8d" }} target="_blank" href='https://www.instagram.com/eimdadul_haque_rumi/'>
                                    <i className="fa-brands fa-instagram icon-cls"></i>
                                </a>
                                <a className='icon-container' style={{ backgroundColor: "#00aced" }} target="_blank" href='#'>
                                    <i className="fa-brands fa-twitter icon-cls"></i>
                                </a>
                                <a className='icon-container' style={{ backgroundColor: "#3b5998" }} target="_blank" href='#'>
                                    <i className="fa-brands fa-github icon-cls"></i>
                                </a>
                            </div>

                            <div className='text-white'>
                                <span className='primery-text'>
                                    Hello, I'm <span className='highlited-text'>Eimdadul</span>
                                </span>
                            </div>

                            <div className=''>
                                <span className=''>
                                    <h1>
                                        <Typical
                                            steps={[
                                                "Fullstack Developer 💻",
                                                1000,
                                                ".Net Core Developer 🧋",
                                                1000,
                                                "React Developer 📱",
                                                1000
                                            ]}
                                            loop={Infinity}
                                            wrapper="p"
                                        />
                                    </h1>
                                    <span className='profile-role-tagline'>
                                        I want to make things that make a difference
                                    </span>
                                </span>
                            </div>

                            <div className='pt-5'>
                                <span className='p-1'>
                                    <Link smooth to="#contact">
                                        <Button variant="contained" color="warning" >
                                            Hire Me
                                        </Button>
                                    </Link>
                                </span>
                                <span className='p-1'>
                                    <a href='Eimdadul_Resume.pdf' download="Eimdadul_Resume.pdf">
                                        <Button variant="outlined" color="error">
                                            Get Resume
                                        </Button>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div >
            <img className='shape-img mt-5' src={Shape} />
        </div>
    )
}


