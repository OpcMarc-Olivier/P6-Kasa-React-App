import React from "react";
import "./footer.css";
import logoFooter from "../../../assets/icons/logo-kasa-blanc.svg";

function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src={logoFooter}
        alt="logo kasa application"
      />
      <p className="footer__p"> @2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
