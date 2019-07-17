import React from 'react'

import './Card.scss'

function Card ({ title, thumbnail }) {
  return (
    <div className='card-container'>
      <div className='card-title'>
        <h5>{title}</h5>
      </div>

      <div className='card-thumbnail'>
        <img src={thumbnail} alt={title} />
      </div>
    </div>
  )
}

export default Card
