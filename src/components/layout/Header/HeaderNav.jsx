import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../../assets/icons/LOGO.svg";

function HeaderNav() {
  //state
  //comportements
  const handleClickNav = (nav) =>
    nav.isActive ? "navBar__link nav-active" : "navBar__link";
  //render
  return (
    <header>
      <nav className="header">
        <img className="header__logo" src={logo} alt="logo kasa application" />
        <div className="header__navBar">
          <NavLink className={handleClickNav} to="/">
            Accueil
          </NavLink>
          <NavLink className={handleClickNav} to="/apropos">
            A Propos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default HeaderNav;
