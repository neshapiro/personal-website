import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import MenuToggle from "./MenuToggle"
import MenuLink from "./MenuLink"
import {
  faSwimmer,
  faHome,
  faCoffee,
  faDog,
  faGamepad,
  faQuidditch,
  faWineGlassAlt,
} from "@fortawesome/free-solid-svg-icons"
import { faBattleNet } from "@fortawesome/free-brands-svg-icons"

const Menu = ({ siteTitle }) => {
  const aboutIcons = [
    faSwimmer,
    faQuidditch,
    faWineGlassAlt,
    faCoffee,
    faDog,
    faGamepad,
  ]
  const [menuEnabled, setMenuState] = useState(false)
  const [aboutIcon, setAboutIcon] = useState(getRandomAboutIcon(aboutIcons))

  const toggleMenu = () => {
    setMenuState(!menuEnabled)
  }

  useEffect(() => {
    const menu = document.getElementById("menu")
    menu.classList.remove("Menu--hideAll")
  }, [])

  useEffect(() => {
    if (menuEnabled) {
      setAboutIcon(getRandomAboutIcon(aboutIcons))
    }
  }, [menuEnabled])

  return (
    <div
      id="menu"
      className={"Menu " + (menuEnabled ? "Menu--showAll" : "Menu--hideAll")}
    >
      <div className="Menu-container">
        <MenuToggle menuEnabled={menuEnabled} toggleMethod={toggleMenu} />
        <MenuLink link="/" string="Home" icon={faHome} />
        <MenuLink link="/about" string="About" icon={aboutIcon} />
        <MenuLink link="/portfolio" string="Portfolio" icon={faBattleNet} />
      </div>
    </div>
  )
}

const getRandomAboutIcon = aboutIcons => {
  return aboutIcons[Math.floor(Math.random() * aboutIcons.length)]
}

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu
