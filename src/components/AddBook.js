// import React from 'react';

// const [selectedOption, setSelectedOption] = useState('');

// function AddBook() {
//   return (
//     <div className="add-book">
//       <form className="add-book-content">
//         <input className="title-inp" type="text" placeholder="Book title" />
//         <select
//           value={selectedOption}
//           onChange={handleChange}
//           name="Category"
//           id="lang"
//         >
//           <option value="Category" disabled selected>
//             Category
//           </option>
//           <option value="Documentry">Documentry</option>
//           <option value="Comedy">Comedy</option>
//           <option value="Fiction">Fiction</option>
//           <option value="Cartoon">Cartoon</option>
//         </select>
//         <input className="btn" type="submit" value="Add book" />
//       </form>
//     </div>
//   );
// }

// export default AddBook;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/booksSlices';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: nanoid(),
      title,
      author,
      category: selectedOption,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setSelectedOption('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          placeholder="Title"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          placeholder="Author"
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="form-control">
        <select
          placeholder="Categories"
          id="category"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Nonfiction">Nonfiction</option>
          <option value="Sci-fi">Sci-fi</option>
          <option value="Horror">Horror</option>
        </select>
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
