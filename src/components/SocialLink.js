import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faFacebookSquare, faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons"

function SocialLink({ type }) {
  const socialLink = socialLinks[type];

  return (
    <li className={`SocialLink SocialLink--${type.toLowerCase()}`}>
      <a className="SocialLink-link" href={socialLink.url} alt={socialLink.alt}>
        <FontAwesomeIcon icon={socialLink.icon} />
      </a>
    </li>
  )
}

const socialLinks = {
  GitHub: {
    url: "https://github.com/shapirone",
    icon: faGithub,
    alt: "Git Hub"
  },
  LinkedIn: {
    url: "https://www.linkedin.com/in/shapirone/",
    icon: faLinkedin,
    alt: "Linked In"
  },
  Twitter: {
    url: "https://twitter.com/shapirowned",
    icon: faTwitterSquare,
    alt: "Twitter"
  },
  Email: {
    url: "mailto:nshapiro91@gmail.com",
    icon: faEnvelope,
    alt: "Email"
  },
  Facebook: {
    url: "https://www.facebook.com/shapirone/",
    icon: faFacebookSquare,
    alt: "Facebook"
  },
  Instagram: {
    url: "https://www.instagram.com/neilfornoone/",
    icon: faInstagram,
    alt: "Instagram"
  }
};

export default SocialLink
