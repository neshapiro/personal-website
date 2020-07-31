import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Technologies from "../components/Technologies"
import Social from "../components/Social"

const IndexPage = () => (
  <Layout>
    <SEO title="Neil Shapiro" />
    <Header />
    <Technologies />
    <Social />
  </Layout>
)

export default IndexPage
