import React from 'react'

const Card = ({item}) => {
  return (
    <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <img src={item.image} alt="" />
        <br />
        <br />
    </div>
  )
}

export default Card
