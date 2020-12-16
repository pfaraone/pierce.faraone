import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const AboutMePage = () => (
    <Layout>
      <SEO title="About Me" />
      <h1>About Me</h1>

      <h2>What I like reading</h2>
      <h3>Blogs/Newsletters</h3>
      <ul>
        <li><a href="https://fs.blog/blog/">Farnam Street Blog </a></li>
        <li>Collaborative Fund</li>
        <li>Peter Attia</li>
        <li>Cal Newport</li>
        <li>Tyler Cowen</li>
        <li>Scott Young</li>
      </ul>
      {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
    </Layout>
  )
  
  export default AboutMePage