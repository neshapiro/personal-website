import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Menu = ({ toggleMethod }) => {
  const [menuEnabled, setMenuState] = useState(true)

  return (
    menuEnabled && (
      <div className="Menu">
        <div className="Menu-container">
          <Link className="Menu-link" to="/portfolio">
            Portfolio
          </Link>
          <Link className="Menu-link" to="/about">
            Personal Life
          </Link>
          <Link className="Menu-link" to="/resume">
            Resume
          </Link>
          <Link className="Menu-link" to="/blog">
            Blog
          </Link>
        </div>
      </div>
    )
  )
}

export default Menu
