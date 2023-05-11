// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   bookList: [],
// };

// export const categoriesSlice = createSlice({
//   name: 'categories',
//   initialState,
//   reducers: {
//     checkStatus: (state, action) => {
//       state.bookList = action.payload === 'Under construction'
//         ? 'Under construction'
//         : state.bookList;
//     },
//   },
// });
// export const { checkStatus } = categoriesSlice.actions;
// export default categoriesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      state.categories = 'Under construction';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
