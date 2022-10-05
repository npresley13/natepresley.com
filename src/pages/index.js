import * as React from 'react'
import Layout from '../components/layout'
import '../sass/index.scss'

const IndexPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <p>This is the intro to Nathan Presley</p>
    </Layout>
  )
}

export const Head = () => <title>This is the site title</title>

export default IndexPage