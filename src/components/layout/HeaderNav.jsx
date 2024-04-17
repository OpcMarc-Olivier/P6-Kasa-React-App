import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/header.css'

function HeaderNav() {
  return (
    <header>
      <nav className="header">
        <img className="header__logo" src="./LOGO.svg" alt="logo kasa application" />
        <div className="header__navBar">
          <NavLink className="navBar__link" to="/">Accueil</NavLink>
          <NavLink className="navBar__link" to="/apropos">A Propos</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default HeaderNav;
