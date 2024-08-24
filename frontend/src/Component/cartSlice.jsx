// import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

   const cartSlice = createSlice({
    name:"counter",
    initialState:{
      category:[],
      price:0,
      discount:100,
      rating:3,
      allProducts:[]
    },
    reducers:{
      updateAllProducts(state,action){
        // state.push(action.payload);
        // return action.payload;
        state.allProducts=action.payload;
      },
      updateCategory(state,action){
       state.category = action.payload;
  
      },
      updatePrice(state,action){
        state.price = action.payload;
      },
      updateDiscount(state,action){
        state.discount = action.payload;
      },
      updateRating(state,action){
        state.rating = action.payload;
      }
    }
   });


export default cartSlice.reducer;
export const {updateAllProducts,updateCategory,updatePrice,updateDiscount,updateRating} = cartSlice.actions;

