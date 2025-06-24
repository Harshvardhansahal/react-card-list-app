import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import { getCards, deleteCard, addCard } from './api/cardService';
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
      title: `Card ${cards.length + 1}`,
    };
    const response = await addCard(newCard);
    setCards([...cards, response.data]);
  };

  return (
    <div className="container">
      <h1>Card List</h1>
      <button onClick={handleAdd} className="add-btn">➕ Add Card</button>
      <div className="card-grid">
          {cards.map(card => (
            <div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <Card card={card} onDelete={handleDelete} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
