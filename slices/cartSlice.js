import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   
    addToCart: (state, action) => {
        //action.payload to create the new item
        //add the new item to items
      state.item = [...state.items,action.payload]
    },
    removeFromCart: (state, action) => {
        //store all the cart items
        let newCart = [...state.items];
        //find the index of the item to remove
        let itemIndex = state.items.findIndex(item=>item.id==action.payload.id)

        //if item is found then remove it by spliceing
        if(itemIndex>=0){
            newCart.splice(itemIndex,1)
        }else{
            console.log("Item not found to remove,oops")
        }
        //set new Cart
        state.items = newCart;
      },
      emptyCart: (state, action) => {
        state.items =[];
      },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,emptyCart } = cartSlice.actions

//select the cart data by recieving the root state, calling the slice and returning the 
//cart items
export const selectCart = state=>state.cart.items;

//select items by id pass the state and id and return a filted array of matching items
export const selectCartItemsById = (state,id)=>state.cart.items.filter(item=>item.id==id)

//calculate cart items and return total

export const selectCartTotal = state=>state.cart.items.reduce((total,item)=>total=total+item.price,0)
export default cartSlice.reducer