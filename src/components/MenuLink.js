import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MenuLink = ({ link, string, icon }) => {
  return (
    <div className="Menu-button">
      <div className="Menu-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <Link className="Menu-link" to={link} />
      <div className="Menu-text">{string}</div>
    </div>
  )
}

export default MenuLink
