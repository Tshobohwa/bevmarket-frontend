import { createSlice } from "@reduxjs/toolkit";
import { getSalePoint } from "./salePointsActions";

const initialState = {
  salePoint: {},
  isGettingSalePoint: false,
  employees: [],
  isGettingEmployees: false,
  sales: [],
  isGettingSales: false,
  rcs: [],
  isGettingRcs: false,
};

const salePointsSlice = createSlice({
  name: "salePoints",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSalePoint.pending, (state) => {
      return { ...state, isGettingSalePoint: true };
    });
    builder.addCase(getSalePoint.fulfilled, (state, { payload }) => {
      return { ...state, isGettingSalePoint: false, salePoint: payload };
    });
  },
});

export default salePointsSlice.reducer;
