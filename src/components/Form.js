import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { postBooks } from '../redux/features/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newTitle || !newAuthor || !newCategory) {
      return;
    }
    dispatch(
      postBooks({
        item_id: uniqid(),
        title: newTitle,
        author: newAuthor,
        category: newCategory,
      }),
    );
    // Reset the form after submission
    setNewTitle('');
    setNewAuthor('');
    setNewCategory('');
  };

  return (
    <section className="formContainer">
      <h2 className="header">Add New Book</h2>
      <form className="bookForm">
        <input
          className="bookTitle"
          type="text"
          placeholder="Book title"
          required
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          className="author"
          type="text"
          placeholder="Author"
          required
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <select
          className="Category"
          id="category"
          placeholder="category"
          required
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        >
          <option value="" disabled>
            Category
          </option>
          <option value="History">History</option>
          <option value="Programming">Programming</option>
          <option value="Business">Business</option>
          <option value="Self Help">Self Help</option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
        </select>
        <button className="addBook" type="submit" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </section>
  );
};

export default Form;
