import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IAddBook, IApiResponse, IBook, IUpdateBook } from '../../types';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
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
        }),

        // updateBook
        updateBook: builder.mutation<IApiResponse<IBook>, IUpdateBook>({
            query: ({ id, ...book }) => ({
                url: `books/${id}`,
                method: "PUT",
                body: book
            }),
            invalidatesTags: ["Book"]
        }),

    })
})


export const { useGetBooksQuery, useDeleteBookMutation, useAddBookMutation, useUpdateBookMutation } = booksApi;



// // src/features/books/bookApi.ts
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { IBook, IApiResponse } from "../../types"; // ✅ adjust path based on your project

// export const booksApi = createApi({
//     reducerPath: "booksApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }), // ✅ update baseURL if needed
//     tagTypes: ["Book"],
//     endpoints: (builder) => ({
//         // ✅ Get all books
//         getBooks: builder.query<IApiResponse<IBook[]>, void>({
//             query: () => "/books",
//             providesTags: ["Book"],
//         }),

//         // ✅ Create a new book
//         createBook: builder.mutation<IApiResponse<IBook>, Partial<IBook>>({
//             query: (newBook) => ({
//                 url: "/books",
//                 method: "POST",
//                 body: newBook,
//             }),
//             invalidatesTags: ["Book"],
//         }),

//         // ✅ Optimistic deleteBook mutation
//         deleteBook: builder.mutation<IApiResponse<null>, string>({
//             query: (id) => ({
//                 url: `/books/${id}`,
//                 method: "DELETE",
//             }),
//             async onQueryStarted(id, { dispatch, queryFulfilled }) {
//                 const patchResult = dispatch(
//                     booksApi.util.updateQueryData("getBooks", undefined, (draft) => {
//                         if (draft?.data) {
//                             const index = draft.data.findIndex((book) => book._id === id);
//                             if (index !== -1) draft.data.splice(index, 1); // 🧹 Optimistically remove
//                         }
//                     })
//                 );

//                 try {
//                     await queryFulfilled;
//                 } catch {
//                     patchResult.undo(); // 🔄 Rollback if error
//                 }
//             },
//         }),

//         // ✅ Update a book
//         updateBook: builder.mutation<IApiResponse<IBook>, Partial<IBook> & { id: string }>({
//             query: ({ id, ...rest }) => ({
//                 url: `/books/${id}`,
//                 method: "PATCH",
//                 body: rest,
//             }),
//             invalidatesTags: ["Book"],
//         }),

//         // ✅ Get book by ID (optional)
//         getBookById: builder.query<IApiResponse<IBook>, string>({
//             query: (id) => `/books/${id}`,
//         }),
//     }),
// });

// export const {
//     useGetBooksQuery,
//     useCreateBookMutation,
//     useDeleteBookMutation,
//     useUpdateBookMutation,
//     useGetBookByIdQuery,
// } = booksApi;


