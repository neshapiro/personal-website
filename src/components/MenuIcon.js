import React from "react"

const MenuIcon = ({ menuEnabled }) => {
  return (
    <>
      <span
        className={`Menu-toggleBar ${
          menuEnabled ? "Menu-toggleBar--first" : ""
        }`}
      ></span>
      <span
        className={`Menu-toggleBar ${
          menuEnabled ? "Menu-toggleBar--second" : ""
        }`}
      ></span>
      <span
        className={`Menu-toggleBar ${
          menuEnabled ? "Menu-toggleBar--third" : ""
        }`}
      ></span>
    </>
  )
}

export default MenuIcon
