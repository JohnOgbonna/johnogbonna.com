import html5_logo from '../../assets/logos/html5_logo.svg';
import javascript_logo from '../../assets/logos/javascript_logo.svg'
import nodejs_logo from '../../assets/logos/nodejs_logo.svg';
import postgresql_logo from '../../assets/logos/postgresql_logo.svg';
import react_logo from '../../assets/logos/react_logo.svg';
import sass_logo from '../../assets/logos/sass_logo.svg';
import resume from '../../assets/documents/resume.pdf';
import { useState } from 'react';
import scrollArrow from '../../tools/other/scroll_arrow.svg'

let languages = [
    {
        name: 'HTML5',
        image: html5_logo,
        url: null,
        description: 'I am well versed in the use of HTML to build the layout of custom webpages from scratch. I have used HTML and HTML-like frameworks for personal and professional Web Applications'
    },
    {
        name: 'Javascript',
        image: javascript_logo,
        url: 'https://www.javascript.com/',
        description: 'JavaScript has been a valuable tool in my software career. I have used it for personal projects as well as professionally. I am accustomed to the many benefits (and quirks) to the language and am experienced with several JS frameworks such as React and Node JS'
    },
    {
        name: 'React',
        image: react_logo,
        url: 'https://reactjs.org/',
        description: 'React is perhaps my favourite front-end Web Application Development framework. I have used it in personal projects and also to make this website! From state, to props, to React Hooks, I am well versed in the framework and enjoy using it often!'
    },
    {
        name: 'Node',
        image: nodejs_logo,
        url: 'https://nodejs.org/en/',
        description: 'For the server side of things, I prefer to use Node JS. I have used it for personal projecs as well as for professional projects. Node JS is very convenient due to the numerous plugins and several possible use scenarios'
    },
    {
        name: 'Sass',
        image: sass_logo,
        url: 'https://sass-lang.com/',
        description: 'Using Sass (SCSS), my prefered CSS extension, I am capable of website styling and design. I have used Sass (and by extension CSS) to create modern UI designs and custom stylings'
    },
    {
        name: 'Postgresql',
        image: postgresql_logo,
        url: 'https://www.postgresql.org/',
        description: 'Professionally, I have used Postgresql to maintain and alter several live databases. I am well versed in SQL queries and the use of SQL for data organization and information storage'

    },
]

function Skills(props) {
    let [largeViewIndex, setlargeViewIndex] = useState(1)
    return (
        <div className="Skills" id="section">
            <h2 className={`section_header${props.theme.color}`}>Skills</h2>
            <h3 className={`section_subheader${props.theme.color}`} id='Web Development'>Web Development</h3>
            <div className="section" id={`programingLanguages${props.darkMode ? 'Dark' : ''}`}>
                {languages.map((language, index) => {
                    return (
                        <div className="section_paragraph" id='skillsDisplay'>
                            <img src={language.image} alt='selected display' className = 'icon'onClick={() => {
                                setlargeViewIndex(index)
                            }} />
                        </div>)
                })
                }
            </div>
            { largeViewIndex > -1 ?
                <div className='skillsLargeView'>
                    <div className={`skillsLargeView_selector${props.darkMode ? 'Dark' : ''}`}>
                        {largeViewIndex - 1 > -1 ? <div className={`scrollArrowBackground${props.theme.color}`} onClick={() => {
                            setlargeViewIndex(largeViewIndex - 1)
                        }}><img className='scrollArrowLeft' alt='left arrow' src={scrollArrow} /></div> : null}
                        <a href={languages[largeViewIndex].url} className='skillsLargeViewLink' target="_blank" rel="noreferrer"><img className='skillsLargeViewImage' src={languages[largeViewIndex].image} alt='selected display' />
                        </a>
                        {largeViewIndex + 1 < languages.length ? <div className={`scrollArrowBackground${props.theme.color}`} onClick={() => {
                            setlargeViewIndex(largeViewIndex + 1)
                        }}><img className='scrollArrowRight' src={scrollArrow} alt='right arrow' /></div> : null}
                    </div>
                    <p className='skillsLargeViewDescription'>{languages[largeViewIndex].description}</p>
                </div>
                :
                null
            }

            <div className='section' id='skillsOther'>
                <div className='section_content' id='Other Skills/Experience'>
                    <h3 className={`section_subheader${props.theme.color}`}>Other Skills/Experience</h3>
                    <ul className="skills_list">
                        <li className="skill_list--name">Sales</li>
                        <li className="skill_list--name">Point of Sale/Retail</li>
                        <li className="skill_list--name">Data Entry (Microsoft Office)</li>
                    </ul>
                    <h4 className='resume'>Have a look at my resume <a className={`sectionLink${props.darkMode ? 'dark' : ''}`} href={resume} download='Resume'>Here!</a></h4>

                </div>
            </div>

        </div>
    )
}
export default Skills;
