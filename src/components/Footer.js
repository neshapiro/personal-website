import React from "react"
import SocialLink from "../components/SocialLink"

const Footer = () => {
  return (
    <footer>
      <div className="Footer">
        <div className="Footer-container">
          <div className="Footer-socialCue">Connect with me on the interwebs</div>
          <div className="Footer-socialLinks">
            <SocialLink type="Twitter" />
            <SocialLink type="GitHub" />
            <SocialLink type="LinkedIn" />
            <SocialLink type="Email" />
          </div>
          <div className="Footer-gradient" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
