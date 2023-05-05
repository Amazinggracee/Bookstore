import React, { useState } from 'react';
import PropTypes from 'prop-types';

function BookForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">
        Title:
        <input
          id="title-input"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label htmlFor="author-input">
        Author:
        <input
          id="author-input"
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
}

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BookForm;
