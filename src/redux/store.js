import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./slices/clients/clientsSlice";
import itemsReducer from "./slices/items/itemsSlice";
import stockReducer from "./slices/stock/stockSlice";

const store = configureStore({
  reducer: {
    clients: clientsReducer,
    items: itemsReducer,
    stock: stockReducer,
  },
});

export default store;
