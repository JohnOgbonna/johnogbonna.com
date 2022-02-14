import gmail_logo from '../../assets/logos/gmail_logo.svg'
import linkedin_logo from '../../assets/logos/linkedin_logo.svg' 
import github_logo from '../../assets/logos/github_logo.svg'

let sections = [
    {
        name: 'Email',
        icon: gmail_logo,
        link: 'mail:tojohnny.ogb@gmail.com.com',
        text: 'johnny.ogb@gmail.com'
    },
    {
        name: 'Linkedin',
        icon: linkedin_logo,
        link: 'www.linkedin.com/in/johnogbonna',
        text: 'linkedin.com/in/johnogbonna'
    },
    {
        name: 'Github',
        icon: github_logo,
        link: 'https://github.com/JohnOgbonna',
        text: 'github.com/JohnOgbonna'
    },

]

function Contact() {
    return (
        <div className="Contact" id="section">
            <h2 className='section_header'>Contact Me!</h2>
            <div className='Contact_methods'>
                {sections.map(section => {
                    return (
                        < div className='Contact_methods--section' >
                            <h3 className='Contact_methods--section--header'>{section.name}</h3>
                            <div className='Contact_methods--section--line2'>
                                <img className='Contact_methods--section--line2--image'src={section.icon} />
                                <p className='Contact_methods--section--line2--text'><a href={section.link}>{section.text}</a></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
export default Contact;