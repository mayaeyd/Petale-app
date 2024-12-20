import React from 'react'

const BigButton = ({icon, title, subtitle}) => {
  return (
    <button>
        <img src={icon}/>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </button>
  )
}

export default BigButton
