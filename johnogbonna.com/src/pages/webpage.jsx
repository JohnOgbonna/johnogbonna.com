import { useState } from 'react';
import coverPhoto from '../assets/photos/self/coverphoto.JPG';
import './webpage.scss';
import NavBar from '../tools/navbar/navbar';
import Home from './sections/home'; 
import About from './sections/about';
import Skills from './sections/skills';
import Contact from './sections/contact'; 


function Webpage() { 
    const [section, setSection] = useState("Home"); 
    const changeSection = function(selection){ 
        setSection(selection); 
        console.log(selection)
    };
    return (
        <div className="Webpage">
            <img src={coverPhoto} className="coverPhoto" id="coverPhoto" />
            <NavBar changeSelection = {setSection}/>
            <div className="displaySection">
                {section === "Home" ?
                    <Home /> :
                    null}
            </div> 
            <div className="displaySection">
                {section === "About" ?
                    <About /> :
                    null}
            </div> 
            <div className="displaySection">
                {section === "Skills" ?
                    <Skills /> :
                    null}
            </div>
            <div className="displaySection">
                {section === "Contact" ?
                    <Contact /> :
                    null}
            </div>
        </div>
    );
}

export default Webpage;