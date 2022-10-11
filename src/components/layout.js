import * as React from 'react'
import Nav from './nav'
import Head from './head'
import '../sass/index.scss'

const Layout = ({ pageTitle, children, metaDescription }) => {
    return (
        <div className="main-container">
            <Head pageTitle={pageTitle} metaDescription={metaDescription}/>
            <Nav/>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout