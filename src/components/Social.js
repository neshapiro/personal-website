import React from "react"
import SocialLink from "./SocialLink"

function Social() {
  return (
    <div className="Social">
      <h3 className="Social-title">Find me online</h3>
      <ul className="Header-socialLinks">
        <SocialLink type="Instagram" />
        <SocialLink type="Facebook" />
        <SocialLink type="Twitter" />
        <SocialLink type="LinkedIn" />
        <SocialLink type="GitHub" />
        <SocialLink type="Email" />
      </ul>
    </div>
  )
}

export default Social
