import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const drawingApi = createApi({
  reducerPath: 'drawingApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    postDrawing: builder.mutation({
      query: (body) => ({
        url: '/drawings',
        method: 'POST',
        body,
      }),
    }),

    getDrawing: builder.query({
      query: (id: string) => ({
        url: `/drawings/${id}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { usePostDrawingMutation } = drawingApi



