import React from 'react'

import { fromJS } from 'immutable'

import CardsList from 'components/CardsList/CardsList'

import './MovieIndexPage.scss'

const moviesList = fromJS([
  { id: 1, type: 'movies', name: 'Movie #1', images: ['https://placeimg.com/300/460/arch'] },
  { id: 2, type: 'movies', name: 'Movie #2', images: ['https://placeimg.com/300/460/nature'] },
  { id: 3, type: 'movies', name: 'Movie #3', images: ['https://placeimg.com/300/460/tech'] },
  { id: 4, type: 'movies', name: 'Movie #4', images: ['https://placeimg.com/300/460/arch'] },
  { id: 5, type: 'movies', name: 'Movie #5', images: ['https://placeimg.com/300/460/animals'] },
  { id: 6, type: 'movies', name: 'Movie #6', images: ['https://placeimg.com/300/460/arch'] },
  { id: 7, type: 'movies', name: 'Movie #7', images: ['https://placeimg.com/300/460/nature'] },
  { id: 8, type: 'movies', name: 'Movie #8', images: ['https://placeimg.com/300/460/tech'] },
  { id: 9, type: 'movies', name: 'Movie #9', images: ['https://placeimg.com/300/460/arch'] },
  { id: 10, type: 'movies', name: 'Movie #10', images: ['https://placeimg.com/300/460/animals'] }
])

function MovieIndexPage () {
  return (
    <>
      <h2>Movies</h2>

      <CardsList collection={moviesList} />
    </>
  )
}

export default MovieIndexPage
