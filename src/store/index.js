import { configureStore, combineReducers } from "@reduxjs/toolkit";
import search from './search'

const rootReducer = combineReducers({
    search
});

export const store = configureStore({
    reducer: rootReducer,
});