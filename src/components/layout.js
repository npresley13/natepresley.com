import * as React from 'react'
import Nav from './nav'
import Footer from './footer'
import Head from './head'
import '../sass/index.scss'

const Layout = ({ pageTitle, children, metaDescription }) => {
    return (
        <div className="top-wrapper">
            <Nav/>
            <Head pageTitle={pageTitle} metaDescription={metaDescription}/>
            <main className="main-container">
                <h1>{pageTitle}</h1>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout