import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Technologies from "../components/Technologies"

const IndexPage = () => (
  <Layout>
    <SEO title="Neil Shapiro" />
    <Header />
    <Technologies />
  </Layout>
)

export default IndexPage
