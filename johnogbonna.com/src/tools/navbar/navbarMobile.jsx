import './navbar.scss'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import menuButton from '../other/hamburgerMenu.svg'
import closeButton from '../other/closeIcon.svg'
import scroll_arrow from '../../tools/other/scroll_arrow.svg'


function NavBarMobile(props) {
    let [selecting, setSelecting] = useState(false);
    let [dropdown, setDropdown] = useState({});
    let [selectingTheme, setSelectingTheme] = useState(false);
    let navigate = useNavigate();
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
            sections: [],
            linkSection: true
        }
    ]
    const themes = ['Red', 'Blue', 'Sky', 'Purple', 'Green', 'Grey'];
    return (
        <div className={`NavBarMobile${props.theme.color}`}>
            <div className="NavBarMobile__line1" onClick={() => setSelecting(!selecting)}>
                <img className="NavBarMobile__menu" src={selecting ? closeButton : menuButton} />
                <h2 className="NavBarMobile__header">{props.section}</h2>
            </div>
            <div className={`linksWrapper${selecting ? 'Active' : 'Hidden'}`} onClick={(e) => {
                e.preventDefault();
                if (e.target === e.currentTarget) {
                    setSelecting(false)
                }
            }}>
                <ul className={`linksMobile${props.theme.color}`}>
                    {navItems.map(link => {
                        return (
                            <Link to={`/${link.name}`} style={{ textDecoration: 'none' }}><li className="links__item-wrapper">
                                <div className="links__item" id="homeNavLink" style={{ textDecoration: 'none' }}
                                    onClick={() => {
                                        props.changeSelection(link.name)
                                        setSelecting(false)
                                    }}
                                >{link.name}</div>
                                <img className={`links__item-arrow${dropdown[link.name] ? 'Active': ''}`} src={scroll_arrow}
                                    onClick={() => {
                                        setDropdown({
                                            ...dropdown,
                                            [link.name]: dropdown[link.name] ? false : true
                                        })
                                    }}
                                />
                            </li>
                                {link.sections.length > 0 ?
                                    <ul className={`links__item-sectionsMobile${dropdown[link.name] ? 'Active' : ''}${props.theme.color}`}>
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
                                                            else if (link.name = 'Gallery') {
                                                                window.location.href = (`/Gallery/${section}`);
                                                                window.location.hash = 'galleryHeader';
                                                            }
                                                        }
                                                        }>{`${section} ${link.name === 'Gallery' ? 'Photos' : ''}`}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    : null}
                            </Link>
                        )
                    })}
                    <li className="links__item-wrapper" id='themeMobile' onClick={() => { setSelectingTheme(!selectingTheme) }}>
                        <div className = 'links__item-wrapper'>
                            <div className="links__item" id="homeNavLink" style={{ textDecoration: 'none' }}
                            >Theme</div>
                            <img className={`links__item-arrow${selectingTheme ? 'Active': ''}`} src={scroll_arrow} />
                        </div>
                        <ul className={`links__item-sectionsMobile${selectingTheme ? 'Active' : ''}${props.theme.color}`} id='mobileThemes'>
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
                        </ul>
                    </li>
                </ul>
            </div>


        </div>
    );
}

export default NavBarMobile;
