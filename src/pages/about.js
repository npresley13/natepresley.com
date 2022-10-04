import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return(
       <Layout pageTitle="About Nathan">
            <p>This is the About section for Nathan Presley.</p>
       </Layout>
    )
}

export const Head = () => (
    <>
        <title>About Nathan Presley</title>
        <meta 
        name="description"
        content="This is the about page for nathan Presley"
        >
        </meta>
    </>
)

export default AboutPage