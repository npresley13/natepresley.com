import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return(
       <Layout pageTitle="Nate's Hobbies" metaDescription="Learn more about Nathan Presley's personal hobbies.">
            <div className="card-container">
                <div className="hobby-card">
                    <div className="card-image"><StaticImage className="static-image" src="../images/volleyball.png" alt="nate winning a volleyball tournament"/></div>
                    <h2>Volleyball</h2>
                    <p className="year">Since Jan. 2013</p>
                    <p>Taking 2nd place in a men's doubles tournament last summer.</p>
                </div>
                <div className="hobby-card">
                    <div className="card-image"><StaticImage className="static-image" src="../images/jiu-jitsu.png" alt="nate winning a volleyball tournament"/></div>
                    <h2>Jiu Jitsu</h2>
                    <p className="year">Since Nov. 2020</p>
                    <p>Post class with John Danaher. One of the best BJJ coaches.</p>
                </div>
                <div className="hobby-card">
                    <div className="card-image"><StaticImage className="static-image" src="../images/boxing.png" alt="nate winning a volleyball tournament"/></div>
                    <h2>Boxing</h2>
                    <p className="year">Since Oct. 2022</p>
                    <p>Aftermath of my first official boxing class.</p>
                </div>
                <div className="hobby-card">
                    <div className="card-image"><StaticImage className="static-image" src="../images/climbing.png" alt="nate winning a volleyball tournament"/></div>
                    <h2>Climbing</h2>
                    <p className="year">Since Mar. 2008</p>
                    <p>Sending a V3/V4 at Climb Nulu.</p>
                </div>
                <div className="hobby-card">
                    <div className="card-image"><StaticImage className="static-image" src="../images/hiking.png" alt="nate winning a volleyball tournament"/></div>
                    <h2>Hiking</h2>
                    <p className="year">Since Mar. 2008</p>
                    <p>On top of my favorite hike to date - Angel's Landing in Zion National Park.</p>
                </div>
                <div className="hobby-card">
                    <div className="card-image"><StaticImage className="static-image" src="../images/softball.png" alt="nate winning a volleyball tournament"/></div>
                    <h2>Softball</h2>
                    <p className="year">Since Apr. 2019</p>
                    <p>The Strong Hold softball team taking first in the fall softball league.</p>
                </div>
            </div>
       </Layout>
    )
}

export default AboutPage