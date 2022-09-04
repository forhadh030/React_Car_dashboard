// Store is the redux version of state

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './slices/RootSlice';

export const store = configureStore({
    reducer,
    devTools: true
})