import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

// Action Creators are generated or each case reducer function
export const { increment, decrement } = counterSlice.actions

// Selector
export const selectedValue = (state: RootState) => state.counter.value

export default counterSlice.reducer