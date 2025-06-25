import React from 'react';
import '../styles/Card.css';
import { MdDeleteOutline } from "react-icons/md";

const Card = ({ card, onDelete }) => (
  <div className="card">
    <h3>{card.title}</h3>
    <button className="delete-btn" onClick={() => onDelete(card.id)}><MdDeleteOutline/></button>
    <p className="card-description">{card.description}</p>
  </div>
);

export default Card;
