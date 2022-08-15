import React from 'react';
import Book from '../../components/Book'; 

let nextBookId = 0;
const Books = () => (
  <div>
    <button
      type="button"
      onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text: 'Study React',
          id: nextBookId += 1,
        });
      }}
    >
      Add Book
    </button>
    <ul>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
    </ul>
  </div>
);

export default Books;
