import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import { getCards, deleteCard, addCard } from './api/cardService';
import { LuPlus } from "react-icons/lu";
import './styles/Card.css';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const response = await getCards();
    setCards(response.data);
  };

  const handleDelete = async (id) => {
    await deleteCard(id);
    setCards(cards.filter(card => card.id !== id));
  };

  const handleAdd = async () => {
    const newCard = {
      title: `New Card ${cards.length + 1}`,
      description: "This is a newly added project card with sample content and description.",
    };
    const response = await addCard(newCard);
    setCards([...cards, response.data]);
  };

  return (
    <div className="container">
      <h1 className='container-title'>Card List</h1>
      <button onClick={handleAdd} className="add-btn"><LuPlus/> Add Card</button>
      <div className="card-grid">
          {cards.map(card => (
            <div key={card.id}>
              <Card card={card} onDelete={handleDelete} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
