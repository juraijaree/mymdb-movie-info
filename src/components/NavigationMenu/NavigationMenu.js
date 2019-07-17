import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './NavigationMenu.scss'

function NavigationMenu ({ menus }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function openMenu () {
    setMenuOpen(true)

    document.body.style.position = 'fixed'
  }

  function closeMenu () {
    setMenuOpen(false)

    document.body.style.position = ''
  }

  function renderMenus () {
    return menus.map(({ path, label }) => (
      <Link
        to={path}
        key={path}
        onClick={closeMenu}
      >
        {label}
      </Link>
    ))
  }

  return (
    <>
      {
        menuOpen ? (
          <div className='overlay-nav'>
            <button
              className='mobile-close-button'
              type='button'
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faTimes} size='3x' />
            </button>

            <div className='mobile-menus'>
              {renderMenus()}
            </div>
          </div>
        ) : (
          <button
            className='mobile-menus-button'
            type='button'
            onClick={openMenu}
          >
            <FontAwesomeIcon icon={faBars} size='3x' />
          </button>
        )
      }

      <div className='desktop-menus'>
        {renderMenus()}
      </div>
    </>
  )
}

export default NavigationMenu
