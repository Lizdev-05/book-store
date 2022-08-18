import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/Books';
import Option from './Option';

export default function AddBook() {
  const dispatch = useDispatch();

  const [bookValues, setBookValues] = useState({
    title: '',
    author: '',
    category: 'Fiction',
    currentChapter: '0',
    completed: '0%',
    comments: [],
  });

  const bookCategories = [
    { value: 'Fiction', content: 'Fiction' },
    { value: 'Nonfiction', content: 'Nonfiction' },
    { value: 'Drama', content: 'Drama' },
    { value: 'Folktale', content: 'Folktale' },
    { value: 'Poetry', content: 'Poetry' },
  ];

  const Options = () => bookCategories.map((category, index) => {
    const { value, content } = category;
    return <Option key={uuidv4()} index={index} value={value} content={content} />;
  });

  const handleChange = (e) => {
    e.preventDefault();
    setBookValues({
      ...bookValues,
      [e.target.name]: e.target.value,
    });
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    const title = document.getElementsByName('title')[0].value;
    const author = document.getElementsByName('author')[0].value;

    if (!title.length > 0 || !author.length > 0) return;
    const book = {
      title: bookValues.title,
      author: bookValues.author,
      id: uuidv4(),
      completed: bookValues.completed,
      currentChapter: bookValues.currentChapter,
      comments: bookValues.comments,
    };

    dispatch(addBook(book));
    setBookValues({
      title: '',
      author: '',
    });
  };
  return (
    <div className="form-container">
      <h1 className="add-new">Add New Book</h1>
      <form className="form" onSubmit={addBookHandler}>
        <input
          type="text"
          required
          value={bookValues.title}
          onChange={handleChange}
          placeholder="Book title"
          className="book-title"
          name="title"
        />
        <input
          type="text"
          required
          value={bookValues.author}
          onChange={handleChange}
          placeholder="Book author"
          className="book-author"
          name="author"
        />
        <select
          className="book-category"
          typeof="text"
          required
          name="category"
          onChange={handleChange}
          value={bookValues.category}
        >
          {Options()}
        </select>
        <button type="submit" className="add-book-btn">ADD BOOK</button>
      </form>
    </div>
  );
}
