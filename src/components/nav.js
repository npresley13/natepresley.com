import * as React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'

const Nav = () => {
    
    // Opens and close mobile menu
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav>
            <a href="#" className="toggle-button" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/hobbies">Hobbies</Link>
                </li>
                <li>
                    <Link to="/work">Work Experience</Link>
                </li>
                <li>
                    <Link to="/contact">Get In Touch</Link>
                </li>
            </ul>
        </nav>
    )

    
}

export default Nav