import { createSlice } from '@reduxjs/toolkit'

export const length = createSlice({
  name: 'length',
  initialState: 6,
  reducers: {
    changeLenght: (_, action) => {
      return action.payload
    }
  }
})

export const { changeLenght } = length.actions
export default length.reducer
