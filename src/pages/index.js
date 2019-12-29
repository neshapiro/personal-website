import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, it's Neil</h1>
    <p>
      I am a JavaScript developer working for Blizzard Entertainment in Austin,
      TX.
      <br />
      Thanks for coming to my website.
    </p>
  </Layout>
)

export default IndexPage
