import { createSlice } from "@reduxjs/toolkit";

export const cartSystem = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);

    },
    clearCart: () => {

      return [];
    },

    addQuantity: (state, action) => {
      const ItemId = action.payload;
      const existingItem = state.find((i) => i.id === ItemId)

      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const ItemId = action.payload;
      const existingItem = state.find((i) => i.id === ItemId)

      if (existingItem) {
        existingItem.quantity--;
      }
    }
    
  }
});

export const wishSystem = createSlice({
  name: "wish",
  initialState: [],
  reducers: {
    addTowish: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
        
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromwish: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    clearWish: () => {
      return [];
    },
    addWish: (state, action) => {
      const ItemId = action.payload;
      const existingItem = state.find((i) => i.id === ItemId)

      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decreaseWish: (state, action) => {
      const ItemId = action.payload;
      const existingItem = state.find((i) => i.id === ItemId)

      if (existingItem) {
        existingItem.quantity--;
      }
    }
  }
});

// Export actions
export const { addToCart, removeFromCart, clearCart, addQuantity, decreaseQuantity, isUpdated } = cartSystem.actions;
export const { addTowish, removeFromwish, clearWish, addWish, decreaseWish } = wishSystem.actions;

// Export reducers
export const cartReducer = cartSystem.reducer;
export const wishReducer = wishSystem.reducer;
