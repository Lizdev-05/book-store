import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'Invaluabe',
    author: 'Maya Grossman',
    id: uuidv4(),
  },
  {
    title: 'Turn the ship Around',
    author: 'L. David Marquet',
    id: uuidv4(),
  },
  {
    title: 'Dare to Lead,',
    author: 'Brené Brown',
    id: uuidv4(),
  },
  {
    title: 'Invaluabe',
    author: 'Maya Grossman',
    id: uuidv4(),
  },
];

export default function books(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});
