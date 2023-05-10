import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

export default function Form() {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const formRef = useRef(null);

  const clickAddBook = () => {
    // e.preventDefault();
    dispatch(
      addBook({
        item_id: uuid(),
        title: newTitle,
        author: newAuthor,
        category: newCategory,
      }),
    );
    formRef.current.reset();
  };

  return (
    <>
      <form ref={formRef}>
        <h3>Adding a Book</h3>
        <input
          type="text"
          placeholder="title"
          required
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="author"
          required
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="category"
          required
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => clickAddBook()}
        >
          Add Book
        </button>
      </form>
    </>
  );
}
