import React from 'react'
import SocialLink from './SocialLink'

function Header() {
  return (
    <div className="Header">
      <div className="Header-background">
        <div className="Header-content">
          <h1 className="Header-intro">Hey, I'm Neil Shapiro</h1>
          <p className="Header-details">
            <span className="Header-heading">Software&nbsp;Engineer</span>
            <span className="Header-detail">Working at Blizzard Entertainment in Austin, TX</span>
          </p>

          <ul className="Header-socialLinks">
            <SocialLink type="Instagram" />
            <SocialLink type="Facebook" />
            <SocialLink type="Twitter" />
            <SocialLink type="LinkedIn" />
            <SocialLink type="GitHub" />
            <SocialLink type="Email" />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;