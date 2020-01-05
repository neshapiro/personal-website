import React from "react"
import CardGallery from '../components/CardGallery'
import PathToPro from '../images/path_to_pro.jpg'
import Schedule from '../images/schedule_bc.jpg'
import Watch from '../images/watch_bc.jpg'
import Portal from '../images/portal_bc.jpg'
import API from '../images/pretty_api_bc.jpg'
import Self from '../images/self.jpg'
import Wedding from '../images/wedding.jpg'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => {
  let professionalGallery = [
    {
      heading: "Watch Page",
      paragraph: "React rendered pulling video data from our API",
      url: 'https://www.blizzcon.com/en-us/watch',
      image: Watch
    },
    {
      heading: "Portal Pass",
      paragraph: "Created by design and editorial in SCM using the Jade rendered component library",
      url: 'https://blizzcon.com/en-us/event-info/tickets/convention-2',
      image: Portal
    },
    {
      heading: "Schedule Page",
      paragraph: "Jade rendered pulling event data from our API",
      url: 'https://www.blizzcon.com/en-us/schedule',
      image: Schedule
    },
    {
      heading: "BlizzCon API Schedule Data",
      paragraph: "Rest API pulling schedule data from a CMS and video data from a S3 bucket and performing data transformations for consumption",
      url: 'https://www.api.blizzcon.com/schedule',
      image: API
    },
    {
      heading: "Overwatch Path to Pro Carousel",
      paragraph: "Jade rendered running keyframe animations",
      url: 'https://www.playoverwatch.com/en-us/esports',
      image: PathToPro
    }
  ]
  let personalGallery = [
    {
      heading: "Wedding Website",
      paragraph: "The first website I ever built was built with Ruby on Rails and used for guests to find information for and RSVP to our wedding. Link coming soon™.",
      image: Wedding
    }, {
      heading: "Personal Website",
      paragraph: "This is the website you are currently looking at! It is a static webpage built using Gatsby with React Hooks. It is hosted in an S3 bucket",
      image: Self
    }, {
      heading: "Blizzard Pets",
      paragraph: "This is a hackathon project that allows Blizzard employees to register their pets and see the pets of other Blizzard employees. It is s static site written in React, hosted on S3 and fronted by a CloudFront CDN. It's only available on the Blizzard intranet.",
      image: Self
    }
  ]
  return (
    <Layout>
      <SEO title="Portfolio" />
      <CardGallery title="Personal Portfolio" cards={personalGallery} />
      <CardGallery title="Professional Portfolio" cards={professionalGallery}
        paragraph="My efforts are largely focused on our Blizzcon website. Some projects I spearheaded include a component library driven by our proprietary SCM, video player implementation, and the API that powered the website and mobile app." />
    </Layout>
  )
}

export default Portfolio
