import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src="./logo-kasa-blanc.svg"
        alt="logo kasa application"
      />
      <p className="footer__p"> @2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
