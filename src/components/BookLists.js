import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const BookLists = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <Book
          key={book[0]}
          id={book[0]}
          title={book[1][0].title}
          author={book[1][0].author}
          category={book[1][0].category}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default BookLists;
