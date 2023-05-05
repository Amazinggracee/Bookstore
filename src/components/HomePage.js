import React, { useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';
import Navigation from './Navigation';

function HomePage() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, { id: Math.random(), ...book }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <Navigation />
      <h1>My Book Collection</h1>
      <BookList books={books} deleteBook={deleteBook} />
      <BookForm addBook={addBook} />
    </div>
  );
}

export default HomePage;
