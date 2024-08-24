import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../Component/cartSlice';
import productSlice from '../Component/productSlice'

export const store = configureStore({
    reducer: {
        cart:cartSlice,
        product:productSlice,
    }
});