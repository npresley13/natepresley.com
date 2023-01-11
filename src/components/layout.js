import * as React from 'react'
import Nav from './nav'
import Footer from './footer'
import Head from './head'
import '../sass/index.scss'
import { useState } from 'react'




const Layout = ({ pageTitle, children, metaDescription}) => {
    const navHeight = document.querySelector('nav').offsetHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;
    const main = document.querySelector('main');
    let newHeight;
    
    const [mainHeight, setMainHeight] = useState(window.innerHeight - navHeight - footerHeight + 'px');

    
        function resizeMain() {
            newHeight = window.innerHeight - navHeight - footerHeight + 'px';
            setMainHeight(main.style.minHeight = newHeight);
        }

    window.addEventListener('resize', resizeMain);
    
    return (
        <div className="top-wrapper">
            <Nav/>
            <Head pageTitle={pageTitle} metaDescription={metaDescription}/>
            <main 
                className="main-container"
                style={{minHeight: mainHeight}}
            >
                <h1>{pageTitle}</h1>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout

//https://stackoverflow.com/questions/41324500/react-set-min-height-property-of-element-with-specific-classname