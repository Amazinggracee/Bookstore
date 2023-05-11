// import React from 'react';
// import { useSelector } from 'react-redux';
// import Book from '../components/Book';
// import Form from '../components/Form';

// function Books() {
//   const { bookList } = useSelector((state) => state.books);
//   return (
//     <>
//       <div>
//         <h2>List of Books</h2>
//         {bookList.map((book) => (
//           <Book
//             key={book.item_id}
//             id={book.item_id}
//             title={book.title}
//             author={book.author}
//             category={book.category}
//           />
//         ))}
//         <Form />
//       </div>
//     </>
//   );
// }
// export default Books;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../../components/Book';
import Form from '../../components/Form';
import { fetchBooks } from '../../redux/features/books/booksSlice';
import './Books.css';

const Books = () => {
  const { books, status } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
    if (status === 'succeeded') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  return (
    <div className="booksContainer">
      <section className="booksSection">
        {books.map((item) => (
          <Book
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            category={item.category}
          />
        ))}
        <Form />
      </section>
    </div>
  );
};

export default Books;
