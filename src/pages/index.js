import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

// TODO: how to style a page - typical margins etc.
const IndexPage = () => (
  <Layout>
    {/* TODO: perhaps add a body section that brings this down */}
    <SEO title="Home" />

    <h1>Hi. I'm Pierce.</h1>
    <br />
    <p>I'm a Software Engineer currently working at the Circles.Life.</p>
    <p>
      {/* TODO: increase line height between paragraphs */}
      You can reach out to me at{" "}
      <a
        href="mailto:pierce.faraone@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        pierce.faraone@gmail.com{" "}
      </a>
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
