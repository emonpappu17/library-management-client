import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ['Book', "Borrow"],
    endpoints: () => ({})
})