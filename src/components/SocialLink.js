import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"


const SocialLink = ({ type }) => {
  const socialLinks = {
    GitHub: {
      url: "https://github.com/neshapiro",
      icon: faGithub
    },
    LinkedIn: {
      url: "https://www.linkedin.com/in/neil-shapiro-b51a4a121/",
      icon: faLinkedin
    },
    Twitter: {
      url: "https://twitter.com/shapirowned",
      icon: faTwitter
    },
    Email: {
      url: "mailto:nshapiro91@gmail.com",
      icon: faPaperPlane
    }
  }

  return (
    <a className="Footer-socialLink" href={socialLinks[type].url}>
      <FontAwesomeIcon icon={socialLinks[type].icon} />
    </a>
  )
}

export default SocialLink
