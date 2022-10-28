import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  uppercase: false,
  lowercase: true,
  number: false,
  symbol: false
}

export const parameters = createSlice({
  name: 'parameters',
  initialState,
  reducers: {
    toggleParameters: (state, action) => {
      switch (action.payload) {
        case 'lowercase':
          return { ...state, lowercase: !state.lowercase }

        case 'uppercase':
          return { ...state, uppercase: !state.uppercase }

        case 'numbers':
          return { ...state, number: !state.number }

        case 'symbols':
          return { ...state, symbol: !state.symbol }
      }
      return state
    }
  }
})

export const { toggleParameters } = parameters.actions
export default parameters.reducer
