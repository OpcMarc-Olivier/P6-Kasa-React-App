import React from "react";
import "./card.css";

function Card({ dataCard, onCardClick }) {
  return (
    <li key={dataCard.id} className="card" onClick={onCardClick}>
      <img className="card-img" src={dataCard.cover} alt="" />
      <h3 className="card-title">{dataCard.title}</h3>
    </li>
  );
}

export default Card;
