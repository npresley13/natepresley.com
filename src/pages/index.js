import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <div>
            <div class="hero-section">
                <div class="about-section">
                    <p>Welcome to my personal website! If you are a recruiter, you will find the most helpful information in the "Work Experience" page. If you would like to learn more about what I do for fun, check out the "Hobbies" page. Otherwise you can get in touch with me by filling out the form on the "Get In Touch" page.
                    <br/>
                    <br/>
                    Fun fact: I built this website from scratch using a React framework - Gatsby.
                    </p>
                </div>
            </div>
            <div class="three-boxes">
                <div class="hover-box light-text">
                    <Link to="/work" className="link">
                        <h2 class="hover-box-heading center-object">Work</h2>
                    </Link>
                </div>
                <div class="hover-box light-text">
                    <Link to="/hobbies" className="link">
                        <h2 class="hover-box-heading center-object">Hobbies</h2>
                    </Link>
                </div>
                <div class="hover-box light-text">
                    <Link to="/contact" className="link">
                        <h2 class="hover-box-heading center-object">Contact</h2>
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default IndexPage