import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Menu from "./menu"
import MenuToggle from "./MenuToggle"

const Header = ({ siteTitle }) => {
  const [menuEnabled, setMenuState] = useState(false)
  const toggleMenu = () => {
    setMenuState(!menuEnabled)
  }

  return (
    <div>
      <header className="Header">
        <div className="Header-container">
          <Link className="Header-link Header-link--primary" to="/">
            {siteTitle}
          </Link>
          <MenuToggle menuEnabled={menuEnabled} toggleMethod={toggleMenu} />
        </div>
      </header>
      {menuEnabled && <Menu toggleMethod={toggleMenu} />}
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
