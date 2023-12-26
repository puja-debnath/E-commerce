import { configureStore } from '@reduxjs/toolkit';
import productReducer from"../features/Product-list/ProductListslice" ;

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
