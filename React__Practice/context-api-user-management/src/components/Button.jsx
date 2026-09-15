import React from 'react'

function Button({name,
    className = "",
    onClick,
    disabled,
    type,
}) {
  return (
    <button className={`btn ${className}`
    }
      onClick={onClick}
      disabled={disabled}
      type={type}
    >{name}</button>
  )
}

export default Button