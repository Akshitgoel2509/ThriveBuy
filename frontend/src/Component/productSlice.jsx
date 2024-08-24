import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"product",
    initialState:{
       product:[],

    },
    reducers:{
        addProduct(state,action){
            state.product=[...state.product,action.payload];
        },
        updateProduct(state,action){
            const index= state.product.findIndex((product)=>product.id===action.payload.id)
            if (index !== -1) {
                const updatedProduct = { ...state.product[index], ...action.payload };
                updatedProduct.size.itemNo = state.product[index].size.itemNo+ action.payload.size.itemNo;
                state.product[index] = updatedProduct;
              }
        },
        updateItemNo(state,action){
            const index= state.product.findIndex((product)=>product.id===action.payload.id);
            if (index !== -1) {
                const updatedProduct = { ...state.product[index], ...action.payload };
                updatedProduct.size.itemNo = action.payload.size.itemNo;
                state.product[index] = updatedProduct;
              }
        }
    }

})

export const {addProduct,updateProduct,updateItemNo}=productSlice.actions;
export default productSlice.reducer;
