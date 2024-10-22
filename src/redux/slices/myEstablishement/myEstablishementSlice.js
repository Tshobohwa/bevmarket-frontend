import { createSlice } from "@reduxjs/toolkit";
import { getSalePoints, postSalePoint } from "./myEstablishementActions";

const initialState = {
  myEstatblishement: {},
  salePoints: [],
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
      console.log(payload);
      const salePoint = {
        ...payload.sale_point,
        truck: payload.truck,
        warehouse: payload.warehouse,
      };
      console.log(salePoint);
      return {
        ...state,
        salePoints: [...state.salePoints, salePoint],
        hasPostedSalePoint: true,
      };
    });
    builder.addCase(getSalePoints.fulfilled, (state, { payload }) => {
      return { ...state, salePoints: payload };
    });
  },
});

export const { resetHasPostedSalePoint } = myEstablishementSlice.actions;

export default myEstablishementSlice.reducer;
