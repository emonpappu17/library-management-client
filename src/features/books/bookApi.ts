import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IApiResponse, IBook } from '../../types';
// import type { IBook } from '../../types'
// import { api } from '../api/api'

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints: (builder) => ({
        getBooks: builder.query<IApiResponse<IBook[]>, void>({
            query: () => "books"
        })
    })
})

// export const bookApi = api.injectEndpoints({
//     endpoints: (builder) => ({
//         getBooks: builder.query<IBook[], void>({
//             query: () => "/books",
//             providesTags: ["Book"],
//         })
//     })
// })

export const { useGetBooksQuery } = booksApi;

