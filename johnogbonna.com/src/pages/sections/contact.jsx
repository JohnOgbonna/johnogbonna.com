import gmail_logo from '../../assets/logos/gmail_logo.svg'
import linkedin_logo from '../../assets/logos/linkedin_logo.svg'
import github_logo from '../../assets/logos/github_logo.svg'

let sections = [
    {
        name: 'Email',
        icon: gmail_logo,
        link: 'mailto:johnny.ogb@gmail.com',
        text: 'johnny.ogb@gmail.com'
    },
    {
        name: 'Linkedin',
        icon: linkedin_logo,
        link: 'https://linkedin.com/in/johnogbonna',
        text: "linkedin.com/in/johnogbonna"
    },
    {
        name: 'Github',
        icon: github_logo,
        link: 'https://github.com/JohnOgbonna',
        text: 'github.com/JohnOgbonna'
    },

]

function Contact(props) {
    return (
        <div className="Contact" id="section">
            <h2 className={`section_header${props.theme.color}`}>Contact Me!</h2>
            <div className='Contact_methods'>
                {sections.map(section => {
                    return (
                        < div className={`Contact_methods-section${props.theme.color}`} onClick={() => {
                            window.open(section.link, '_blank')
                        }}>
                            <div className={`Contact_methods-section--line1`}>
                                <img className='Contact_methods-section--line1---image' src={section.icon} alt={section.name} />
                                <h3 className='Contact_methods-section--header' id={section.name}>{section.name}</h3>
                            </div>
                            <p className='Contact_methods-section--text'>{section.text}</p>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
export default Contact;