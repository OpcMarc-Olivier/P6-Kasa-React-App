import React from "react";
import "../../../styles/error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
      <h1 className="title-content">404</h1>
      <p className="content">Oups! la page que vous demandez n'existe pas.</p>
      <Link className="nav-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
