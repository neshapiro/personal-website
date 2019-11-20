import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Hi again!</h1>
    <p>Welcome to my portfolio</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio
