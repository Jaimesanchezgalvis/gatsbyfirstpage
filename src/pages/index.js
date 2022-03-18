import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
      alt='Clifford, a reddish-brown pitbull, posign on a couch and looking sotoically at the camera'
        src='../images/codeexample.jpg'
      />
    </Layout>
  )
}

export default IndexPage