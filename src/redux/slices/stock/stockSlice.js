import { createSlice } from "@reduxjs/toolkit";

import {
  addQuantityToStockItem,
  getSalePointStock,
  getStock,
  postStockItem,
  updateStockItemPrice,
} from "./stockActions";
import { postItem } from "../items/ItemsActions";
import { toast } from "react-toastify";

const initialState = {
  stock: [],
  isGettingStock: false,
  isPosted: false,

  salePointStock: [],
  isGettingSalePointStock: false,

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
    setCurrentStockItem: (state, { payload }) => {
      const currentStockItem = state.stock.find((item) => item.id === payload);
      return { ...state, currentStockItem };
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
      toast.success("Nouvel article ajoutee avec succes!");
      return {
        ...state,
        stock: [...state.stock, payload],
        isPosting: false,
        isPosted: true,
      };
    });

    builder.addCase(postStockItem.rejected, (state, { error }) => {
      toast.error(
        "Une erreur est survenue! Nouvel article non ajoutee au stock"
      );
      return { ...state, error, isPosting: false };
    });

    builder.addCase(postItem.fulfilled, (state, { payload }) => {
      return {
        ...state,
        stock: [...state.stock, payload.stock_item],
      };
    });

    builder.addCase(updateStockItemPrice.pending, (state) => {
      return { ...state, isUpdatingPrice: true, updatePriceError: "" };
    });

    builder.addCase(updateStockItemPrice.fulfilled, (state, { payload }) => {
      toast.success("Prix de l'article mis a jour!");
      let { stock } = state;
      // Filter the item matching the payload and changing it in the stock
      stock = stock.map((item) => (item.id === payload.id ? payload : item));
      return { ...state, isUpdatingPrice: false, hasUpdatedPrice: true, stock };
    });

    builder.addCase(updateStockItemPrice.rejected, (state, { payload }) => {
      toast.error("Une erreur est survenue! Prix de l'article non mis a jour.");
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
      toast.success("Quantitee ajoutee au stock avec succes");
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
      toast.error("Une erreur est survenue! Quantitee non ajoutee au stock.");
      return {
        ...state,
        isAddingQuantityToStock: false,
        addingQuantityToStockError: payload,
      };
    });

    builder.addCase(getSalePointStock.pending, (state) => {
      return { ...state, isGettingSalePointStock: true };
    });

    builder.addCase(getSalePointStock.fulfilled, (state, { payload }) => {
      return {
        ...state,
        salePointStock: payload,
        isGettingSalePointStock: false,
      };
    });

    builder.addCase(getSalePointStock.rejected, (state) => {
      return { ...state, isGettingSalePointStock: false };
    });
  },
});

export const {
  resetHasAddedQuantityToStock,
  resetHasUpdatedPrice,
  setCurrentStockItem,
} = stockSlice.actions;

export default stockSlice.reducer;
