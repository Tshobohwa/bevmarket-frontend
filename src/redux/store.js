import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./slices/clients/clientsSlice";
import itemsReducer from "./slices/items/itemsSlice";
import stockReducer from "./slices/stock/stockSlice";
import expensesReducer from "./slices/expenses/expensesSlice";

const store = configureStore({
  reducer: {
    clients: clientsReducer,
    items: itemsReducer,
    stock: stockReducer,
    expenses: expensesReducer,
  },
});

export default store;
