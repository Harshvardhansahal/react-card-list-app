import React, { useEffect, useState, useRef } from 'react';
import Card from './components/Card';
import { getCards, deleteCard, addCard } from './api/cardService';
import { LuPlus } from "react-icons/lu";
import './styles/Card.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const App = () => {
  const [cards, setCards] = useState([]);
  const nodeRefs = useRef({});

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
        <TransitionGroup component={null}>
          {cards.map(card => {
            if (!nodeRefs.current[card.id]) {
              nodeRefs.current[card.id] = React.createRef();
            }
            return (
              <CSSTransition
                key={card.id}
                timeout={300}
                classNames="card-anim"
                nodeRef={nodeRefs.current[card.id]}
              >
                <div ref={nodeRefs.current[card.id]}>
                  <Card card={card} onDelete={handleDelete} />
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
