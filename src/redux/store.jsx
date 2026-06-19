import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, wishReducer } from "./slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer,
  }
});
