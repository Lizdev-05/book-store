import React from 'react';
// import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
// import { removeBook } from '../redux/books/Books';

const Book = (props) => {
  // const dispath = useDispatch();
  const { title, author } = props;

  // const removeHandler = () => {
  //   dispath(removeBook(id));
  // };

  return (
    <>
      <ul>
        <li>{title}</li>
        <li>{author}</li>
        <button type="button">Remove</button>
        {/* nClick={removeHandler} */}
      </ul>

    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
};

export default Book;
