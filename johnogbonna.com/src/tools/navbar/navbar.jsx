import './navbar.scss'
import React, { useState } from 'react';

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
            <li className="links_item" id="homeNavLink"
              onClick={() => props.changeSelection(link.name)}
            >{link.name}</li>
          )
        })}
      </ul>

    </div>
  );
}

export default NavBar;
