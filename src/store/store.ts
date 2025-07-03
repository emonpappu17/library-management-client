import { configureStore } from "@reduxjs/toolkit";
// import { api } from "../features/api/api";
import { booksApi } from "../features/books/bookApi";
import modalReducer from '../features/modal/modalSlice'
import { borrowApi } from "../features/borrows/borrowApi";

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        [booksApi.reducerPath]: booksApi.reducer,
        [borrowApi.reducerPath]: borrowApi.reducer
        // [api.reducerPath]: api.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware, borrowApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch