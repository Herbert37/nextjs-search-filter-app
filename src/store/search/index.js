import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ITEMS_API_URL } from 'src/environment'

const initialState = {
  isLoading: true,
  isLoadingUserDetail: true,
  searchValue: '',
  itemsResponse: [],
  errorMessage: '',
  errorMessageUserDetail: '',
  userDetail: null,
}

export const fetchItems = createAsyncThunk('search/fetchItems', async () => {
  try {
    const request = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        ['Content-Type']: 'application/json',
      },
      url: ITEMS_API_URL,
    }
    const response = await axios(request)
    return response
  } catch (error) {
    return error.response
  }
})

export const fetchUserDetail = createAsyncThunk('search/fetchUserDetail', async (id) => {
  try {
    const request = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        ['Content-Type']: 'application/json',
      },
      url: `${ITEMS_API_URL}/${id}`,
    }
    const response = await axios(request)
    return response
  } catch (error) {
    return error.response
  }
})

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    onChangeSearch: (state, action) => {
      state.searchValue = action.payload
    },
  },
  extraReducers: {
    [fetchItems.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchItems.fulfilled.type]: (state, action) => {
      state.isLoading = false
      state.itemsResponse = action.payload.data
    },
    [fetchItems.rejected.type]: (state) => {
      state.isLoading = false
      state.errorMessage = 'The service is unavailable temporary'
    },
    [fetchUserDetail.pending.type]: (state) => {
      state.isLoadingUserDetail = true
    },
    [fetchUserDetail.fulfilled.type]: (state, action) => {
      state.isLoadingUserDetail = false
      state.userDetail = action.payload.data
    },
    [fetchUserDetail.rejected.type]: (state) => {
      state.isLoadingUserDetail = false
      state.errorMessageUserDetail = 'The service is unavailable temporary'
    },
  },
})

export const { onChangeSearch } = search.actions
export default search.reducer
