import React from 'react'

const BigButton = ({icon, title, subtitle}) => {
  return (
    <div>
        {icon}
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
  )
}

export default BigButton
