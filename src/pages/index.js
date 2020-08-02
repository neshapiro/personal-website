import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Technologies from "../components/Technologies"
import Social from "../components/Social"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Neil Shapiro" />
    <Header />
    <Projects />
    <Technologies />
    <Social />
  </Layout>
)

export default IndexPage
