import React from 'react'

const ButtonStyls = {
    fontfamily: 'Arial, sans-serif',
    width: '100px',
    textAlign: 'center',
    padding: '10px',
    borderRadius: '4px'
}

const Button = ({ children, color }) => {
  return (
    <div>
        <button className={color} style={ButtonStyls}>{children}</button>
    </div>
  )
}

export default Button