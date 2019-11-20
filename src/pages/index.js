import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World!</h1>
    <p>My name is Neil Shapiro, welcome to my website.</p>
    <p>I am a JavaScript developer working for Blizzard Entertainment.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/portfolio/">Check out my GitHub!</Link> */}
  </Layout>
)

export default IndexPage
