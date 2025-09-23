import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './searchSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
    },
    middleware: (getDefaultMiddleWare) => 
        getDefaultMiddleWare({
            serializableCheck: false
        }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;