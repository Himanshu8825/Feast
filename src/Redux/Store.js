import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import CategoryReducer from "./Slices/CategorySlice";
import SearchSlice from "./Slices/SearchSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: CategoryReducer,
    search: SearchSlice,
  },
});

export default store;
