import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { cartService } from '../services/cart';

const initialState = {
  cartProducts: [],
}

export const getCartProducts = createAsyncThunk(
  "products/cartProducts", async (_, thunkAPI) => {
    try {
      const { data } = await cartService.products()
      return data.CartProducts
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  });

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartProductsSelected: (state, action) => {
      state.cartProducts = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartProducts.pending, (state) => {
      state.cartProducts = [];
    });
    builder.addCase(
      getCartProducts.fulfilled, (state, { payload }) => {
        state.cartProducts = payload;
      });
    builder.addCase(
      getCartProducts.rejected, (state, action) => {
        state.cartProducts = [];

      });
  }

})

// Action creators are generated for each case reducer function
export const { setCartProductsSelected } = cartSlice.actions

export default cartSlice.reducer