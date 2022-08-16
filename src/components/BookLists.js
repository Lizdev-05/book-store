import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const BookLists = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </div>
  );
};

export default BookLists;
