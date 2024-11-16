import { createSlice } from "@reduxjs/toolkit";
import { getPurchases } from "./purchasesActions";
import { toast } from "react-toastify";

const initialState = {
  clientPurchases: [],
  isGettingPurchases: false,
};

const purchasesSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPurchases.pending, (state) => {
      return { ...state, isGettingPurchases: true };
    });
    builder.addCase(getPurchases.fulfilled, (state, { payload }) => {
      return { ...state, isGettingPurchases: false, clientPurchases: payload };
    });
    builder.addCase(getPurchases.rejected, (state) => {
      toast.error("Une erreur est survenue!");
      return { ...state, isGettingPurchases: false };
    });
  },
});

export default purchasesSlice.reducer;
