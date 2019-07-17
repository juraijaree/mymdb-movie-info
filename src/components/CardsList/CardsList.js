import React from 'react'

import Card from 'components/Card/Card'

import { Link } from 'react-router-dom'

import './CardsList.scss'

function CardsList ({ collection }) {
  return (
    <div className='cards-list-container'>
      {
        collection.map(resource => (
          <Link
            key={resource.get('id')}
            to={`${resource.get('type')}/${resource.get('id')}`}
          >
            <Card
              title={resource.get('name')}
              thumbnail={resource.getIn(['images', '0'])}
            />
          </Link>
        ))
      }
    </div>
  )
}

export default CardsList
