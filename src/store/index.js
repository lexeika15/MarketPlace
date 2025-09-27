import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const preloadedState = {
  cart: JSON.parse(localStorage.getItem("cart")) || { items: [] }
};

export const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState
});

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});