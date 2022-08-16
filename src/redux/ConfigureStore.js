import { configureStore } from '@reduxjs/toolkit';
import books from './books/Books';
import CHECK from 

const rootReducer = {
  books,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
