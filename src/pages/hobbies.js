import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return(
       <Layout pageTitle="Nate's Hobbies" metaDescription="Learn more about Nathan Presley's personal hobbies.">
            <div>
                <div><StaticImage src="../images/volleyball.png" alt="nate winning a volleyball tournament"/></div>
                <h2>Volleyball</h2>
                <div>9 Years</div>
                <p>description</p>
            </div>
            <div>
                <div>Image</div>
                <h2>Volleyball</h2>
                <div>Days a Week</div>
                <div>Years</div>
                <p>description</p>
            </div>
            <div>
                <div>Image</div>
                <h2>Volleyball</h2>
                <div>Days a Week</div>
                <div>Years</div>
                <p>description</p>
            </div>
            <div>
                <div>Image</div>
                <h2>Volleyball</h2>
                <div>Days a Week</div>
                <div>Years</div>
                <p>description</p>
            </div>
            <div>
                <div>Image</div>
                <h2>Volleyball</h2>
                <div>Days a Week</div>
                <div>Years</div>
                <p>description</p>
            </div>
            <div>
                <div>Image</div>
                <h2>Volleyball</h2>
                <div>Days a Week</div>
                <div>Years</div>
                <p>description</p>
            </div>
       </Layout>
    )
}

export default AboutPage