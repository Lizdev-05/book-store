import React from 'react';
import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{author}</li>
        <button type="button">Remove</button>
      </ul>

    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
