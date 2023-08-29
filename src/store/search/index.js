import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ITEMS_API_URL } from 'src/environment';

const initialState = {
	// entra en estado de carga por que quiere obtener la info y se va a tardar
	isLoading: true,
	isError: false,
	searchValue: '', // el valor de busqueda para que sea filtrado
	itemsResponse: [], // los resultados de la busqueda
	errorMessage: '', // error para ser mostrado
};

export const fetchItems = createAsyncThunk('search/fetchItems', async () => {
	try {
		const request = {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				['Content-Type']: 'application/json',
			},
			url: ITEMS_API_URL,
		};
		const response = await axios(request);
		return response;
	} catch (error) {
		return error.response;
	}
});

const search = createSlice({
	name: 'search',
	initialState,
	reducers: {
		onChangeSearch: (state, action) => {
			state.searchValue = action.payload;
		},
	},
	extraReducers: {
		[fetchItems.pending.type]: (state) => {
			state.isLoading = true;
			state.isError = false;
		},
		[fetchItems.fulfilled.type]: (state, action) => {
			state.isLoading = false;
			state.isError = false;
			state.itemsResponse = action.payload.data;
		},
		[fetchItems.rejected.type]: (state) => {
			state.isLoading = false;
			state.isError = true;
			state.errorMessage = 'The service is unavailable temporary';
		},
	},
});

export const { onChangeSearch } = search.actions;
export default search.reducer;