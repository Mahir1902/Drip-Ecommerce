import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, aciton) => {
      state.items = aciton.payload;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { setItems, addToCart, increaseCount, decreaseCount, removeFromCart, setIsCartOpen } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
