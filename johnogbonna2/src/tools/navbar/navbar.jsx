import './navbar.scss'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function NavBar(props) {
  const navItems = [
    {
      name: "Home",
      sections: ["About Me", "Skills", "Gallery", "Contact"],
      linkSection: true
    },
    {
      name: "About",
      sections: ["Bio", "University", "After University", "Learning Software Development"],
      linkSection: true
    },
    {
      name: "Skills",
      sections: ["Web Development", "Other Skills/Experience"],
      linkSection: true
    },
    {
      name: "Gallery",
      sections: ["All", "Family", "Self", "Other"],
      linkSection: false
    },
    {
      name: "Contact",
      sections: ["Email", "Linkedin", "Github"],
      linkSection: true
    }
  ]
  const themes = ['Red', 'Blue', 'Sky', 'Purple', 'Green', 'Grey'];
  let [hovering, setHovering] = useState(false);
  let [themeHovering, setThemeHovering] = useState(false);
  let navigate = useNavigate()
  let toggleDarkMode = () => {
    if (!props.theme.dark) props.changeTheme(props.theme.color, 'Auto');
    else if (props.theme.dark === 'Auto') props.changeTheme(props.theme.color, true);
    else props.changeTheme(props.theme.color, false);
  }
  return (
    <div className={`NavBar${props.theme.color}`} onMouseLeave={() => {
      setHovering(false);
      setThemeHovering(false);
    }}>
      <ul className="links">
        {navItems.map(link => {
          return (
            <div className='links__wrapper' onMouseEnter={() => {
              setHovering(link.name)
              setThemeHovering(false);
            }}>
              <Link to={`/${link.name}`} style={{ textDecoration: 'none', cursor: 'pointer' }}><li className="links__item" id="homeNavLink" onClick={() => props.changeSelection(link.name)}>{link.name === 'Home' ? 'Overview' : link.name}</li>
              </Link>
              {link.sections.length > 0 ?
                <ul className={`links__item-sections${hovering === link.name ? 'Active' : ''}${props.theme.color}`}>
                  {
                    link.sections.map(section => {
                      return (
                        <li className={"links__item-section"}
                          onClick={() => {
                            props.changeSelection(link.name);
                            if (link.linkSection) {
                              setTimeout(() => {
                                navigate(`/${link.name}`);
                                window.location.hash = section;
                              }, 100);
                            }
                            else if (link.name === 'Gallery') {
                              window.location.href = (`/Gallery?category=${section}`);
                              window.location.hash = 'galleryHeader';
                            }
                          }
                          }>{`${section} ${link.name === 'Gallery' ? 'Photos' : ''}`}</li>
                      )
                    })
                  }
                </ul>
                : null}
            </div>
          )
        })}
        <li className="links__itemTheme" id="homeNavLinkTheme">
          <div className = 'links__Wrapper'>
            <p className='theme_header' onMouseEnter={() => { setThemeHovering(true) }}>Theme</p>
            <ul className={`links__item-sections${themeHovering ? 'Active' : ''}${props.theme.color}`} id='themes'>
              {
                themes.map(color => {
                  return (
                    <div className='theme_wrapper' onClick={() => {
                      props.changeTheme(color, props.theme.dark)
                    }
                    }>
                      <li className='links__item-section' id='themeColor' >{color}</li>
                      <div className='links__item-shade' id={`shade${color}`}></div>
                    </div>
                  )
                })
              }
              <li className='links__item-section' id='themeColor' onClick={() => {
                toggleDarkMode()
              }}>{`Dark Mode: ${props.theme.dark === 'Auto' ? 'AUTO' : props.theme.dark ? 'ON' : 'OFF'}`}</li>
            </ul>
          </div>
        </li>
      </ul>

    </div>
  );
}

export default NavBar;
