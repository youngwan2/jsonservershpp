import { configureStore,createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState : [
        {id:0, img:'/logo.png', title:'옷이름', price: '가격', count:1,deliveryFee:3000},
       
    ],
    reducers: {
        cartAdd(state,action){
            state.push(action.payload)
        },
        cartDel(state,action){
            state.splice(action.payload,1)
        }
        
    }
})

export let {cartAdd,cartDel} = cart.actions


export default configureStore({
    reducer : {
        cart: cart.reducer

    }
})