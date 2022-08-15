import { configureStore } from '@reduxjs/toolkit';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};
const store = configureStore(bookReducer);

export default store;
