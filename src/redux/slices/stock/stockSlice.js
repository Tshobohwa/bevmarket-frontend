import { createSlice } from "@reduxjs/toolkit";
// import stock from "../../mockingData/stock";
// import { postItem } from "./itemsSlice";
import {
  addQuantityToStockItem,
  getStock,
  postStockItem,
  updateStockItemPrice,
} from "./stockActions";

const initialState = {
  stock: [],
  isGettingStock: false,
  isPosted: false,
  isUpdatingPrice: false,
  hasUpdatedPrice: false,
  updatePriceError: "",

  // Adding quantity to stock extrareducer state handlers
  isAddingQuantityToStock: false,
  hasAddedQuantityToStock: false,
  addingQuantityToStockError: "",
};

const stockSlice = createSlice({
  name: "stock",
  initialState,

  reducers: {
    resetHasUpdatedPrice: (state) => {
      return { ...state, hasUpdatedPrice: false };
    },

    resetHasAddedQuantityToStock: (state) => {
      return { ...state, hasAddedQuantityToStock: false };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getStock.pending, (state) => {
      return { ...state, isGettingStock: true };
    });

    builder.addCase(getStock.fulfilled, (status, { payload }) => {
      return { ...status, isGettingStock: false, stock: payload };
    });
    builder.addCase(getStock.rejected, (state, { payload }) => {
      return { ...state, isGettingStock: false, error: payload };
    });
    builder.addCase(postStockItem.pending, (state) => {
      return { ...state, isPosting: true, error: null };
    });

    builder.addCase(postStockItem.fulfilled, (state, { payload }) => {
      return {
        ...state,
        stock: [...state.stock, payload],
        isPosting: false,
        isPosted: true,
      };
    });

    builder.addCase(postStockItem.rejected, (state, { error }) => {
      return { ...state, error, isPosting: false };
    });

    // builder.addCase(postItem.fulfilled, (state, { payload }) => {
    //   return { ...state, stock: [...state.stock, payload.stock_item] };
    // });

    builder.addCase(updateStockItemPrice.pending, (state) => {
      return { ...state, isUpdatingPrice: true, updatePriceError: "" };
    });

    builder.addCase(updateStockItemPrice.fulfilled, (state, { payload }) => {
      let { stock } = state;
      // Filter the item matching the payload and changing it in the stock
      stock = stock.map((item) => (item.id === payload.id ? payload : item));
      return { ...state, isUpdatingPrice: false, hasUpdatedPrice: true, stock };
    });

    builder.addCase(updateStockItemPrice.rejected, (state, { payload }) => {
      return { ...state, isUpdatingPrice: false, updatePriceError: payload };
    });

    builder.addCase(addQuantityToStockItem.pending, (state) => {
      return {
        ...state,
        isAddingQuantityToStock: true,
        addingQuantityToStockError: "",
      };
    });

    builder.addCase(addQuantityToStockItem.fulfilled, (state, { payload }) => {
      let { stock } = state;
      // Filter the item matching the payload and changing it in the stock
      stock = stock.map((item) => (item.id === payload.id ? payload : item));
      return {
        ...state,
        isAddingQuantityToStock: false,
        hasAddedQuantityToStock: true,
        stock,
      };
    });

    builder.addCase(addQuantityToStockItem.rejected, (state, { payload }) => {
      return {
        ...state,
        isAddingQuantityToStock: false,
        addingQuantityToStockError: payload,
      };
    });
  },
});

export const { resetHasAddedQuantityToStock, resetHasUpdatedPrice } =
  stockSlice.actions;

export default stockSlice.reducer;
