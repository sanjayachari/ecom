import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        products : [],
        quantity : 0,
        total : 0,
    },
    reducers : {
        addProduct : (state,action)=>{
                state.quantity += 1;
                state.products.push(action.payload);
                state.total += action.payload.price * action.payload.quantity;
        }
    }
})

export const {addProduct} = cartSlice.actions;
// console.log(state.products);
// console.log(state.quantity);

export default cartSlice.reducer;