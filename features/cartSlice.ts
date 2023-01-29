import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../app/store";
import { HYDRATE } from "next-redux-wrapper";
import { StaticImageData } from "next/image";
import { stat } from "fs";
const ADD_TO_CART = "ADD_TO_CART"

// Type for our state
export interface AuthState {
  cartItems:{
    id: number;
    size: string;
    desc:string,
    price: number;
    quantity:number,
    img: StaticImageData;
  } [];
}

// Initial state
const initialState: AuthState = {
    cartItems: [],
};

// Actual Slice
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart:(state,actions)=>{
        
        
      state.cartItems.push(actions.payload)

      },
      removeToCart:(state,actions)=>{
        state.cartItems= state.cartItems.filter((item)=>item.id!==actions.payload)
        return state
      }
    },
  });

export const { addToCart,removeToCart } = cartSlice.actions;

export const selectAuthState = (state: AppState) => state.cart.cartItems;

export default cartSlice.reducer;