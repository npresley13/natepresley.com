import * as React from 'react'
import { Link } from 'gatsby'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
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