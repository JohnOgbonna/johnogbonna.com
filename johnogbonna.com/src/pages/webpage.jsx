import { useState } from 'react';
import coverPhoto from '../assets/photos/self/coverphoto.JPG';
import './webpage.scss';
import NavBar from '../tools/navbar/navbar';
import Home from './sections/home';
import About from './sections/about';
import Skills from './sections/skills';
import Gallery from './sections/gallery';
import Contact from './sections/contact';


function Webpage() {
    const [section, setSection] = useState("Home");
    let [scrollPosition, scrollPositionSet] = useState({
        About: null,
        Skills: null,
        Contact: null,

    })
    const setScrollPosition = (section, value) => {
        scrollPositionSet({ 
            ...scrollPosition,
            [section] : value})
        console.log(scrollPosition)
    }
    return (
        <div className="Webpage">
            <img src={coverPhoto} className="coverPhoto" id="coverPhoto" />
            <NavBar changeSelection={setSection} />
            <div className="displaySection">
                {section === "Home" ?
                    <Home /> :
                    null}
            </div>
            <div className="displaySection">
                {section === "About" ?
                    <About
                        scroll={scrollPosition.About}
                        setScrollPosition={setScrollPosition} /> :
                    null}
            </div>
            <div className="displaySection">
                {section === "Skills" ?
                    <Skills
                        scroll={scrollPosition.Skills}
                        setScrollPosition={setScrollPosition} /> :
                    null}
            </div> 
            <div className="displaySection">
                {section === "Gallery" ?
                    <Gallery
                        scroll={scrollPosition.Skills}
                        setScrollPosition={setScrollPosition} /> :
                    null}
            </div>
            <div className="displaySection">
                {section === "Contact" ?
                    <Contact
                        scroll={scrollPosition.Contact}
                        setScrollPosition={setScrollPosition} /> :
                    null}
            </div>
        </div>
    );
}

export default Webpage;