import { configureStore } from '@reduxjs/toolkit';
import books from './books/Books';

const rootReducer = {
  books,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
