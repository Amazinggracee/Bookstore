import React from 'react';
import PropTypes from 'prop-types';

function BookItem(props) {
  const {
    title, author, category, onRemove,
  } = props;
  return (
    <div className="book-item">
      <div className="left-content">
        <div className="book-description">
          <div className="book-cover">
            <h3>{title}</h3>
            <p className="author">{author}</p>
            <p className="cat">{category}</p>
          </div>
          <div className="cta">
            <ul>
              <li>Comments</li>
              <li>
                <button type="button" onClick={onRemove}>Remove</button>
              </li>
              <li>Edit</li>
            </ul>
          </div>
        </div>

        <div className="book-status">
          <div className="progress">
            <div className="progress-bar-fill">
              <div className="progress-bar" />
            </div>
            <div className="progress-bar-percentage">
              <h1>70%</h1>
              <span className="small-grey-text">Incomplete</span>
            </div>
          </div>
        </div>
      </div>

      <div className="right-content">
        <div className="current-chapter">
          <span className="small-grey-text">CURRENT CHAPTER</span>
          <h3>Chapter 3</h3>
          <p className="btn btn-grey">Updating progress</p>
          <div />
        </div>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default BookItem;
