import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi. I'm Pierce.</h1>
    <br/>
    <p>
      I'm a full-stack developer in Singapore currently working at the Accenture Innovation Hub.
    </p>
    <br />
    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    <br /> */}
  </Layout>
)

export default IndexPage
