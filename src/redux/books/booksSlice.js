import { createSlice } from '@reduxjs/toolkit';
import bookList from '../../BookList';

const initialState = {
  bookList,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookList = state.bookList.filter(
        (book) => book.item_id !== bookId,
      );
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
