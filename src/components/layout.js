import * as React from 'react'
import Nav from './nav'
import { container } from '../sass/styles.scss'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <Nav/>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout