import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts ,fetchProductByFilter} from './ProductListApi';

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

export const fetchProductByFiltersAsync = createAsyncThunk(
  'product/fetchProductByFilter',
  async (filter) => {
    const response = await fetchProductByFilter(filter);
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
        state.products = action.payload;
      })
      .addCase(fetchProductByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

export const { increment } = productSlice.actions;
export const selectAllproducts = (state) => state.product.products;
export default productSlice.reducer;
