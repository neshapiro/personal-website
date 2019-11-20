import React from "react"

const MenuToggle = ({ menuEnabled, toggleMethod }) => {
  return (
    <div onClick={toggleMethod} className="MenuToggle">
      <span
        className={`MenuToggle-bar ${
          menuEnabled ? "MenuToggle-bar--first" : ""
        }`}
      ></span>
      <span
        className={`MenuToggle-bar ${
          menuEnabled ? "MenuToggle-bar--second" : ""
        }`}
      ></span>
      <span
        className={`MenuToggle-bar ${
          menuEnabled ? "MenuToggle-bar--third" : ""
        }`}
      ></span>
    </div>
  )
}

export default MenuToggle
