import { createSlice } from "@reduxjs/toolkit";
import { postSalePoint } from "./myEstablishementActions";

const initialState = {
  myEstatblishement: {},
  salesPoints: [],
  employees: [],
  hasPostedSalePoint: false,
};

const myEstablishementSlice = createSlice({
  name: "myEstablishement",
  initialState,
  reducers: {
    resetHasPostedSalePoint: (state) => {
      return { ...state, hasPostedSalePoint: false };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postSalePoint.fulfilled, (state, { payload }) => {
      return {
        ...state,
        salesPoints: [...state.salesPoints, payload],
        hasPostedSalePoint: true,
      };
    });
  },
});

export const { resetHasPostedSalePoint } = myEstablishementSlice.actions;

export default myEstablishementSlice.reducer;
