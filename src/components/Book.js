import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="booklist">
        <ul>
          <li className="bookitems">
            <p>{title}</p>
            <p>{author}</p>
            <p>{category}</p>
            <button
              type="button"
              className="button key"
              onClick={() => dispatch(removeBook(id))}
            >
              Remove
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
