import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from './ProductListApi';

const initialState = {
  products: [],
  status: 'idle',
};
export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  
  reducers: {
    increment: (state) => {
      state.products += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
      });
  },
});

export const { increment } = productSlice.actions;
export const selectAllproducts = (state) => state.product.products;
export default productSlice.reducer;
