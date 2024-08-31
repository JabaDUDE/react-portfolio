import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiCodeBracketSquare } from 'react-icons/hi2'

export default function Navbar(){
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return(
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <span>D.K.</span>
                        <span>
                            <HiCodeBracketSquare />
                        </span>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                            Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                            About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                            My Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                            Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <GiHamburgerMenu />
            </nav>
        </>
    )
}