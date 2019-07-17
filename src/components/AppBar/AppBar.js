import React from 'react'
import { Link } from 'react-router-dom'

import NavigationMenu from 'components/NavigationMenu/NavigationMenu'

import './AppBar.scss'

function AppBar () {
  return (
    <nav className='app-bar'>
      <div>
        <Link to='/'>HOME</Link>
      </div>

      <NavigationMenu
        menus={[
          { path: '/movies', label: 'MOVIES' },
          { path: '/actors', label: 'ACTORS' },
          { path: '/directors', label: 'DIRECTORS' },
        ]}
      />
    </nav>
  )
}

export default AppBar
