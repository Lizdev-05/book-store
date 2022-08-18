import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/Books';

const Book = (props) => {
  const dispath = useDispatch();
  const {
    title, author, id, category,
  } = props;
  const [title2, completed, currChapter] = title.split('>');

  const removeHandler = () => {
    dispath(removeBook(id));
  };

  return (
    <>
      <div className="book">
        <div className="book-desc">
          <div className="book-obj">
            <p className="category">{category}</p>
            <h1 className="title">{title2}</h1>
            <small className="author">{author}</small>
          </div>
          <div className="obj-actions">
            <button type="button" className="obj-btn">Comment</button>
            |
            <button type="button" className="obj-btn" onClick={removeHandler}>
              Remove
            </button>
            |
            <button type="button" className="obj-btn">Edit</button>
          </div>
        </div>
        <div className="progress-chapter">
          <div className="progress">
            <svg className="svg" width="120" height="150">
              <circle className="circle-back" cx="50" cy="80" r="40" />
              <circle className="circle-front" cx="50" cy="80" r="40" />
            </svg>
            <div>
              <div className="percent">{completed}</div>
              <div className="completed">completed</div>
            </div>
          </div>
          <div className="pipe" />
          <div>
            <div className="current-chapter">Current Chapter</div>
            <div className="chapter">
              <span className="capterXOfY">{`Chapter ${currChapter}`}</span>
            </div>
            <button className="update-button" type="button">
              Update Progress
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
