import gmail_logo from '../../assets/logos/gmail_logo.svg' 
import linkedin_logo from '../../assets/logos/linkedin_logo.svg'

let sectons = [
    {
        name: 'Email', 
        icon: gmail_logo,  
        link: 'mail:tojohnny.ogb@gmail.com.com', 
        text: 'johnny.ogb@gmail.com'
    }
]


function Contact() {
    return (
        <div className="Contact" id="section">
            <h2 className = 'Contact_header'>Contact Me!</h2>
            <div className = 'Contact_methods'>
                <div className = 'Contact_methods--section'>
                    <h3 className = 'Contact_methods--section--header'>Email</h3> 
                    <p className = 'Contact_methods--section--section'><a href="mail:tojohnny.ogb@gmail.com.com">johnny.ogb@gmail.com</a></p>
                </div>
            </div>
        </div>
    )
}
export default Contact;