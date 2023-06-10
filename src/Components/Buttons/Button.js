import React from "react";

const Button = (props) => {
  const {className, onClick, value} = props
  const handleClick = () => {
    onClick (value)

  }

  return(
    <button 
      className={className} 
      onClick={handleClick}>
        {value === '.' ? ',' : value}
    </button>
  )
}
export default Button