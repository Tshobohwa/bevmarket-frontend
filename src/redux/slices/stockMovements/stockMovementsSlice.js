import { createSlice } from "@reduxjs/toolkit";
import { getStockMovements } from "./stockMovementsActions";

const initialState = {
  stockMovements: [],
  isGettingStockMovements: false,
  stockMovementsError: null,
};

const stockMovementsSlice = createSlice({
  name: "stockMovements",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getStockMovements.pending, (state) => {
      return {
        ...state,
        isGettingStockMovements: true,
        stockMovementsError: "",
        stockMovements: [],
      };
    });
    builder.addCase(getStockMovements.fulfilled, (state, { payload }) => {
      console.log(payload);
      return {
        ...state,
        isGettingStockMovements: false,
        stockMovements: payload,
      };
    });
    builder.addCase(getStockMovements.rejected, (state, { payload }) => {
      return {
        ...state,
        isGettingStockMovements: false,
        stockMovementsError: payload,
      };
    });
  },
});

export default stockMovementsSlice.reducer;
