import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import books from './books/Books';
import categoriesReducer from './categories/Categories';

const rootReducer = combineReducers({
  books,
  categories: categoriesReducer,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
