import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from 'components/AppBar/AppBar'

import './CoreLayout.scss'

function CoreLayout ({ children }) {
  return (
    <div className='app-container'>
      <AppBar />

      {children}
    </div>
  )
}

export default CoreLayout
