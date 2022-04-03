import React from 'react'
import "./Navbar.css"
import { AppBar, Container, Toolbar } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
export default function Navbar() {
  return (
    <div className='nav-container'>
      <div className='nav-link-container'>
        <div>
          <Link className='link' smooth to="#home">Home</Link>
        </div>
        <div>
          <Link className='link' smooth to="#about">About</Link>
        </div>
        <div>
          <Link className='link' smooth to="#project">Project</Link>
        </div>
        <div>
          <Link className='link' smooth to="#contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}
