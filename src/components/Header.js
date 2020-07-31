import React from "react"

function Header() {
  return (
    <div className="Header">
      <div className="Header-background" />
      <div className="Header-content">
        <h1 className="Header-intro">Hey, I'm Neil Shapiro</h1>
        <p className="Header-details">
          <span className="Header-heading">Software Engineer</span>
          <span className="Header-detail">
            Working at Blizzard Entertainment in Austin, TX
          </span>
        </p>
      </div>
    </div>
  )
}

export default Header
