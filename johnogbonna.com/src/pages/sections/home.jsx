import './section_styles.scss'
import aboutMePic from '../../assets/photos/self/self_photo3.jpg';
import nodeLogo from '../../assets/logos/nodejs_logo.svg';
import reactLogo from '../../assets/logos/react_logo.svg';
import galleryPhoto1 from '../../assets/photos/family/fam_photo1.jpg';
import galleryPhoto2 from '../../assets/photos/self/self_photo1.jpg';
import galleryPhoto3 from '../../assets/photos/grad/grad_photo1.jpg';
import galleryPhoto4 from '../../assets/photos/family/fam_photo6.jpg';
import gmailLogo from '../../assets/logos/gmail_logo.svg';
import linkedinLogo from '../../assets/logos/linkedin_logo.svg';
function Home() {
    return (
        <div className="Home">
            <div className="section">
                <div className="section_text">
                    <h3 className="section_header">About Me</h3>
                    <p className="section_paragraph">
                        <span className="section_paragraph-greeting">Hi there!</span> My name is John Ogbonna, and I'd like to tell you about myself! I'm a full-stack web developer on the weekdays, and several other things after hours 😎. I'm based in Ottawa, Ontario, but I'm living in Calgary, Alberta right now. I have lots more to show and tell you, <a className="sectionLink" href='/'>learn more about me here!</a>
                    </p>
                </div>
                <div className="sectionImages">
                    <img className="sectionImage" src={aboutMePic} />
                </div>
            </div>
            <div className="section">
                <div className="section_text">
                    <h3 className="section_header">Skills</h3>
                    <p className="section_paragraph">
                        I'm a Full stack Web Developer, proficient with several development frameworks and languages! <a className="sectionLink" href='/'>learn more about my skills here!</a>
                    </p>
                </div>
                <div className="sectionImages">
                    <img className="sectionImage" id='logo' src={nodeLogo} />
                    <img className="sectionImage" id='logo' src={reactLogo} />
                </div>

            </div>
            <div className="section">
                <div className="section_text">
                    <h3 className="section_header">Gallery</h3>
                    <p className="section_paragraph">
                        There have been many interesting, fun, and hilarious memories I've captured! <a className="sectionLink" href='/'>View the gallery!</a>
                    </p>
                </div>
                <div className="sectionImages">
                    <img className="sectionImage" id='galleryPic1' src={galleryPhoto1} alt='gallery picture' />
                    <img className="sectionImage" id='galleryPic2' src={galleryPhoto2} alt='gallery picture' />
                    <img className="sectionImage" id='galleryPic3' src={galleryPhoto3} alt='gallery picture' />
                    <img className="sectionImage" id='galleryPic4' src={galleryPhoto4} alt='gallery picture' />
                </div>
            </div>
            <div className="section">
                <div className="section_text">
                    <h3 className="section_header">Contact Me!</h3>
                    <p className="section_paragraph">
                        Wanna get in touch? <a className="sectionLink" href='/'> Contact me!</a>
                    </p>
                </div>
                <div className="sectionImages">
                    <img className="sectionImage" id='logo' src={linkedinLogo} />
                    <img className="sectionImage" id='logo' src={gmailLogo} />
                </div>
            </div>


        </div>
    );
}

export default Home;