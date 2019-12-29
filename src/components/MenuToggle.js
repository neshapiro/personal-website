import React from "react"
import MenuIcon from "./MenuIcon"

const MenuToggle = ({ menuEnabled, toggleMethod }) => {
  return (
    <div onClick={toggleMethod} className="Menu-toggle">
      <MenuIcon menuEnabled={menuEnabled} />
    </div>
  )
}

export default MenuToggle
