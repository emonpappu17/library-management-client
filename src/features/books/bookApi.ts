// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IBook } from '../../types'
import { api } from '../api/api'

// export const booksApi = createApi({
//     reducerPath: 'booksApi',
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
//     endpoints: (builder) => ({
//         getBooks: builder.query({
//             query: () => "books"
//         })
//     })
// })

export const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query<IBook[], string>({
            query: () => "/books",
            providesTags: ["Book"],
        })
    })
})

// export const { useGetBooksQuery } = booksApi