import './section_styles.scss'
function Home() {
    return (
        <div className="Home">
            <div className="section">
                <h3 className="section_header">About Me</h3>
                <p className="section_paragraph">
                    <span className="section_paragraph-greeting">Hi there!</span> My name is John Ogbonna, and I'd like to tell you about myself! I'm a full-stack web developer on the weekdays, and several other things after hours 😎. I'm based in Ottawa, Ontario, but I'm living in Calgary, Alberta right now. I have lots more to show and tell you, <a className="homeSectionLink" href='/'>learn more about me here!</a>
                </p>
            </div>
            <div className="section">
                <h3 className="section_header">Skills</h3>
                <p className="section_paragraph">
                    I'm a Full stack Web Developer, proficient with several development frameworks and languages! <a className="homeSectionLink" href='/'>learn more about my skills here!</a>
                </p>
            </div>
            <div className="section">
                <h3 className="section_header">Gallery</h3>
                <p className="section_paragraph">
                    There have been many interesting, fun, and hilarious memories I've captured! <a className="homeSectionLink" href='/'>View the gallery!</a>
                </p>
            </div>
            <div className="section">
                <h3 className="section_header">Contact Me!</h3>
                <p className="section_paragraph">
                    Wanna get in touch? <a className="homeSectionLink" href='/'> Contact me!</a>
                </p>
            </div>


        </div>
    );
}

export default Home;