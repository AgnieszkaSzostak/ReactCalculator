import React from "react";
import './Buttons.css'

const ButtonBox = (props) => {
  return (
    <div className="buttons">{props.children}</div>
  )
}

export default ButtonBox