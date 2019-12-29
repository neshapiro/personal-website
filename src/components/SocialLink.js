import React from "react"
import Image from "../components/image"

const SocialLink = ({ type }) => {
  const socialLinks = {
    GitHub: {
      url: "https://github.com/neshapiro",
    },
    LinkedIn: {
      url: "https://www.linkedin.com/in/neil-shapiro-b51a4a121/",
    },
    Twitter: {
      url: "https://twitter.com/shapirowned",
    },
  }

  return (
    <a className="Footer-socialLink" href={socialLinks[type].url}>
      <Image type={type} />
    </a>
  )
}

export default SocialLink
