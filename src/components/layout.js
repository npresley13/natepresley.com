import * as React from 'react'
import Nav from './nav'
import '../sass/index.scss'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className="main-container">
            <Nav/>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout