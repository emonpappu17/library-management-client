import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IAddBook, IApiResponse, IBook } from '../../types';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["Book"],
    endpoints: (builder) => ({

        // getBooks
        getBooks: builder.query<IApiResponse<IBook[]>, void>({
            query: () => "books",
            providesTags: ["Book"]
        }),

        // deleteBook
        deleteBook: builder.mutation<IApiResponse<null>, string>({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["Book"]
        }),

        // addBook
        addBook: builder.mutation<IApiResponse<IBook>, IAddBook>({
            query: (book) => ({
                url: "books",
                method: "POST",
                body: book
            }),
            invalidatesTags: ["Book"]
        })

    })
})


export const { useGetBooksQuery, useDeleteBookMutation, useAddBookMutation } = booksApi;

