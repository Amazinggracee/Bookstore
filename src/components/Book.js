import React from 'react';
import BookList from './BookList';

function Books() {
  // object containing books
  const book = [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ];

  return (
    <div className="books-container">
      <BookList booksprop={book} />
    </div>
  );
}

export default Books;
