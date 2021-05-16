import './navbar.scss'

function NavBar() {
    return (
      <div className="NavBar"> 
       <ul className="links">
           <li className="links_item" id="homeNavLink">Home</li> 
           <li className="links_item" id="aboutNavLink">About</li>
           <li className="links_item" id="galleryNavLink">Gallery</li>
           <li className="links_item" id="skillsNavLink">Skills</li> 
           <li className="links_item" id="contactNavLink">Contact</li>
       </ul>
       
      </div>
    );
  }
  
  export default NavBar;
  