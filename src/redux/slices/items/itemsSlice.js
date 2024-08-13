import { createSlice } from "@reduxjs/toolkit";
import { getItems, postItem } from "./ItemsActions";

const initialState = {
  items: [],
  isLoading: false,
  isPosted: false,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    initializeIsPosted: (state) => {
      return { ...state, isPosted: false };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state) => {
      return { ...state, isLoading: true };
    });

    builder.addCase(getItems.fulfilled, (state, { payload }) => {
      return { ...state, items: payload };
    });

    builder.addCase(postItem.pending, (state) => {
      return { ...state, isPostingItem: true };
    });

    builder.addCase(postItem.fulfilled, (state, { payload }) => {
      return {
        ...state,
        isPostingItem: false,
        items: [...state.items, payload.item],
        isPosted: true,
      };
    });
    builder.addCase(postItem.rejected, (state, { payload }) => {
      return { ...state, isPostingItem: false, error: payload };
    });
  },
});

export const { initializeIsPosted } = itemsSlice.actions;

export default itemsSlice.reducer;
