import React, { useRef } from 'react'
import { TextField, Button } from "@mui/material";
import "./Contact.css";
import { LocationCity, Mail, Phone, Send } from '@mui/icons-material';
import emailjs from '@emailjs/browser';


export default function () {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_km6wwko', 'template_gmdez9e', form.current, 'eimdadulhaque@gmai.com')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact-container mt-5 mb-5' id="contact">
            <div className='container mt-5'>
                <div className='row mt-4'>
                    <div className='col-md-12 col-lg-6 col-sm-12 mb-5'>
                        <h1 className='discuss'>Let's discuss your project.</h1>
                        <div className='mt-5'>
                            <p className=''><Phone /> +08801863634374</p>
                            <p className='mt-3'><Mail /> eimdadulhaque@gmail.com</p>
                            <p className='mt-3'><LocationCity /> Mohammadpur, Dhaka</p>
                            <div className='icon-contact mt-5'>
                                <a href='#' className='icon-container' style={{ backgroundColor: "#3b5998" }}>
                                    <i className="fa-brands fa-facebook-square icon-cls"></i>
                                </a>
                                <a className='icon-container' style={{ backgroundColor: "#007bb6" }} href='https://www.linkedin.com/in/eimdadul-haque/'>
                                    <i className="fa-brands fa-linkedin icon-cls"></i>
                                </a>
                                <a className='icon-container' style={{ backgroundColor: "#bc2a8d" }} href='https://www.instagram.com/eimdadul_haque_rumi/'>
                                    <i className="fa-brands fa-instagram icon-cls"></i>
                                </a>
                                <a className='icon-container' style={{ backgroundColor: "#00aced" }} href='#'>
                                    <i className="fa-brands fa-twitter icon-cls"></i>
                                </a>
                                <a className='icon-container' style={{ backgroundColor: "#3b5998" }} href='#'>
                                    <i className="fa-brands fa-github icon-cls"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className='col-md-12 col-lg-6 col-sm-12 '>
                        <p className='text'><b>What’s your story? </b> Write me here .</p>
                        <div className='row input-group'>
                            <div className='col-sm-12 col-md-6'>
                                <TextField fullWidth id="standard-basic" label="Name" variant="standard" name="name" />
                            </div>
                            <div className='col-sm-12 col-md-6 mt-3'>
                                <TextField fullWidth id="standard-basic" label="Email" variant="standard" name="email" />
                            </div>
                        </div>
                        <div className='mt-3 text-field'>
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                fullWidth
                                variant="standard"
                                name="message"
                            />
                        </div>
                        <div className='mt-3'>
                            <Button type="submit" variant="contained" endIcon={<Send />} >
                                Send
                            </Button>
                        </div>

                        <div className='icon-contact-bottm mt-5 mb-5'>
                            <a href='#' className='icon-container' style={{ backgroundColor: "#3b5998" }}>
                                <i className="fa-brands fa-facebook-square icon-cls"></i>
                            </a>
                            <a className='icon-container' style={{ backgroundColor: "#007bb6" }} target="_blank" href='https://www.linkedin.com/in/eimdadul-haque/'>
                                <i className="fa-brands fa-linkedin icon-cls"></i>
                            </a>
                            <a className='icon-container' style={{ backgroundColor: "#bc2a8d" }} target="_blank" href='https://www.instagram.com/eimdadul_haque_rumi/'>
                                <i className="fa-brands fa-instagram icon-cls"></i>
                            </a>
                            <a className='icon-container' style={{ backgroundColor: "#00aced" }} href='#'>
                                <i className="fa-brands fa-twitter icon-cls"></i>
                            </a>
                            <a className='icon-container' style={{ backgroundColor: "#3b5998" }} href='#'>
                                <i className="fa-brands fa-github icon-cls"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
