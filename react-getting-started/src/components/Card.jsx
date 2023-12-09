import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
    </div>
  )
}

export default Card