import { createSlice } from "@reduxjs/toolkit";
import { postSale } from "./salesActions";

const emptyNewSale = {
  client_id: null,
  items: [],
};

const initialState = {
  sales: [],
  newSale: emptyNewSale,
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    selectClient: (state, { payload }) => {
      const { newSale } = state;
      return { ...state, newSale: { ...newSale, client_id: payload } };
    },
    addItemToNewSale: (state, { payload }) => {
      const { items } = state.newSale;
      newItems = [...items, payload];
      return { ...state, newSale: { ...state.newSale, items: newItems } };
    },
    removeItemFromNewSale: (state, { payload }) => {
      let { items } = state.newSale;
      items = items.filter((item) => item.id !== payload);
      return { ...state, newSale: { ...state.newSale, items } };
    },
    cancelNewSale: (state) => {
      return { ...state, newSale: emptyNewSale };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postSale.pending, (state) => {
      console.log("Posting sale");
      return { ...state, isPostingSale: true };
    });
    builder.addCase(postSale.fulfilled, (state, { payload }) => {
      console.log("Sale posted");
      return {
        ...state,
        sales: [payload.sale, ...state.sales],
        isPostingSale: false,
        newSale: emptyNewSale,
      };
    });
    builder.addCase(postSale.rejected, (state, { payload }) => {
      return { ...state, isPostingSale: false };
    });
  },
});

export const {
  addItemToNewSale,
  cancelNewSale,
  selectClient,
  removeItemFromNewSale,
} = salesSlice.actions;

export default salesSlice.reducer;
