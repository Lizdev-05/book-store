import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/ConfigureStore';
import { fetchBooks } from './redux/books/Books';

const root = ReactDOM.createRoot(document.getElementById('root'));

store.dispatch(fetchBooks());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
