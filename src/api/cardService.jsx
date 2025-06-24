import axios from 'axios';

const BASE_URL = 'http://localhost:3001/cards';

export const getCards = () => axios.get(BASE_URL);
export const deleteCard = (id) => axios.delete(`${BASE_URL}/${id}`);
export const addCard = (card) => axios.post(BASE_URL, card);
