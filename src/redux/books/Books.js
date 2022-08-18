import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const initialState = [];

export default function books(state = initialState, action) {
  switch (action.type) {
    case 'bookstore/books/FETCH_BOOKS/fulfilled':
      return action.payload.books;
    case 'bookstore/books/ADD_BOOK/fulfilled':
      return [...state, action.payload.book];
    case 'bookstore/books/REMOVE_BOOK/fulfilled':
      return state.filter((book) => book[0] !== action.payload.id);
    default:
      return state;
  }
}

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rnyz8bgoJf9iNhz5aa7t/books', {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    });
    return {
      book: [
        book.id,
        [{
          author: book.author,
          title: book.title,
          category: book.category,
        }],
      ],
    };
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id) => {
    await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rnyz8bgoJf9iNhz5aa7t/books/${id}`);
    return { id };
  },
);

export const fetchBooks = createAsyncThunk(
  FETCH_BOOKS,
  async () => {
    const res = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rnyz8bgoJf9iNhz5aa7t/books');
    return { books: Object.entries(res.data) };
  },
);
