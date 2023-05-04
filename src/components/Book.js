import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, deleteBook }) {
  return (
    <div>
      <p>
        {book.title}
        {' '}
        by
        {' '}
        {book.author}
      </p>
      <button type="button" onClick={() => deleteBook(book.id)}>Delete</button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
