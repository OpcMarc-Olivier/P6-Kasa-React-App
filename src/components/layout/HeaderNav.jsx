import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function HeaderNav() {
  return (
    <header>
      <nav>
        <img src="./LOGO.svg" alt="logo kasa application" />
        <div>
          <NavLink to='/'>Accueil</NavLink>
          <NavLink to='/apropos'>A Propos</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default HeaderNav