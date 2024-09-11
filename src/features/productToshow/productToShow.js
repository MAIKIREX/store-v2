import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const productToShow = createSlice({
  name: 'productToShow',
  initialState,
  reducers: {
    setProductToShow: (state, action)=>{
        state = action.payload
    }
  }
});

export const {setProductToShow} = productToShow.actions

export default productToShow.reducer