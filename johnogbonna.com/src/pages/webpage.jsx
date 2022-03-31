import { useState } from 'react';
import coverPhoto from '../assets/photos/self/coverphoto.JPG';
import './webpage.scss';
import NavBar from '../tools/navbar/navbar';
import NavBarMobile from '../tools/navbar/navbarMobile';
import Home from './sections/home';
import About from './sections/about';
import Skills from './sections/skills';
import Gallery from './sections/gallery';
import Contact from './sections/contact';


function Webpage(props) {
    let [section, setSection] = useState(props.section);
    let savedTheme = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : {};
    let [theme, setTheme] = useState({
        color: savedTheme.color ? savedTheme.color : 'Red',
        dark: savedTheme.dark ? savedTheme.dark : false,
    });
    function changeTheme(color, dark) {
        setTheme({ color: color, dark: dark })
        localStorage.setItem('theme', JSON.stringify({ color: color, dark: dark }))
    }
    let [scrollPosition, scrollPositionSet] = useState({
        About: null,
        Skills: null,
        Contact: null,

    })
    const setScrollPosition = (section, value) => {
        scrollPositionSet({
            ...scrollPosition,
            [section]: value
        })
        console.log(scrollPosition)
    }
    return (
        <div className="Webpage">
            <NavBarMobile
                changeSelection={setSection}
                section={section}
                theme={theme}
                changeTheme={changeTheme} />
            <img src={coverPhoto} className="coverPhoto" id="coverPhoto" />
            <NavBar changeSelection={setSection}
                theme={theme}
                changeTheme={changeTheme} />

            {section === "Home" ?
                <div className="displaySection">
                    <Home
                        theme={theme} />
                </div>
                :
                null}
            {section === "About" ?
                <div className="displaySection">
                    <About
                        scroll={scrollPosition.About}
                        setScrollPosition={setScrollPosition}
                        theme={theme} />

                </div>
                :
                null}

            {section === "Skills" ?
                <div className="displaySection">
                    <Skills
                        scroll={scrollPosition.Skills}
                        setScrollPosition={setScrollPosition}
                        theme={theme} />
                </div>
                :
                null}

            {section === "Gallery" ?
                <div className="displaySection">
                    <Gallery
                        scroll={scrollPosition.Skills}
                        setScrollPosition={setScrollPosition}
                        theme={theme} />
                </div>
                :
                null}

            {section === "Contact" ?
                <div className="displaySection">
                    <Contact
                        scroll={scrollPosition.Contact}
                        setScrollPosition={setScrollPosition}
                        theme={theme} />
                </div>
                :
                null}

        </div>
    );
}

export default Webpage;