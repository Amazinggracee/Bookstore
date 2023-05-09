import { useState } from 'react';
import BookItem from './BookItems';
import AddBookForm from './AddBookForm';
import addBook from './bookUtils';

function BookList() {
  const [bookList, setBookList] = useState([]);

  const handleAddBook = (newBook) => {
    const newBookList = addBook(newBook, bookList);
    setBookList(newBookList);
  };

  const handleRemoveBook = (index) => {
    const newBookList = [...bookList];
    newBookList.splice(index, 1);
    setBookList(newBookList);
  };

  return (
    <div>
      <AddBookForm onSubmit={handleAddBook} />
      {bookList.map((book, index) => (
        <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          onRemove={() => handleRemoveBook(index)}
        />
      ))}
    </div>
  );
}

export default BookList;
