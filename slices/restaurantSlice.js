import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant:null
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
   
    setRestaurant: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions

//returns restaurans by recieving the root state, calling the slice and returning the 
//retuarants value
export const selectRestaurant = state=>state.restaurant.restaurantSlice;
export default restaurantSlice.reducer