import React from 'react';
import ProtoTypes from 'prop-types';

function BookItem(props) {
  const { title, author, category } = props;
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
              <li>Remove</li>
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
  title: ProtoTypes.string.isRequired,
  author: ProtoTypes.string.isRequired,
  category: ProtoTypes.string.isRequired,
};

export default BookItem;
