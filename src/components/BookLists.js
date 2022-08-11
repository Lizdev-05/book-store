import React, { useState } from 'react';
import AddBook from './AddBook';
import Book from './Book';

const BookLists = () => {
  const [books] = useState([
    {
      title: 'Invaluabe',
      author: 'Maya Grossman',
      id: 1,
    },
    {
      title: 'Turn the ship Around',
      author: 'L. David Marquet',
      id: 2,
    },
    {
      title: 'Dare to Lead,',
      author: 'Brené Brown',
      id: 3,
    },
    {
      title: 'Invaluabe',
      author: 'Maya Grossman',
      id: 4,
    },
  ]);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </div>
  );
};

export default BookLists;
