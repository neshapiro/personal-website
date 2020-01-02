import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardGallery from "../components/CardGallery"
import Us from '../images/us.jpg'
import Jax from '../images/jax.jpg'
import DoubleTrouble from '../images/donner_maggie.jpg'

const About = () => {
  const terraGallery = [
    {
      heading: "Terra",
      paragraph: "We met in the dorms at UC Irvine and have been together for 7 years, married for 3.",
      image: Us
    }
  ]
  const dogGallery = [
    {
      heading: "Jax",
      paragraph: "Our first baby. He was loved by everyone who met him. We had him for 4 years before he passed from lymphoma at the age of 7.",
      image: Jax
    }, {
      heading: "Maggie & Donner",
      paragraph: "We rescued both of these sweet pups after they were found together as strays. They are total lovebugs and total scaredy-cats.",
      image: DoubleTrouble
    }
  ]

  return (
    <Layout>
      <SEO title="About" />
      <CardGallery cards={terraGallery} />
      <CardGallery cards={dogGallery} />
    </Layout >
  )
}

export default About
