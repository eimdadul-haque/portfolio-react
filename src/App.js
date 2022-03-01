import './App.css';
import About from './components/about-me/About';
import Contact from './components/contact-me/Contact';
import Home from './components/home/Home';
import Navbar from "./components/navbar/Navbar";
import Project from './components/project/Project';
function App() {
    return (
        < div className="App" >
            <Navbar />
            <Home />
            <About />
            <Project />
            <Contact />
        </div>
    );
}

export default App;