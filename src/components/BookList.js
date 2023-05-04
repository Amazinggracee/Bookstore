import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList(props) {
  const { books, deleteBook } = props;
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} deleteBook={deleteBook} />
        </li>
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookList;
