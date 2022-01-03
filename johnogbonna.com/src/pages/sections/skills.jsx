import gmail_logo from '../../assets/logos/gmail_logo.svg';
import html5_logo from '../../assets/logos/html5_logo.svg';
import javascript_logo from '../../assets/logos/javascript_logo.svg'
import nodejs_logo from '../../assets/logos/nodejs_logo.svg';
import postgresql_logo from '../../assets/logos/postgresql_logo.svg';
import react_logo from '../../assets/logos/react_logo.svg';
import sass_logo from '../../assets/logos/sass_logo.svg'; 
import resume from '../../assets/documents/Resume2021.pdf';

let languages = [
    {
        name: 'HTML5',
        image: html5_logo, 
        url: null
    },
    {
        name: 'Javascript',
        image: javascript_logo, 
        url: 'https://www.javascript.com/'
    },
    {
        name: 'React',
        image: react_logo, 
        url: 'https://reactjs.org/'
    },
    {
        name: 'Node',
        image: nodejs_logo, 
        url: 'https://nodejs.org/en/'
    },
    {
        name: 'Sass',
        image: sass_logo, 
        url: 'https://sass-lang.com/'
    },
]

function Skills() {
    return (
        <div className="Skills" id="section">
            <h2 className="mainSectionHeader">Skills</h2>
            <div className="section" id="programmingLanguages">
                <div className="section_content">
                    <h3 className="section_header">Programming Languages</h3>
                    {languages.map(language => {
                        return (
                            <div className="section_paragraph">
                                <h4 className="section_paragraph-header">{language.name}</h4>
                                <p className="section_paragraph-text">
                                </p>
                                <a href = {language.url} target="_blank"><img src={language.image}/></a>
                            </div>)
                    })
                    }

                </div>
                <div className='section'>
                    <div className='section_content'>
                    <h3 className="section_header">Other Skills/Experience</h3>
                    <ul className="skills_list">
                        <li className="skill_list--name">Sales</li> 
                        <li className="skill_list--name">Point of Sale/Retail</li> 
                        <li className="skill_list--name">Data Entry (Microsoft Office</li>
                    </ul> 
                    <h4 className = 'resume'>Have a look at my resume <a classname = 'resume_link' href = {resume} download= 'Resume'>Here!</a></h4>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;
