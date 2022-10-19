import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    addToCart(state, action) {
      const findItem = state.items.find(
        (obj) => Number(obj.id) === Number(action.payload)
      );
      if (findItem.count) {
        findItem.count++;
      } else {
        findItem.count = 1;
      }
    },
    minusFromCart(state, action) {
      const findItem = state.items.find(
        (obj) => Number(obj.id) === Number(action.payload)
      );
      findItem.count--;
    },
  },
});

export const { setItems, addToCart, minusFromCart } = itemsSlice.actions;
export default itemsSlice.reducer;
