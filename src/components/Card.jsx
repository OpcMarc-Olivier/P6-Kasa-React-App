import React from "react";
import "../styles/card.css";

function Card({ dataCard }) {
  return (
    <li key={dataCard.id} className="card">
      <img className="card-img" src={dataCard.cover} alt="" />
      <h3 className="card-title">{dataCard.title}</h3>
    </li>
  );
}

export default Card;
