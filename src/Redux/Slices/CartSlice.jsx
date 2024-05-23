import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingCart) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemToRemove) {
        state.total -= itemToRemove.price * itemToRemove.qty;
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
    increamentQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty += 1;
        state.total += item.price;
      }
    },
    decreamentQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.qty > 1) {
        item.qty -= 1;
        state.total -= item.price;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increamentQuantity,
  decreamentQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
