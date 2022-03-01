import React from 'react'
import { AppBar, Container, Toolbar } from "@mui/material";

export default function Navbar() {
  return (
    <div>
        <AppBar position='static' color="primary" enableColorOnDark>
        <Toolbar></Toolbar>
        </AppBar>

    </div>
  )
}
