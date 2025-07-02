import { configureStore } from "@reduxjs/toolkit";
// import { api } from "../features/api/api";
import { booksApi } from "../features/books/bookApi";

export const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer
        // [api.reducerPath]: api.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch