import { useState } from 'react';
import PropTypes from 'prop-types';

function AddBookForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title, author, category };
    onSubmit(newBook);
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={handleAuthorChange}
      />
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        <option value="Fiction">Fiction</option>
        <option value="Nonfiction">Nonfiction</option>
        <option value="Sci-fi">Sci-fi</option>
        <option value="Horror">Horror</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
}

AddBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddBookForm;
