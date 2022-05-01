import { useState, useEffect } from 'react';
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
        dark: savedTheme.dark ? savedTheme.dark : 'Auto',
    });
    function changeTheme(color, dark) {
        setTheme({ color: color, dark: dark })
        localStorage.setItem('theme', JSON.stringify({ color: color, dark: dark }))
    }
    let [darkMode, setDarkMode] = useState(
        (savedTheme.dark === 'Auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) || savedTheme.dark === true ? true : false
    )
    useEffect(() => {
        if (savedTheme.dark === 'Auto' && window.matchMedia('(prefers-color-scheme: dark)').matches || savedTheme.dark === true) {
            setDarkMode(true);
        }
        else {
            setDarkMode(false);
        }
    }, [theme])

    return (
        <div className={`Webpage${darkMode ? 'Dark' : ''}`}>
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
                <div className={`displaySection${darkMode ? 'Dark' : ''}`}>
                    <Home
                        theme={theme}
                        darkMode={darkMode} />
                </div>
                :
                null}
            {section === "About" ?
                <div className={`displaySection${darkMode ? 'Dark' : ''}`}>
                    <About
                        theme={theme}
                        darkMode={darkMode} />

                </div>
                :
                null}

            {section === "Skills" ?
                <div className={`displaySection${darkMode ? 'Dark' : ''}`}>
                    <Skills
                        theme={theme}
                        darkMode={darkMode} />
                </div>
                :
                null}

            {section === "Gallery" ?
                <div className={`displaySection${darkMode ? 'Dark' : ''}`}>
                    <Gallery
                        theme={theme}
                        darkMode={darkMode} />
                </div>
                :
                null}

            {section === "Contact" ?
                <div className={`displaySection${darkMode ? 'Dark' : ''}`}>
                    <Contact
                        theme={theme}
                        darkMode={darkMode} />
                </div>
                :
                null}

        </div>
    );
}

export default Webpage;