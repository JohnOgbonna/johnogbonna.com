import './navbar.scss'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuButton from '../other/hamburgerMenu.svg'
import closeButton from '../other/closeIcon.svg'


function NavBarMobile(props) {
    let [selecting, setSelecting] = useState(false);
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
        <div className="NavBarMobile">
            <div className="NavBarMobile__line1" onClick = {()=>setSelecting(!selecting)}>
                <img className="NavBarMobile__menu" src={selecting? closeButton : menuButton}/>
                <h2 className="NavBarMobile__header">{props.section}</h2>
            </div>
            <div className = {`linksWrapper${selecting ? 'Active' : 'Hidden'}`} onClick={(e) => {
                        e.preventDefault();
                        if (e.target === e.currentTarget) {
                            setSelecting(false)
                        }}}>
                <ul className="linksMobile">
                    {navItems.map(link => {
                        return (
                            <Link to={`/${link.name}`} style={{ textDecoration: 'none' }}><li className="links__item" id="homeNavLink"
                                onClick={() => props.changeSelection(link.name)}
                            >{link.name}</li>
                            </Link>
                        )
                    })}
                    <li className = "links__item">Theme</li>
                </ul> 
                </div>
               

        </div>
    );
}

export default NavBarMobile;
