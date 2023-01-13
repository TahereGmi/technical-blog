import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import API from '../../helpers/API'

export interface IVendors {
    result: any
}

export interface IQueryParams {
    page: number, 
    page_size: number, 
    lat: number, 
    long: number
}

const initialState: IVendors = {
    result: {},
}

export const getVendors = createAsyncThunk(
  "restaurant/vendors-list",
  async (params: IQueryParams) => {
    const res = await API.get(`restaurant/vendors-list?page=${params.page}&page_size=${params.page_size}0&lat=${params.lat}&long=${params.long}`);
    return res;
  }
);

export const vendorsSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVendors.fulfilled, (state, action) => {
      state.result = action.payload
    })
  },
})

export const selectedValue = (state: RootState) => state.vendors.result

export default vendorsSlice.reducer