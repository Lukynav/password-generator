import { createSlice } from '@reduxjs/toolkit'
import { passwordGenerator } from '../../utils/passwordGenerator'

export const password = createSlice({
  name: 'password',
  initialState: 'Please select almost 1 param.',
  reducers: {
    updatePassword: (state, action) => {
      const { length, parameters } = action.payload
      return passwordGenerator(length, parameters)
    }
  }
})

export const { updatePassword } = password.actions
export default password.reducer
