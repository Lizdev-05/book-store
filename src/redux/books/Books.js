// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const initialState = [];

export default function books(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.books;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

export const addBook = (book) => function addBookThunk(dispatch) {
  axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rnyz8bgoJf9iNhz5aa7t/books', {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: 'Not Available',
  });
  dispatch({
    type: ADD_BOOK,
    book: [
      book.id,
      [{
        author: book.author,
        title: book.title,
        category: 'Not Available',
      }],
    ],
  });
};

export function removeBook(id) {
  return function remoeBookThunk(dispatch) {
    axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rnyz8bgoJf9iNhz5aa7t/books/${id}`);
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  };
}

export async function fetchBooks(dispatch) {
  const res = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rnyz8bgoJf9iNhz5aa7t/books');
  dispatch({ type: FETCH_BOOKS, books: Object.entries(res.data) });
}
