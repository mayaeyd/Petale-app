import React from 'react'
import './style.css'

const BigButton = ({icon, title, subtitle}) => {
  return (
    <div>
        <div className='icon-container'>{icon}</div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
  )
}

export default BigButton
