import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBooks } from '../redux/features/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <section className="bookContainer">
      <div className="details">
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <ul className="comments">
          <li>
            <button type="button">Comments</button>
          </li>
          <li>
            <button type="button" onClick={() => dispatch(deleteBooks(id))}>
              Remove
            </button>
          </li>
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>

      <div className="progress">
        <div className="spinner">
          <div className="spinnerIcon" />
          <div className="spinnerText">
            <p className="percentage">40%</p>
            <p className="completed">completed</p>
          </div>
        </div>

        <div className="borderLine" />

        <div className="chapter">
          <p className="currentChapter">Current Chapter</p>
          <p className="chapterNo">Chapter 8</p>
          <button className="updateButton" type="button">
            Update Progress
          </button>
        </div>
      </div>
    </section>
  );
};

export default Book;

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
