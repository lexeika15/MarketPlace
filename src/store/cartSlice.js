import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(
        i => i.id === item.id && i.selectedSize === item.selectedSize
      );
      if(existing) 
        existing.quantity +=1;
      else
        state.items.push({...item, quantity: 1});
    },

    decreaseQuantity: (state, action) => {
      const { id, selectedSize } = action.payload;
      const existing = state.items.find(i => i.id === id && i.selectedSize === selectedSize);
      if(!existing) return;
      if(existing.quantity > 1)
        existing.quantity -=1;
      else
        state.items = state.items.filter(
          i => !(i.id === id && i.selectedSize === selectedSize)
        );
    },

    removeFromCart: (state, action) => {
      const { id, selectedSize } = action.payload;
      state.items = state.items.filter(
        i => !(i.id === id && i.selectedSize === selectedSize)
      );
    },

    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;