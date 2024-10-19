import './section_styles.scss'
import aboutMePic from '../../assets/photos/self/self_photo3.jpg';
import nodeLogo from '../../assets/logos/nodejs_logo.svg';
import reactLogo from '../../assets/logos/react_logo.svg';
import javascriptLogo from '../../assets/logos/javascript_logo.svg';
import sassLogo from '../../assets/logos/sass_logo.svg';
import postgresql_logo from '../../assets/logos/postgresql_logo.svg';
import html5Logo from '../../assets/logos/html5_logo.svg';
import galleryPhoto1 from '../../assets/photos/family/fam_photo1.jpg';
import galleryPhoto2 from '../../assets/photos/self/self_photo1.jpg';
import galleryPhoto3 from '../../assets/photos/grad/grad_photo1.jpg';
import galleryPhoto4 from '../../assets/photos/family/fam_photo6.jpg';
import gmailLogo from '../../assets/logos/gmail_logo.svg';
import linkedinLogo from '../../assets/logos/linkedin_logo.svg';
const logos = [javascriptLogo, reactLogo, nodeLogo, html5Logo, postgresql_logo, sassLogo
]
function Home(props) {
    return (
        <div className="Home" id="section">
            <div className="section" id='About Me'>
                <div className="section_text" id='aboutText'>
                    <h3 className={`section_header${props.theme.color}`}>About Me</h3>
                    <p className="section_paragraph">
                        <span className="section_paragraph-greeting">Hi there!</span> My name is John Ogbonna, and I'd like to tell you about myself! I'm a full-stack web developer on the weekdays, and several other things after hours 😎. I'm currently living in Calgary, Alberta. I have lots more to show and tell you, <a className={`sectionLink${props.darkMode ? 'dark' : ''}`} href='/About'>learn more about me here!</a>
                    </p>
                </div>
                <div className="sectionImages">
                    <div className="sectionImageWrapper">
                        <img className="sectionImage" src={aboutMePic} id='aboutImage' alt='bio display' />
                    </div>
                </div>
            </div>
            <div className="section" id='Skills'>
                <div className="section_text" id='skillsText'>
                    <h3 className={`section_header${props.theme.color}`}>Skills</h3>
                    <p className="section_paragraph">
                        I'm a Full stack Web Developer, proficient with several development frameworks and languages! <a className={`sectionLink${props.darkMode ? 'dark' : ''}`} href='/Skills'>learn more about my skills here!</a>
                    </p>
                </div>
                <div className="sectionImages" id={`logos${props.darkMode ? 'Dark' : ''}`}>
                    {
                        logos.map(logo => {
                            return (
                                <img className="sectionImage" id='logo' src={logo} alt='logo' />
                            )
                        })
                    }
                </div>

            </div>
            <div className="section" id='Gallery'>
                <div className="section_text">
                    <h3 className={`section_header${props.theme.color}`}>Gallery</h3>
                    <p className="section_paragraph">
                        There have been many interesting, fun, and hilarious memories I've captured! <a className={`sectionLink${props.darkMode ? 'dark' : ''}`} href='/Gallery'>View the gallery!</a>
                    </p>
                </div>
                <div className="sectionImages" id='GalleryImages'>
                    <img className="sectionImage" id='GalleryPic' src={galleryPhoto1} alt='gallery display' />
                    <img className="sectionImage" id='GalleryPic' src={galleryPhoto2} alt='gallery display' />
                    <img className="sectionImage" id='GalleryPic' src={galleryPhoto3} alt='gallery display' />
                    <img className="sectionImage" id='GalleryPic' src={galleryPhoto4} alt='gallery display' />
                </div>
            </div>
            <div className="section" id={`Contact${props.theme.color}`}>
                <div className="section_text" id='Contact'>
                    <h3 className={`section_header${props.theme.color}`} id='ContactHeader' >Contact Me!</h3>
                    <p className="section_paragraph">
                        Wanna get in touch? <a className={`sectionLink${props.darkMode ? 'dark' : ''}Contact`} href='/Contact'> Contact me!</a>
                    </p>
                </div>
                <div className="sectionImages" id='contactLogos'>
                    <img className="sectionImage" id='contactLogo' src={linkedinLogo} alt='linkedin logo' />
                    <img className="sectionImage" id='contactLogo' src={gmailLogo} alt='gmail logo' />
                </div>
            </div>


        </div>
    );
}

export default Home;