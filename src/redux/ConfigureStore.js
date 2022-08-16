import { combineReducers, configureStore } from '@reduxjs/toolkit';
import books from './books/Books';
import categoriesReducer from './categories/Categories';

const rootReducer = combineReducers({
  books,
  categories: categoriesReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
