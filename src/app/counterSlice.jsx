import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  value1:false,
   array:[],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increments: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset:(state)=>
    {
      state.value=0
    },
    setdata: (state, action) => {
     state.array =[...state.array,action.payload]
    },
    check:(state)=>
    {
      state.value1=true
    },
    uncheck:(state)=>
    {
      state.value1=false
    },

  },
})
// Action creators are generated for each case reducer function
export const { increments, decrement,
 setdata,check,uncheck,reset} = counterSlice.actions

export default counterSlice.reducer;