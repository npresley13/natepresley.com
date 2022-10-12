import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <div>
            <div class="hero-section">
                <div class="about-section">
                    <p>Welcome!
                    <br/>
                    <br/>
                    Thank you for visiting the website of Nathan Presley. If you are a recruiter, you will find the most helpful content under the "work" tab. If you would like to learn more about me on a personal level, check out the hobbies that I enjoy! Otherwise you can feel free to contact me for anymore questions!
                    <br/>
                    <br/>
                    As you can see, I'm no designer. But I do take an interest in frontend development. In fact, I built this website from scratch using the Gatsby framework. I also used Sass to make it pretty. I'm still learning web development, but it is definitly a passion of mine.
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