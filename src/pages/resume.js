import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <a href="Pierce_Faraone_Resume.pdf" target="_blank">
      <p style={{ marginBottom: "7em" }}> Download Resume </p>{" "}
    </a>
  </Layout>
)

export default SecondPage
