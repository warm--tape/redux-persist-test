import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// =========================================================
// Initial state

const initialState = {
  itemDataIsLoading: false,
  itemData: [],
  itemDataError: null,
};

// =========================================================
// Data Actions

// export const tryLoadItemData = createAsyncThunk(
//   "data/tryLoadItemData",
//   async (session, { getState, rejectWithValue }) => {
//     return session;
//   }
// );

// export const tryAddItemData = createAsyncThunk(
//   "data/tryAddItemData",
//   async (session, { getState, rejectWithValue }) => {}
// );

// =========================================================
// Export the slice
export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItemData: (state, action) => {
      state.itemData.push(action.payload);
    },
  },
  extraReducers: {
    // LOAD
    // [tryLoadItemData.fulfilled]: (state, { payload }) => {
    //   state.itemDataIsLoading = false;
    //   state.itemData = payload;
    //   state.itemDataError = null;
    // },
    // [tryLoadItemData.pending]: (state) => {
    //   state.itemDataIsLoading = true;
    // },
    // [tryLoadItemData.rejected]: (state, { payload }) => {
    //   state.itemDataIsLoading = false;
    //   if (payload) {
    //     state.itemDataError = payload;
    //   } else {
    //     state.itemDataError = "Could not load item data.";
    //   }
    // },
    // // ADD
    // [tryAddItemData.fulfilled]: (state, { payload }) => {
    //   state.itemDataIsLoading = false;
    //   state.itemData.push(payload);
    // },
    // [tryAddItemData.pending]: (state) => {
    //   state.itemDataIsLoading = true;
    // },
    // [tryAddItemData.rejected]: (state) => {
    //   state.itemDataIsLoading = false;
    // },
  },
});

export const { addItemData } = itemSlice.actions;

export default itemSlice.reducer;
