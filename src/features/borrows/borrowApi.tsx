import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IApiResponse, IBorrow, IBorrowData } from '../../types';

export const borrowApi = createApi({
    reducerPath: 'borrowApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["Borrow", "Book"],
    endpoints: (builder) => ({

        // createBorrow
        createBorrow: builder.mutation<IApiResponse<IBorrow>, IBorrowData>({
            query: (borrow) => ({
                url: "borrow",
                method: "POST",
                body: borrow
            }),
            invalidatesTags: ["Borrow", "Book"]
        })

    })
})


export const { useCreateBorrowMutation } = borrowApi;

