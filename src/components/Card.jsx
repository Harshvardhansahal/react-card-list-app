import React from 'react';
import '../styles/Card.css';

const Card = ({ card, onDelete }) => (
  <div className="card">
    <p>{card.title}</p>
    <button className="delete-btn" onClick={() => onDelete(card.id)}>❌</button>
  </div>
);

export default Card;
