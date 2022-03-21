import './navbar.scss'
import React, { useState } from 'react';
import {Link} from 'react-router-dom'; 


function NavBar(props) {
  const navItems = [
    {
      name: "Home",
      sections: ["About Me", "Skills", "Gallery", "Contact"]
    },
    {
      name: "About",
      sections: []
    },
    {
      name: "Skills",
      sections: []
    },
    {
      name: "Gallery",
      sections: []
    },
    {
      name: "Contact",
      sections: []
    }
  ] 
  return (
    <div className="NavBar">
      <ul className="links">
        {navItems.map(link => {
          return (
            <Link to ={`/${link.name}`} style={{ textDecoration: 'none' }}><li className="links__item" id="homeNavLink" 
              onClick={() => props.changeSelection(link.name)}
            >{link.name}</li>
            </Link>
          )
        })}
      </ul>

    </div>
  );
}

export default NavBar;
