import './App.css';
import About from './components/about-me/About';
import Contact from './components/contact-me/Contact';
import Home from './components/home/Home';
import Navbar from "./components/navbar/Navbar";
import Project from './components/project/Project';
import { HashLink } from "react-router-hash-link";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
    return (
        < div className="App" >
            <Router>
                <Navbar />
                <Home />
                <About />
                <Project />
                <Contact />
                <div className='top'>
                    <HashLink to="#top"><ArrowDropUpIcon /></HashLink>
                </div>
            </Router>
        </div>
    );
}

export default App;