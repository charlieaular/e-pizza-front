import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categorySelected: 1,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload
    },
  },
  
})

// Action creators are generated for each case reducer function
export const { setCategorySelected } = categorySlice.actions

export default categorySlice.reducer